import React from 'react';

export default function Navbar() {
  return (
    <nav className="app-navbar">
      <ul className="nav-links">
        <li><a href="/">Home</a></li>
        <li><a href="/dashboard">Dashboard</a></li>
        <li><a href="/users">Users</a></li>
      </ul>
    </nav>
  );
}
