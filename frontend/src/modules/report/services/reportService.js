// Report Service
const reportService = {
  getReports: async () => {
    try {
      const response = await fetch('/api/reports');
      return response.json();
    } catch (error) {
      console.error('Error fetching reports:', error);
      throw error;
    }
  },
};

export default reportService;
