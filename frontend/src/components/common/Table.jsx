import React from 'react';

export default function Table({ columns, data, className }) {
  return (
    <table className={`table ${className || ''}`}>
      <thead>
        <tr>
          {columns.map((col, idx) => (
            <th key={idx}>{col.label}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, idx) => (
          <tr key={idx}>
            {columns.map((col, colIdx) => (
              <td key={colIdx}>{row[col.key]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
