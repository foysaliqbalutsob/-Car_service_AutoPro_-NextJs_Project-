import axios from "axios";

// Create an Axios instance with default configuration
const api = axios.create({
//   baseURL: "https://jsonplaceholder.typicode.com", // Example base URL for testing
  baseURL: "http://localhost:3000/api",
  timeout: 10000, // Timeout in milliseconds
  headers: {
    "Content-Type": "application/json",
  },
});

// Optional: Add request/response interceptors if needed
// api.interceptors.request.use(...);
// api.interceptors.response.use(...);

export default api;
