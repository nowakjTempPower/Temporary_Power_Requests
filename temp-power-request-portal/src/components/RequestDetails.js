import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchRequestById } from "../api";

const RequestDetails = () => {
    const { id } = useParams();
    const [request, setRequest] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchRequest = async () => {
            try {
                const data = await fetchRequestById(id);
                setRequest(data);
            } catch (error) {
                setError("Failed to fetch request details.");
            } finally {
                setLoading(false);
            }
        };

        fetchRequest();
    }, [id]);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <div>
            <h2>Request Details</h2>
            <p><strong>Name:</strong> {request.name}</p>
            <p><strong>Email:</strong> {request.email}</p>
            <p><strong>Request Type:</strong> {request.requestType}</p>
            <p><strong>Description:</strong> {request.description}</p>
            <p><strong>Status:</strong> {request.status}</p>
            <p><strong>Submitted Time:</strong> {request.submittedTime}</p>
            <p><strong>Updated Time:</strong> {request.updatedTime}</p>
            {request.attachmentLink && (
                <p>
                    <a href={request.attachmentLink} target="_blank" rel="noopener noreferrer">
                        View Attachment
                    </a>
                </p>
            )}
        </div>
    );
};

export default RequestDetails;
