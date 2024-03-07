// http-plugin.js
import axios from 'axios';

const API_URL = process.env.VUE_APP_API_URL;

const http = axios.create({
  baseURL: API_URL,
});

export default http;