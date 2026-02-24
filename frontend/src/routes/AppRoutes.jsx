import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Auth Pages
import Login from '../modules/userManagement/pages/login';

// Dashboard Pages
import Home from '../modules/dashboard/pages/Home';
import DashboardHome from '../modules/dashboard/pages/DashboardHome';

// User Management Pages
import AddViewUser from '../modules/userManagement/pages/AddViewUser';
import AddViewRole from '../modules/userManagement/pages/AddViewRole';
import UserRoleAssign from '../modules/userManagement/pages/UserRoleAssign';

// Master Pages
import AddViewSeason from '../modules/master/pages/AddViewSeason';
import GroupModeUpdate from '../modules/master/pages/GroupModeUpdate';
import AddViewStopage from '../modules/master/pages/AddViewStopage';
import TransferReceiveUnit from '../modules/master/pages/TransferReceiveUnit';

// WhatsApp Pages
import DailyLabDataEntry from '../modules/whatsapp/pages/DailyLabDataEntry';
import DailyDistilleryDataEntry from '../modules/whatsapp/pages/DailyDistilleryDataEntry';
import SugarWhatsAppReport from '../modules/whatsapp/pages/SugarWhatsAppReport';
import DistilleryWhatsAppReport from '../modules/whatsapp/pages/DistilleryWhatsAppReport';

// Lab Pages
import LabHourDataEntry from '../modules/lab/pages/LabHourDataEntry';
import DailyAnalysisEntry from '../modules/lab/pages/DailyAnalysisEntry';
import TargetCanePlan from '../modules/lab/pages/TargetCanePlan';
import DailyTargetVsActual from '../modules/lab/pages/DailyTargetVsActual';
import DistilleryBudget from '../modules/lab/pages/DistilleryBudget';
import DailyRainfall from '../modules/lab/pages/DailyRainfall';
import MonthlyEntry from '../modules/lab/pages/MonthlyEntry';
import EmployeeNotification from '../modules/lab/pages/EmployeeNotification';

// Tracking Pages
import TargetEntry from '../modules/tracking/pages/TargetEntry';
import LiveLocation from '../modules/tracking/pages/LiveLocation';
import TrackingExecutiveReport from '../modules/tracking/pages/TrackingExecutiveReport';
import TargetReport from '../modules/tracking/pages/TargetReport';
import TargetTrackingReport from '../modules/tracking/pages/TargetTrackingReport';
import GrowerMeetingReport from '../modules/tracking/pages/GrowerMeetingReport';

// Report Pages
import HourlyCrushingReport from '../modules/report/pages/HourlyCrushingReport';
import AnalysisDataReport from '../modules/report/pages/AnalysisDataReport';
import CentrePurchaseReport from '../modules/report/pages/CentrePurchaseReport';
import TruckDispatchWeighedReport from '../modules/report/pages/TruckDispatchWeighedReport';
import IndentFailSummaryReport from '../modules/report/pages/IndentFailSummaryReport';
import TargetVsActualReport from '../modules/report/pages/TargetVsActualReport';
import TargetVsActualPeriodicalReport from '../modules/report/pages/TargetVsActualPeriodicalReport';
import DriageReports from '../modules/report/pages/DriageReports';
import BudgetVsActualReport from '../modules/report/pages/BudgetVsActualReport';

// New Report Pages
import HourlyCaneArrival from '../modules/newReport/pages/HourlyCaneArrival';
import HourlyCaneArrivalWeight from '../modules/newReport/pages/HourlyCaneArrivalWeight';
import IndentPurchaseReportNew from '../modules/newReport/pages/IndentPurchaseReportNew';
import CenterBalanceReport from '../modules/newReport/pages/CenterBalanceReport';
import CentrePurchaseTruckReportNew from '../modules/newReport/pages/CentrePurchaseTruckReportNew';
import IndentFailAvailabilitySummary from '../modules/newReport/pages/IndentFailAvailabilitySummary';
import CentreWiseCanePurchaseReport from '../modules/newReport/pages/CentreWiseCanePurchaseReport';
import WeightmentExceptionalReport from '../modules/newReport/pages/WeightmentExceptionalReport';

// Survey Report Pages
import DailySurveyProgressReport from '../modules/surveyReport/pages/DailySurveyProgressReport';
import FinalVillageReports from '../modules/surveyReport/pages/FinalVillageReports';
import UnitWiseReports from '../modules/surveyReport/pages/UnitWiseReports';
import VarietyReports from '../modules/surveyReport/pages/VarietyReports';
import PlotWiseDetails from '../modules/surveyReport/pages/PlotWiseDetails';
import WeeklyReports from '../modules/surveyReport/pages/WeeklyReports';
import SurveyCheckingReport from '../modules/surveyReport/pages/SurveyCheckingReport';

// Accounts Report Pages
import VarietyWiseCanePurchase from '../modules/accountsReport/pages/VarietyWiseCanePurchase';
import VarietyWiseCanePurchaseAmount from '../modules/accountsReport/pages/VarietyWiseCanePurchaseAmount';
import CapacityUtilisation from '../modules/accountsReport/pages/CapacityUtilisation';
import CapacityUtilisationPeriodical from '../modules/accountsReport/pages/CapacityUtilisationPeriodical';
import CanePurchaseMovement from '../modules/accountsReport/pages/CanePurchaseMovement';
import DistilleryReport from '../modules/accountsReport/pages/DistilleryReport';
import TransporterLoaderBill from '../modules/accountsReport/pages/TransporterLoaderBill';
import ApiStatusReport from '../modules/accountsReport/pages/ApiStatusReport';
import CentreVarGroupWisePurchase from '../modules/accountsReport/pages/CentreVarGroupWisePurchase';
import LoanSummaryReport from '../modules/accountsReport/pages/LoanSummaryReport';

