// bar.tsx
import React, { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';

const BarGraph: React.FC = () => {
  const [barGraphData, setBarGraphData] = useState<any>(null);

  useEffect(() => {
    fetch('bar-data.json')
      .then((response) => response.json())
      .then((data) => setBarGraphData(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  return (
      <div style={{ width: '300px', height: '150px', padding: '20px', overflow: 'auto' , backgroundColor:'black', borderRadius:'10px', margin:'40px'}}>
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
