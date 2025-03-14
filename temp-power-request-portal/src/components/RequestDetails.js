import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const RequestDetails = () => {
  const { id } = useParams();
  const [request, setRequest] = useState(null);

  useEffect(() => {
    const fetchRequest = async () => {
      try {
        const response = await axios.get(`YOUR_API_ENDPOINT/${id}`);
        setRequest(response.data);
      } catch (error) {
        console.error('Error fetching request details:', error);
      }
    };

    fetchRequest();
  }, [id]);

  if (!request) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>Request Details</h2>
      <p>Name: {request.name}</p>
      <p>Email: {request.email}</p>
      <p>Request Type: {request.requestType}</p>
      <p>Description: {request.description}</p>
      <p>Status: {request.status}</p>
      <p>Submitted Time: {request.submittedTime}</p>
      <p>Updated Time: {request.updatedTime}</p>
      <a href={request.attachmentLink} target="_blank" rel="noopener noreferrer">View Attachment</a>
    </div>
  );
};

export default RequestDetails;