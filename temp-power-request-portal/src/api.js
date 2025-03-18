import axios from "axios";

const POWER_AUTOMATE_URL = "https://prod-XX.westus.logic.azure.com/workflows/your-flow-id/triggers/manual/paths/invoke"; // Replace with your actual Power Automate URL
const SHAREPOINT_API_URL = "https://your-sharepoint-url.com/api/requests"; // Replace with your actual SharePoint API URL

// Submit a request to Power Automate
export const submitRequest = async (formData) => {
    try {
        const response = await axios.post(POWER_AUTOMATE_URL, formData, {
            headers: { "Content-Type": "application/json" }
        });
        return response.data;
    } catch (error) {
        console.error("Error submitting request:", error);
        throw error;
    }
};

// Fetch a request by ID from SharePoint or your data source
export const fetchRequestById = async (id) => {
    try {
        const response = await axios.get(`${SHAREPOINT_API_URL}/${id}`);
        return response.data;
    } catch (error) {
        console.error("Error fetching request by ID:", error);
        throw error;
    }
};
