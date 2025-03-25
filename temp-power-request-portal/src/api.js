import axios from "axios";

// Power Automate Flow URL (replace with actual trigger URL)
const POWER_AUTOMATE_URL = "https://hooks.zapier.com/hooks/catch/22193095/2e80oum/"; // Replace with real URL

const SHAREPOINT_UPLOAD_URL = "https://southwire.sharepoint.com/:x:/s/YoungsvilleOperations268/EXQQAQ8byeRHno1vBjB1z6UB4AEgzWtLjR80tMY8cHBJRQ?e=jKe63R"; // Replace with real SharePoint upload API

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

// Function to upload a file to SharePoint
export const uploadFileToSharePoint = async (file) => {
    try {
        const formData = new FormData();
        formData.append("file", file);

        const response = await axios.post(SHAREPOINT_UPLOAD_URL, formData, {
            headers: {
                "Content-Type": "multipart/form-data",
                "Accept": "application/json;odata=verbose",
            },
        });

        return response.data; // This should return the uploaded file's URL
    } catch (error) {
        console.error("Error uploading file to SharePoint:", error);
        throw error;
    }
};

// Function to fetch request details by ID
export const fetchRequestById = async (id) => {
    try {
        const response = await axios.post(POWER_AUTOMATE_URL, { id }, {
            headers: { "Content-Type": "application/json" }
        });
        return response.data;
    } catch (error) {
        console.error("Error fetching request details:", error);
        throw error;
    }
};

// Function to fetch all requests
export const fetchRequests = async () => {
    try {
        const response = await axios.get(`${POWER_AUTOMATE_URL}/requests`);
        return response.data;
    } catch (error) {
        console.error("Error fetching requests:", error);
        throw error;
    }
};
