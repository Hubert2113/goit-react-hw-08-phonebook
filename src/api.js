import axios from 'axios';

const mockApiInstance = axios.create({
  baseURL: 'https://63bc6efcfa38d30d85c7e5cf.mockapi.io/',
});

export default mockApiInstance;