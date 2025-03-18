import React, { useEffect, useState } from "react";
import { fetchRequests } from "../api";
import { Link } from "react-router-dom";

const RequestList = () => {
    const [requests, setRequests] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getRequests = async () => {
            try {
                const data = await fetchRequests();
                setRequests(data);
                setLoading(false);
            } catch (err) {
                setError("Failed to fetch requests.");
                setLoading(false);
            }
        };

        getRequests();
    }, []);

    if (loading) return <p>Loading requests...</p>;
    if (error) return <p>{error}</p>;

    return (
        <div>
            <h2>Request List</h2>
            <ul>
                {requests.map((request) => (
                    <li key={request.id}>
                        <Link to={`/request/${request.id}`}>{request.name} - {request.status}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default RequestList;
