import axios from "axios";

const POWER_AUTOMATE_URL = "https://prod-XX.westus.logic.azure.com/workflows/your-flow-id/triggers/manual/paths/invoke"; // Replace with your actual Power Automate URL

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
export const fetchRequestById = async (id) => {
  // Your fetch logic here
};