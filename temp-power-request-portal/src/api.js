import axios from "axios";

// Power Automate Flow URL (replace with the actual trigger URL)
const POWER_AUTOMATE_URL = "https://us.flow.microsoft.com/manage/environments/',workflow().tags.environmentName,'/flows/',workflow().name,'/runs/',workflow().run.name)"; // Replace with your real URL

// Function to submit a new request
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

// Function to fetch a specific request by ID
export const fetchRequestById = async (id) => {
    try {
        const response = await axios.get(`${POWER_AUTOMATE_URL}/requests/${id}`);
        return response.data;
    } catch (error) {
        console.error("Error fetching request details:", error);
        throw error;
    }
};

// Function to fetch all requests from the Excel sheet
export const fetchRequests = async () => {
    try {
        // Replace this URL with the actual API or Power Automate endpoint
        const response = await axios.get(POWER_AUTOMATE_URL);
        return response.data;
    } catch (error) {
        console.error("Error fetching requests:", error);
        throw error;
    }
};
