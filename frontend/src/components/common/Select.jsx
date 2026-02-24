import React from 'react';

export default function Select({ options, className, ...props }) {
  return (
    <select className={`select ${className || ''}`} {...props}>
      {options.map((option, idx) => (
        <option key={idx} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
}
