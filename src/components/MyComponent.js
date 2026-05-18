import React, { useState, useEffect } from 'react';

const MyComponent = () => {
    // Step 1: Define loading state
    const [loading, setLoading] = useState(true); // Initially set to true
    
    useEffect(() => {
        // Simulate data fetching
        const fetchData = async () => {
            // Simulate a network request
            await new Promise(resolve => setTimeout(resolve, 2000)); // 2 seconds delay
            setLoading(false); // Set loading to false once data is fetched
        };

        fetchData();
    }, []); // Empty dependency array means this runs once on component mount

    // Step 2: Conditional rendering
    if (loading) {
        return <div>Loading...</div>; // Show loading state
    }

    return (
        <div>
            <h1>Data Loaded!</h1>
            {/* Render your actual content here */}
        </div>
    );
};

export default MyComponent;