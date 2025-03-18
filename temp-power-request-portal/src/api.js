import axios from "axios";

// Power Automate Flow URL (replace with actual trigger URL)
const POWER_AUTOMATE_URL = "https://prod-10.westus.logic.azure.com:443/workflows/e5926c34738e46bf9408dca6c47f8ddb/triggers/manual/paths/invoke?api-version=2016-06-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=xIHwo4upYs7iK6IF0YwpuiRxSSutG_qiiIUO9YV3qo4"; // Replace with real URL

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

