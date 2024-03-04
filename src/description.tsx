import React, { useState, useEffect } from 'react';

const Description: React.FC = () => {
  const [data, setData] = useState<{ title: string; description: string } | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Simulating a fetch request
        const response = await fetch('/description-data.json');
        const json = await response.json();
        setData(json[0]); // Assuming you want to display the first item from the fetched data
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();

    // Cleanup function for useEffect
    return () => {
      // Cleanup logic if needed
    };
  }, []);

  if (!data) {
    return <div>Loading...</div>; // Handle loading state
  }

  const styles = {
    descriptionBox: {
      height: '150px',
      width: '300px',
      border: '1px solid #ccc',
      padding: '20px',
      marginTop:'40px',
      marginBottom: '20px',
      backgroundColor: '#fff',
      borderRadius: '10px', // Adding border radius
      overflow: 'auto', // Adding scrollbar
    },
    title: {
      fontSize: '1.5rem',
      marginBottom: '10px',
    },
    description: {
      fontSize: '1rem',
      lineHeight: '1.5',
    },
  };

  return (
    <div style={styles.descriptionBox}>
      <p style={styles.description}>{data.description}</p>
    </div>
  );
};

export default Description;
