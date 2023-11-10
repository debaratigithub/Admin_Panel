// api.ts
import axios from 'axios';

const API_BASE_URL = 'https://jsonplaceholder.typicode.com/users'; // Your API base URL

export const fetchSomeData = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};


