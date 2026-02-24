// Accounts Report Service
const accountsReportService = {
  getAccountsReports: async () => {
    try {
      const response = await fetch('/api/accounts-reports');
      return response.json();
    } catch (error) {
      console.error('Error fetching accounts reports:', error);
      throw error;
    }
  },
};

export default accountsReportService;
