import axios from 'axios';

const api = axios.create({
  baseURL: 'YOUR_API_ENDPOINT',
});

export const submitRequest = (formData) => api.post('/requests', formData);
export const fetchRequests = () => api.get('/requests');
export const fetchRequestById = (id) => api.get(`/requests/${id}`);

export default api;