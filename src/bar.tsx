// bar.tsx
import React, { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';

interface BarGraphProps {
  backgroundColor?: string; // Optional background color prop
  selectedColor?: string; // Optional selected color prop
}

const BarGraph: React.FC<BarGraphProps> = ({ backgroundColor = 'white', selectedColor }) => {
  const [barGraphData, setBarGraphData] = useState<any>(null);

  useEffect(() => {
    fetch('bar-data.json')
      .then((response) => response.json())
      .then((data) => setBarGraphData(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  return (
    <div style={{ padding: '20px', overflow: 'auto', backgroundColor: selectedColor || backgroundColor, borderRadius: '10px', margin: '10px' }}>
      {barGraphData && (
        <Bar
          data={barGraphData}
          options={{
            scales: {
              x: {
                type: 'category',
                ticks: {
                  autoSkip: false,
                },
              },
              y: {
                beginAtZero: true,
              },
            },
            plugins: {
              legend: {
                display: false,
              },
            },
          }}
        />
      )}
    </div>
  );
};

export default BarGraph;
