import axios from "axios";

const api = axios.create({
  // এটি প্রথমে এনভায়রনমেন্ট ভেরিয়েবল চেক করবে, না থাকলে লোকালহোস্ট নিবে
  baseURL: process.env.NEXT_PUBLIC_API_URL 
    ? `${process.env.NEXT_PUBLIC_API_URL}/api` 
    : "http://localhost:3000/api",
  
  timeout: 15000, 
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;