export default function AppRoutes() {
  return (
    <Routes>
      {/* Auth Routes */}
      <Route path="/login" element={<Login />} />
      
      {/* Dashboard Routes */}
      <Route path="/" element={<Home />} />
      <Route path="/dashboard" element={<Home />} />
      <Route path="/dashboard-home" element={<DashboardHome />} />
      <Route path="/users" element={<AddViewUser />} />
      <Route path="/roles" element={<AddViewRole />} />
      <Route path="/user-role-assign" element={<UserRoleAssign />} />

      {/* Master Routes */}
      <Route path="/seasons" element={<AddViewSeason />} />
      <Route path="/group-mode" element={<GroupModeUpdate />} />
      <Route path="/stopages" element={<AddViewStopage />} />
      <Route path="/transfer-receive" element={<TransferReceiveUnit />} />

      {/* WhatsApp Routes */}
      <Route path="/daily-lab-data" element={<DailyLabDataEntry />} />
      <Route path="/daily-distillery-data" element={<DailyDistilleryDataEntry />} />
      <Route path="/sugar-whatsapp-report" element={<SugarWhatsAppReport />} />
      <Route path="/distillery-whatsapp-report" element={<DistilleryWhatsAppReport />} />

      {/* Lab Routes */}
      <Route path="/lab-hour-data" element={<LabHourDataEntry />} />
      <Route path="/daily-analysis" element={<DailyAnalysisEntry />} />
      <Route path="/target-cane-plan" element={<TargetCanePlan />} />
      <Route path="/daily-target-vs-actual" element={<DailyTargetVsActual />} />
      <Route path="/distillery-budget" element={<DistilleryBudget />} />
      <Route path="/daily-rainfall" element={<DailyRainfall />} />
      <Route path="/monthly-entry" element={<MonthlyEntry />} />
      <Route path="/employee-notification" element={<EmployeeNotification />} />

      {/* Tracking Routes */}
      <Route path="/target-entry" element={<TargetEntry />} />
      <Route path="/live-location" element={<LiveLocation />} />
      <Route path="/tracking-executive-report" element={<TrackingExecutiveReport />} />
      <Route path="/target-report" element={<TargetReport />} />
      <Route path="/target-tracking-report" element={<TargetTrackingReport />} />
      <Route path="/grower-meeting-report" element={<GrowerMeetingReport />} />

      {/* Report Routes */}
      <Route path="/hourly-crushing" element={<HourlyCrushingReport />} />
      <Route path="/analysis-data" element={<AnalysisDataReport />} />
      <Route path="/centre-purchase" element={<CentrePurchaseReport />} />
      <Route path="/truck-dispatch" element={<TruckDispatchWeighedReport />} />
      <Route path="/indent-fail-summary" element={<IndentFailSummaryReport />} />
      <Route path="/target-vs-actual" element={<TargetVsActualReport />} />
      <Route path="/target-vs-actual-periodical" element={<TargetVsActualPeriodicalReport />} />
      <Route path="/driage-reports" element={<DriageReports />} />
      <Route path="/budget-vs-actual" element={<BudgetVsActualReport />} />

      {/* New Report Routes */}
      <Route path="/hourly-cane-arrival" element={<HourlyCaneArrival />} />
      <Route path="/hourly-cane-arrival-weight" element={<HourlyCaneArrivalWeight />} />
      <Route path="/indent-purchase-new" element={<IndentPurchaseReportNew />} />
      <Route path="/center-balance" element={<CenterBalanceReport />} />
      <Route path="/centre-purchase-truck-new" element={<CentrePurchaseTruckReportNew />} />
      <Route path="/indent-fail-availability" element={<IndentFailAvailabilitySummary />} />
      <Route path="/centre-wise-cane-purchase" element={<CentreWiseCanePurchaseReport />} />
      <Route path="/weightment-exceptional" element={<WeightmentExceptionalReport />} />

      {/* Survey Report Routes */}
      <Route path="/daily-survey-progress" element={<DailySurveyProgressReport />} />
      <Route path="/final-village-reports" element={<FinalVillageReports />} />
      <Route path="/unit-wise-reports" element={<UnitWiseReports />} />
      <Route path="/variety-reports" element={<VarietyReports />} />
      <Route path="/plot-wise-details" element={<PlotWiseDetails />} />
      <Route path="/weekly-reports" element={<WeeklyReports />} />
      <Route path="/survey-checking" element={<SurveyCheckingReport />} />

      {/* Accounts Report Routes */}
      <Route path="/variety-wise-cane-purchase" element={<VarietyWiseCanePurchase />} />
      <Route path="/variety-wise-cane-purchase-amount" element={<VarietyWiseCanePurchaseAmount />} />
      <Route path="/capacity-utilisation" element={<CapacityUtilisation />} />
      <Route path="/capacity-utilisation-periodical" element={<CapacityUtilisationPeriodical />} />
      <Route path="/cane-purchase-movement" element={<CanePurchaseMovement />} />
      <Route path="/distillery-report" element={<DistilleryReport />} />
      <Route path="/transporter-loader-bill" element={<TransporterLoaderBill />} />
      <Route path="/api-status" element={<ApiStatusReport />} />
      <Route path="/centre-var-group-wise" element={<CentreVarGroupWisePurchase />} />
      <Route path="/loan-summary" element={<LoanSummaryReport />} />
    </Routes>
  );
}
