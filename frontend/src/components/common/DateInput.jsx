import React from 'react';

export default function DateInput({ className, ...props }) {
  return (
    <input
      type="date"
      className={`date-input ${className || ''}`}
      {...props}
    />
  );
}
