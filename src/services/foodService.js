import axios from 'axios';

const API_URL = 'https://67f4df19913986b16fa2227d.mockapi.io/api/v1/food';

export const foodService = {
  getAllFoods: async () => {
    try {
      const response = await axios.get(API_URL);
      return response.data;
    } catch (error) {
      console.error('Error fetching foods:', error);
      return [];
    }
  },

  getFoodById: async (id) => {
    try {
      const response = await axios.get(`${API_URL}/${id}`);
      return response.data;
    } catch (error) {
      console.error('Error fetching food:', error);
      return null;
    }
  }
}; 