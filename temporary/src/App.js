// src/App.js
import React, { useState } from "react";
import "./index.css";

const App = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    requestType: "",
    quantity: "",
    modelNumber: "",
    salesOrder: "",
    description: "",
    file: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, file: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch("PASTE_YOUR_FLOW_URL_HERE", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      alert("Request Submitted Successfully!");
      setFormData({
        name: "",
        email: "",
        requestType: "",
        quantity: "",
        modelNumber: "",
        salesOrder: "",
        description: "",
        file: null,
      });
    } else {
      alert("Error submitting request. Please try again.");
    }
  };

  return (
    <div className="container">
      <h1>Southwire Temporary Power Division Team Member Request Portal</h1>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input type="text" name="name" value={formData.name} onChange={handleChange} required />

        <label>Email:</label>
        <input type="email" name="email" value={formData.email} onChange={handleChange} required />

        <label>Request Type:</label>
        <select name="requestType" value={formData.requestType} onChange={handleChange} required>
          <option value="">Select Request Type</option>
          <option value="Tool Request">Tool Request</option>
          <option value="Hardware Request">Hardware Request</option>
          <option value="Part Request">Part Request</option>
          <option value="Request Engineering Drawing">Request Engineering Drawing</option>
        </select>

        <label>Quantity (If applicable):</label>
        <input type="number" name="quantity" value={formData.quantity} onChange={handleChange} />

        <label>Model # (If applicable):</label>
        <input type="text" name="modelNumber" value={formData.modelNumber} onChange={handleChange} />

        <label>Sales Order # (If applicable):</label>
        <input type="text" name="salesOrder" value={formData.salesOrder} onChange={handleChange} />

        <label>Description:</label>
        <textarea name="description" value={formData.description} onChange={handleChange} required />

        <label>Attach Picture (If applicable):</label>
        <input type="file" onChange={handleFileChange} />

        <button type="submit">Submit Request</button>
      </form>
    </div>
  );
};

export default App;
