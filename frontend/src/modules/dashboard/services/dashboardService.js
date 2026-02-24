// Dashboard Service
const dashboardService = {
  getDashboardData: async () => {
    try {
      const response = await fetch('/api/dashboard/data');
      return response.json();
    } catch (error) {
      console.error('Error fetching dashboard data:', error);
      throw error;
    }
  },
};

export default dashboardService;
