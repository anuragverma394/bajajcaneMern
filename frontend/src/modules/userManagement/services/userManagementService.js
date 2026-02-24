// User Management Service
const userManagementService = {
  getUsers: async () => {
    try {
      const response = await fetch('/api/users');
      return response.json();
    } catch (error) {
      console.error('Error fetching users:', error);
      throw error;
    }
  },
  
  getRoles: async () => {
    try {
      const response = await fetch('/api/roles');
      return response.json();
    } catch (error) {
      console.error('Error fetching roles:', error);
      throw error;
    }
  },
};

export default userManagementService;
