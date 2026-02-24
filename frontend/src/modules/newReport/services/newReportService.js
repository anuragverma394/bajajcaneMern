// New Report Service
const newReportService = {
  getNewReports: async () => {
    try {
      const response = await fetch('/api/new-reports');
      return response.json();
    } catch (error) {
      console.error('Error fetching new reports:', error);
      throw error;
    }
  },
};

export default newReportService;
