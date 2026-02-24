// Global constants
export const CONSTANTS = {
  API_BASE_URL: process.env.REACT_APP_API_URL || 'http://localhost:3001/api',
  APP_NAME: 'Bajaj Sugar Management System',
  SEASONS: [
    { value: '2122', label: 'Season 2021-2022' },
    { value: '2223', label: 'Season 2022-2023' },
    { value: '2324', label: 'Season 2023-2024' },
    { value: '2425', label: 'Season 2024-2025' },
    { value: '2526', label: 'Season 2025-2026' },
  ],
};

export default CONSTANTS;
