import React, { useEffect, useState } from 'react';
import axios from 'axios';

const RequestList = () => {
  const [requests, setRequests] = useState([]);

  useEffect(() => {
    const fetchRequests = async () => {
      try {
        const response = await axios.get('YOUR_API_ENDPOINT');
        setRequests(response.data);
      } catch (error) {
        console.error('Error fetching requests:', error);
      }
    };

    fetchRequests();
  }, []);

  return (
    <div>
      <h2>Request List</h2>
      <ul>
        {requests.map((request) => (
          <li key={request.id}>
            {request.name} - {request.requestType} - {request.status}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RequestList;