import React, { useEffect, useState } from 'react';
import { fetchRequests } from '../api';

const RequestList = () => {
  const [requests, setRequests] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetchRequests();
        setRequests(response.data);
      } catch (error) {
        console.error('Error fetching requests:', error);
      }
    };

    fetchData();
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