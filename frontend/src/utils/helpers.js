// Helper functions
export const formatDate = (date) => {
  const d = new Date(date);
  const month = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  const year = d.getFullYear();
  return `${year}-${month}-${day}`;
};

export const formatTime = (time) => {
  const hours = String(time.getHours()).padStart(2, '0');
  const minutes = String(time.getMinutes()).padStart(2, '0');
  const seconds = String(time.getSeconds()).padStart(2, '0');
  return `${hours}:${minutes}:${seconds}`;
};

export const getAuthToken = () => localStorage.getItem('token');

export const setAuthToken = (token) => localStorage.setItem('token', token);

export const clearAuthToken = () => localStorage.removeItem('token');

export default {
  formatDate,
  formatTime,
  getAuthToken,
  setAuthToken,
  clearAuthToken,
};
