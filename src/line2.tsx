// line.tsx
import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';

const LineGraph: React.FC = () => {
  const [lineData, setLineData] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/line-data.json');
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        setLineData(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <div style={{ width: '300px', height: '300px', backgroundColor:'black', borderRadius:'10px', margin:'40px'}}>
        {lineData && (
          <Line
            data={lineData}
            options={{
              responsive: true,
              maintainAspectRatio: false,
              elements: {
                point: {
                  radius: 0,
                  hoverRadius: 0,
                },
              },
            }}
          />
        )}
      </div>
    </div>
  );
};

export default LineGraph;
