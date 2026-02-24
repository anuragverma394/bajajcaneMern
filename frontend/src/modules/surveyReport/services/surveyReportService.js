// Survey Report Service
const surveyReportService = {
  getSurveyReports: async () => {
    try {
      const response = await fetch('/api/survey-reports');
      return response.json();
    } catch (error) {
      console.error('Error fetching survey reports:', error);
      throw error;
    }
  },
};

export default surveyReportService;
