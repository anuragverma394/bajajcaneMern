import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../../../assets/styles/home.css";
import logo from "../../../assets/images/Bajaj_Logo.png";

export default function Home() {
const [activeTab, setActiveTab] = useState("marketing");
const [selectedPlants, setSelectedPlants] = useState([]);
const [currentDate, setCurrentDate] = useState("");
const [currentTime, setCurrentTime] = useState("");
const [filterDate, setFilterDate] = useState("");
const [userName, setUserName] = useState("Admin");
const [season, setSeason] = useState("2526");
const [showUserMenu, setShowUserMenu] = useState(false);
const [showPlantsDropdown, setShowPlantsDropdown] = useState(false);
const [isLoading, setIsLoading] = useState(false);
const [chartData, setChartData] = useState(null);
const [selectedPlant, setSelectedPlant] = useState("All Plants");
const navigate = useNavigate();

// Plants list mock data (replace with API call)
const [plants] = useState([
{ id: 1, name: "Plant 1", code: "PL001" },
{ id: 2, name: "Plant 2", code: "PL002" },
{ id: 3, name: "Plant 3", code: "PL003" },
]);

// Get current date and time
useEffect(() => {
const updateDateTime = () => {
const now = new Date();
const day = String(now.getDate()).padStart(2, "0");
const month = String(now.getMonth() + 1).padStart(2, "0");
const year = now.getFullYear();
const hours = String(now.getHours()).padStart(2, "0");
const minutes = String(now.getMinutes()).padStart(2, "0");
const seconds = String(now.getSeconds()).padStart(2, "0");
const ampm = now.getHours() >= 12 ? "PM" : "AM";

setCurrentDate(`${day}/${month}/${year}`);
setCurrentTime(`${hours}:${minutes}:${seconds} ${ampm}`);
};

updateDateTime();
const timer = setInterval(updateDateTime, 1000);
return () => clearInterval(timer);
}, []);

// Set default date range (15 days ago to today)
useEffect(() => {
const today = new Date();
const fifteenDaysAgo = new Date(today.getTime() - 15 * 24 * 60 * 60 * 1000);

const formatDate = (date) => {
const day = String(date.getDate()).padStart(2, "0");
const month = String(date.getMonth() + 1).padStart(2, "0");
const year = date.getFullYear();
return `${year}-${month}-${day}`;
};

setFilterDate(formatDate(today));
}, []);

// Handle click outside the user menu to close it
useEffect(() => {
const handleClickOutside = (event) => {
const userMenu = document.querySelector(".user-menu-wrapper");
if (userMenu && !userMenu.contains(event.target)) {
setShowUserMenu(false);
}
const plantsDropdown = document.querySelector(".plants-dropdown-wrapper");
if (plantsDropdown && !plantsDropdown.contains(event.target)) {
setShowPlantsDropdown(false);
}
};

document.addEventListener("click", handleClickOutside);
return () => document.removeEventListener("click", handleClickOutside);
}, []);

const handleSearch = () => {
if (!filterDate) {
alert("Please select a date");
return;
}

if (selectedPlants.length === 0) {
alert("Please select at least one plant");
return;
}

if (activeTab === "marketing") {
fetchMarketingData();
} else {
fetchSurveyData();
}
};

const handleTabChange = (tab) => {
setActiveTab(tab);
setChartData(null); // Clear previous chart data when switching tabs
};

const handleLogout = () => {
  // Clear user data from localStorage/session
  localStorage.removeItem("authToken");
  localStorage.removeItem("userData");
  sessionStorage.clear();
  
  // Navigate to login
  navigate("/login");
};

const handleChangePassword = () => {
  console.log("Change Password clicked");
  // Add change password logic here
};

const handleLockScreen = () => {
  console.log("Lock Screen clicked");
  // Add lock screen logic here
};

// Toggle plant selection
const togglePlantSelection = (plant) => {
setSelectedPlants((prevPlants) => {
const isSelected = prevPlants.some((p) => p.id === plant.id);
if (isSelected) {
return prevPlants.filter((p) => p.id !== plant.id);
} else {
return [...prevPlants, plant];
}
});
};

// Get comma-separated factory codes from selected plants
const getFactoryCodes = () => {
return selectedPlants.map((p) => p.code).join(",");
};

// Fetch marketing data from API
const fetchMarketingData = async () => {
if (selectedPlants.length === 0) {
alert("Please select at least one plant");
return;
}

setIsLoading(true);
try {
const response = await fetch('/api/reports/marketing', {
method: 'POST',
headers: {
'Content-Type': 'application/json',
},
body: JSON.stringify({
factoryCode: getFactoryCodes(),
date: filterDate,
season: season,
}),
});

if (!response.ok) {
throw new Error(`HTTP error! status: ${response.status}`);
}

const data = await response.json();
setChartData(data);
console.log('Marketing data:', data);
} catch (error) {
console.error('Error fetching marketing data:', error);
alert('Error fetching marketing data. Please try again.');
} finally {
setIsLoading(false);
}
};

// Fetch survey data from API
const fetchSurveyData = async () => {
if (selectedPlants.length === 0) {
alert("Please select at least one plant");
return;
}

setIsLoading(true);
try {
const response = await fetch('/api/reports/survey', {
method: 'POST',
headers: {
'Content-Type': 'application/json',
},
body: JSON.stringify({
factoryCode: getFactoryCodes(),
date: filterDate,
season: season,
}),
});

if (!response.ok) {
throw new Error(`HTTP error! status: ${response.status}`);
}

const data = await response.json();
setChartData(data);
console.log('Survey data:', data);
} catch (error) {
console.error('Error fetching survey data:', error);
alert('Error fetching survey data. Please try again.');
} finally {
setIsLoading(false);
}
};

return (
<div className="dashboard-container">
{/* HEADER */}
<header className="dashboard-header">
<div className="logo">
<img src={logo} alt="Bajaj Sugar" className="logo-img" />
<p className="season-info">Crushing Season {season}</p>
</div>
<div className="header-right">
<div className="user-menu-wrapper">
<button
className="user-profile-btn"
onClick={() => setShowUserMenu(!showUserMenu)}
>
<div className="user-avatar">A</div>
<div className="user-details">
<div className="user-greeting">Welcome {userName}</div>
<div className="user-time">{currentDate} - {currentTime}</div>
</div>
<span className="dropdown-arrow">▼</span>
</button>

{showUserMenu && (
<div className="user-dropdown-menu">
<button className="user-menu-item" onClick={handleLockScreen}>
<span className="menu-icon">🔒</span>
Lock Screen
</button>
<button className="user-menu-item" onClick={handleChangePassword}>
<span className="menu-icon">🔑</span>
Change Password
</button>
<button className="user-menu-item logout" onClick={handleLogout}>
<span className="menu-icon">🚪</span>
Logout
</button>
</div>
)}
</div>
</div>
</header>

{/* NAVIGATION MENU */}
<nav className="dashboard-nav">
<div className="nav-item dropdown">
<button className="dropdown-btn">User Management</button>

<div className="dropdown-content">
<a href="/add-view-user">Add/View User</a>
<a href="/add-view-roll">Add/View Roll</a>
<a href="/user-roll-assign">Add/View User Roll Assign</a>
<a href="/manage-table-controls">Manage Table Controls</a>
</div>
</div>


<div className="nav-item dropdown">
<button className="dropdown-btn">Master</button>

<div className="dropdown-content">
<a href="/season">Add/View Season</a>
<a href="/group-mode-update">Group Mode Update</a>
<a href="/stopage">Add/View Stopage</a>
<a href="/transfer-received-unit">Transfer & Received Unit</a>
</div>
</div>

<div className="nav-item dropdown">
<button className="dropdown-btn">WhatsApp</button>

<div className="dropdown-content">
<a href="/import-excel-data">Import Excel Data</a>
<a href="/daily-lab-data-entry">Daily Lab Data Entry</a>
<a href="/daily-distillery-data-entry">Daily Distillery Data Entry</a>
<a href="/sugar-whatsapp-report">Sugar WhatsApp Report</a>
<a href="/sugar-whatsapp-new">Sugar WhatsApp New Report</a>
<a href="/distillery-whatsapp-report">Distillery WhatsApp Report</a>
<a href="/distillery-whatsapp-new">Distillery WhatsApp New Report</a>
</div>
</div>


<div className="nav-item dropdown">
<button className="dropdown-btn">Lab</button>

<div className="dropdown-content">
<a href="/lab-hour-data-entry">Add/View Lab Hour Data Entry</a>
<a href="/daily-analysis-entry">Daily Analysis Entry</a>
<a href="/target-cane-plan">Add/New Target Cane Plan</a>
<a href="/daily-target-vs-actual">Add/View Daily Target VS Actual</a>
<a href="/distillery-budget">Add/View Distillery Budget</a>
<a href="/daily-rainfall">Add/View Daily Rainfall</a>
<a href="/monthly-entry">Add/View Monthly Entry</a>
<a href="/employee-notification">Employee Notification</a>
</div>
</div>


<div className="nav-item dropdown">
<button className="dropdown-btn">Tracking</button>
<div className="dropdown-content">
<a href="/target-entry">Target Entry</a>
<a href="/live-location">Live Location</a>
<a href="/tracking-executive">Tracking Executive Report</a>
<a href="/target-report">Target Report</a>
<a href="/target-tracking">Target Tracking Report</a>
<a href="/grower-meeting">Grower Meeting Report</a>
</div>
</div>



<div className="nav-item dropdown">
<button className="dropdown-btn">Report</button>
<div className="dropdown-content">
<a href="/hourly-crushing">Hourly Crushing Report</a>
<a href="/analysis-data-as-on">Analysis Data As On Report</a>
<a href="/centre-purchase">Centre Purchase Report</a>
<a href="/truck-dispatch-weighed">Truck Dispatch Weighed Report</a>
<a href="/indent-fail-summary">Indent Fail Summary Report</a>
<a href="/target-vs-actual">Target VS Actual Report</a>
<a href="/target-vs-actual-periodical">Target VS Actual Report (Periodical)</a>
<a href="/driage-center-summary">Driage Center Summary Report</a>
<a href="/driage-clerk-summary">Driage Clerk Summary Report</a>
<a href="/driage-centre-clerk-summary">Driage Centre And Clerk Summary Report</a>
<a href="/driage-clerk-centre-summary">Driage Clerk And Centre Summary Report</a>
<a href="/distillery-budget-vs-actual">Distillery Budget Vs Actual Report</a>
</div>
</div>



<div className="nav-item dropdown">
<button className="dropdown-btn">New Report</button>

<div className="dropdown-content">
<a href="/hourly-cane-arrival">Hourly Cane Arrival</a>
<a href="/hourly-cane-arrival-weight">Hourly CaneArrival Weight</a>
<a href="/indent-purchase-report">Indent Purchase Report New</a>
<a href="/center-blance-report">Center Blance Report</a>
<a href="/centre-purchase-truck-report">Centre Purchase Truck Report New</a>
<a href="/indent-fail-availability">Indent Fail Availability Summary Report</a>
<a href="/centre-wise-cane-purchase">Centre Wise Cane Purchase Report</a>
<a href="/weightment-exceptional">Weightment Exceptional Report</a>
</div>
</div>
<div className="nav-item dropdown">
<button className="dropdown-btn">Survey Report</button>

<div className="dropdown-content">
<a href="/daily-survey-progress">Daily Survey Progress Report</a>
<a href="/daily-hourly-survey-progress">Daily Hourly Survey Progress Report</a>
<a href="/final-village-first-survey">Final Village First Survey Report</a>
<a href="/final-village-first-summary">Final Village First Survey Summery Report</a>
<a href="/unit-wise-survey-status">Unit Wise Survey Status Report</a>
<a href="/unit-wise-area-summary">Unit Wise Survey Area Summary Report</a>
<a href="/survey-actual-variety-wise">Survey Actual Variety Wise Report</a>
<a href="/actual-variety-wise-area-supply">Actual Variety Wise Area And Supply</a>
<a href="/effected-cane-area">Effected Cane Area Report</a>
<a href="/effected-cane-area-summary">Effected Cane Area Summary Report</a>
<a href="/plot-wise-details">Plot Wise Details</a>
<a href="/category-wise-summary">Category Wise Summary</a>
<a href="/cane-variety-village-grower">Cane Variety Village Grower Report</a>
<a href="/weekly-submission-planting">Weekly Submission of Planting</a>
<a href="/weekly-submission-indenting">Weekly Submission of Indenting</a>
<a href="/survey-checking">Survey Checking Report</a>
</div>
</div>
<div className="nav-item dropdown">
<button className="dropdown-btn">Accounts Report</button>

<div className="dropdown-content">
<a href="/variety-wise-cane-purchase">Variety Wise Cane Purchase</a>
<a href="/variety-wise-cane-purchase-amount">Variety Wise Cane Purchase Amount</a>
<a href="/capacity-utilisation">Capacity Utilisation</a>
<a href="/cane-purchase-movement">Cane Purchase Movement</a>
<a href="/capacity-utilisation-periodical">Capacity Utilisation Periodical</a>
<a href="/distillery-report">Distillery Report</a>
<a href="/transporter-loader-bill">Transporter / Loader Bill</a>
<a href="/api-status-report">API Status Report</a>
<a href="/centre-var-group-wise">Centre / Var Group Wise Cane Purchase</a>
<a href="/loan-summary">Loan Summary Report</a>
</div>
</div>
</nav>

{/* MAIN CONTENT */}
<main className="dashboard-main">
{/* TAB SECTION */}
<div className="tabs-section">
<div className="tabs">
<button
className={`tab ${activeTab === "marketing" ? "active" : ""}`}
onClick={() => handleTabChange("marketing")}
>
Marketing
</button>
<button
className={`tab ${activeTab === "survey" ? "active" : ""}`}
onClick={() => handleTabChange("survey")}
>
Survey
</button>
</div>

{/* SEARCH CONTROLS */}
<div className="search-controls">
{/* Multi-select Plants Dropdown */}
<div className="plants-dropdown-wrapper">
<button 
className="plants-trigger-btn"
onClick={() => setShowPlantsDropdown(!showPlantsDropdown)}
>
{selectedPlants.length > 0 
? selectedPlants.map(p => p.code).join(", ")
: "Select Plants"}
<span className="dropdown-arrow">▼</span>
</button>
{showPlantsDropdown && (
<div className="plants-dropdown-menu">
{plants.map((plant) => (
<label key={plant.id} className="dropdown-checkbox-item">
<input
type="checkbox"
checked={selectedPlants.some((p) => p.id === plant.id)}
onChange={() => togglePlantSelection(plant)}
/>
{plant.name} ({plant.code})
</label>
))}
</div>
)}
</div>

{/* Date Input */}
<input
type="date"
value={filterDate}
onChange={(e) => setFilterDate(e.target.value)}
className="date-input-minimal"
/>

{/* Search Button */}
<button
className="search-btn"
onClick={handleSearch}
disabled={isLoading}
>
{isLoading ? "Loading..." : "Search"}
</button>
</div>
</div>

{/* CANE CRUSH CHART */}
<section className="chart-section">
<div className="section-header-flex">
<Link to="/hourly-crushing" className="section-header teal-bg">Cane Crush</Link>
<select className="cane-select" value={selectedPlant} onChange={(e) => setSelectedPlant(e.target.value)}>
<option value="All Plants">Select Here</option>
<option value="Plant 1">Plant 1</option>
<option value="Plant 2">Plant 2</option>
<option value="Plant 3">Plant 3</option>
</select>
</div>
<div className="chart-container">
<svg className="line-chart" viewBox="0 0 1000 300">

</svg>

</div>
</section>

{/* TWO CHARTS ROW */}
<div className="charts-row">
{/* YEAST TIME OVERSHOOTS */}
<section className="chart-section half">
<Link to="/daily-lab-data" className="section-header blue-bg">Yeast Time Overshoots [Centre To Gate]</Link>
<div className="chart-container">
<svg className="bar-chart" viewBox="0 0 400 200">
{/* Bars - horizontal */}

</svg>
</div>
<div className="pagination">
<button>First</button>
<button>Previous</button>
<input type="text" placeholder="1" />
<button>Next</button>
<button>Last</button>
</div>
</section>

{/* TOKENS GROSS */}
<section className="chart-section half">
<Link to="/daily-analysis" className="section-header teal-bg">TokensGross/TokenOvershoot | -Recalcul</Link>
<div className="chart-container">
<svg className="bar-chart" viewBox="0 0 400 200">
</svg>
</div>
<div className="pagination">
<button>First</button>
<button>Previous</button>
<input type="text" placeholder="1" />
<button>Next</button>
<button>Last</button>
</div>
</section>
</div>

{/* TWO STACKED CHARTS ROW */}
<div className="charts-row">
{/* PURCHASE OVERSOLD */}
<section className="chart-section half">
<Link to="/centre-purchase" className="section-header red-bg">Purchase Oversold</Link>
<div className="chart-container">
<svg className="bar-chart" viewBox="0 0 400 200">
{/* Bars - horizontal */}

</svg>
</div>
<div className="pagination">
<button>First</button>
<button>Previous</button>
<input type="text" placeholder="1" />
<button>Next</button>
<button>Last</button>
</div>
</section>

{/* CENTRE TO GATE RATIO */}
<section className="chart-section half">
<Link to="/target-vs-actual" className="section-header pink-bg">Centre To Gate Ratio</Link>
<div className="chart-container">
<svg className="stacked-bar-chart" viewBox="0 0 400 250">
</svg>
</div>
<div className="pagination">
<button>First</button>
<button>Previous</button>
<input type="text" placeholder="1" />
<button>Next</button>
<button>Last</button>
</div>
</section>
</div>
</main>
</div>
);
}
