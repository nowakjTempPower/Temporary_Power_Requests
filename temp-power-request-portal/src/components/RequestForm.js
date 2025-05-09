import React, { useState } from "react";
import { submitRequest, uploadFileToSharePoint } from "../api"; // ✅ Import both functions



const RequestForm = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        requestType: "",
        quantity: "",
        modelNumber: "",
        salesOrder: "",
        description: "",
        attachment: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleFileChange = async (e) => {
        const file = e.target.files[0];
        const formDataUpload = new FormData();
        formDataUpload.append("file", file);

        try {
            // Upload file to SharePoint or another storage location (implement separately)
            const uploadedFileURL = await uploadFileToSharePoint(formDataUpload);
            setFormData({ ...formData, attachment: uploadedFileURL });
        } catch (error) {
            console.error("File upload failed:", error);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await submitRequest(formData);
            alert("Request submitted successfully!");
        } catch (error) {
            alert("Failed to submit request.");
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
