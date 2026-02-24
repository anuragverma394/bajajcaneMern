// Tracking Service
const trackingService = {
  getTrackingData: async () => {
    try {
      const response = await fetch('/api/tracking/data');
      return response.json();
    } catch (error) {
      console.error('Error fetching tracking data:', error);
      throw error;
    }
  },
};

export default trackingService;
