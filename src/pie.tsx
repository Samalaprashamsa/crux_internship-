import React, { useState, useEffect, useRef } from 'react';
import { Pie } from 'react-chartjs-2';
import { ArcElement, ChartConfiguration } from 'chart.js';
import { CategoryScale } from 'chart.js';
import 'chartjs-adapter-date-fns';
import { Chart, registerables } from 'chart.js';
Chart.register(ArcElement);
Chart.register(...registerables);
Chart.register(CategoryScale);

interface DataItem {
  label: string;
  value: number;
}

interface PiechartProps {
  backgroundColor?: string; // Optional background color prop
  selectedColor?: string; // Optional selected color prop
}

// Define the Piechart component
const Piechart: React.FC<PiechartProps> = ({backgroundColor = 'white',  selectedColor}) => {
  // State to hold the data fetched from JSON
  const [data, setData] = useState<DataItem[]>([]);

  // Ref for the Chart instance
  const chartRef = useRef<any>(null);

  // Fetch data from JSON file when the component mounts
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/pie-data.json'); // Adjusted URL for public folder
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const jsonData: DataItem[] = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error('Error fetching data:', error);
        // Display error message to the user
        alert('Failed to fetch data. Please try again later.');
      }
    };

    fetchData();
  }, []); // Empty dependency array to run only once on component mount

  // Options for the pie chart
  const chartOptions = {
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: false,
      },
    },
    layout: {
      padding: {
        left: 20,
        right: 20,
        top: 20,
        bottom: 20,
      },
    },
    cutout: '80%', // Adjust the cutout to change the radius of the pie chart
    elements: {
      arc: {
        borderWidth: 0,
      },
    },
  };

  // Data for the pie chart
  const chartData = {
    labels: data.map(item => item.label),
    datasets: [
      {
        data: data.map(item => item.value),
        backgroundColor: [
          'rgba(255, 99, 132, 0.6)',
          'rgba(54, 162, 235, 0.6)',
          'rgba(255, 206, 86, 0.6)',
          'rgba(75, 192, 192, 0.6)',
          'rgba(153, 102, 255, 0.6)',
          'rgba(255, 159, 64, 0.6)',
        ],
      },
    ],
  };

  // Render the component
  return (
    <div style={{ width: '250px', height: '250px', position: 'relative', backgroundColor: selectedColor || backgroundColor, borderRadius: '10px', margin: '10px' }}>
      {/* Render the Pie chart with chartData, chartOptions, and ref */}
      <Pie ref={chartRef} data={chartData} options={chartOptions as any} />
      <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', textAlign: 'center' }}>
        {/* Render labels in the center */}
        {data.map((item, index) => (
          <div key={index} style={{ color: chartData.datasets[0].backgroundColor[index] }}>
            {item.label}: {item.value}
          </div>
        ))}
      </div>
    </div>
  );
};

// Export the Piechart component
export default Piechart;
