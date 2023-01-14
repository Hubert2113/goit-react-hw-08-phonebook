import axios from 'axios';

const backendInstance = axios.create({
  baseURL: 'https://connections-api.herokuapp.com/',
});

export default backendInstance;