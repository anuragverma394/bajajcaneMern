import React from 'react';

export default function Layout({ children }) {
  return (
    <div className="app-layout">
      <main className="layout-content">
        {children}
      </main>
    </div>
  );
}
