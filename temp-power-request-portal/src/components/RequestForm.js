import React, { useState } from 'react';
import axios from 'axios';

const RequestForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    requestType: '',
    quantity: '',
    modelNumber: '',
    salesOrder: '',
    description: '',
    attachment: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, attachment: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formDataToSend = new FormData();
    Object.keys(formData).forEach((key) => {
      formDataToSend.append(key, formData[key]);
    });

    try {
      await axios.post('YOUR_API_ENDPOINT', formDataToSend);
      alert('Request submitted successfully!');
    } catch (error) {
      console.error('Error submitting request:', error);
      alert('Failed to submit request.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Name" required />
      <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" required />
      <select name="requestType" value={formData.requestType} onChange={handleChange} required>
        <option value="">Select Request Type</option>
        <option value="Tool Request">Tool Request</option>
        <option value="Hardware Request">Hardware Request</option>
        <option value="Part Request">Part Request</option>
        <option value="Request Mechanical Engineering Drawing">Request Mechanical Engineering Drawing</option>
        <option value="Request Electrical Mechanical Schematics">Request Electrical Mechanical Schematics</option>
        <option value="Request Engineering Review">Request Engineering Review</option>
        <option value="Non-Conforming Material">Non-Conforming Material</option>
        <option value="Request Bill-of-Material (BOM)">Request Bill-of-Material (BOM)</option>
        <option value="Request Packaging Materials (Crates, Pallets, etc.)">Request Packaging Materials (Crates, Pallets, etc.)</option>
      </select>
      <input type="number" name="quantity" value={formData.quantity} onChange={handleChange} placeholder="Quantity" />
      <input type="text" name="modelNumber" value={formData.modelNumber} onChange={handleChange} placeholder="Model Number" />
      <input type="text" name="salesOrder" value={formData.salesOrder} onChange={handleChange} placeholder="Sales Order" />
      <textarea name="description" value={formData.description} onChange={handleChange} placeholder="Description" required></textarea>
      <input type="file" name="attachment" onChange={handleFileChange} />
      <button type="submit">Submit Request</button>
    </form>
  );
};

export default RequestForm;