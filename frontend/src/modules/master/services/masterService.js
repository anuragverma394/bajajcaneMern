// Master Service
const masterService = {
  getSeasons: async () => {
    try {
      const response = await fetch('/api/seasons');
      return response.json();
    } catch (error) {
      console.error('Error fetching seasons:', error);
      throw error;
    }
  },
};

export default masterService;
