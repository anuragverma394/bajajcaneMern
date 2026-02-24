// Lab Service
const labService = {
  getLabData: async () => {
    try {
      const response = await fetch('/api/lab/data');
      return response.json();
    } catch (error) {
      console.error('Error fetching lab data:', error);
      throw error;
    }
  },
};

export default labService;
