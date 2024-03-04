// line.tsx
import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';

interface LineGraphProps {
  backgroundColor?: string; // Optional background color prop
  selectedColor?: string; // Optional selected color prop
}

const LineGraph: React.FC<LineGraphProps> = ({ backgroundColor = 'white', selectedColor }) => {
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
      <div style={{ width: '300px', height: '300px', backgroundColor: selectedColor || backgroundColor, borderRadius: '10px', margin: '10px' }}>
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
