import React, { useEffect, useState } from 'react';

interface Person {
  id: number;
  name: string;
  age: string | number;
  email: string | number;
}

const Table: React.FC = () => {
  const [data, setData] = useState<Person[]>([]);

  
  useEffect(() => {
    fetch('table-data.json') // Change this path according to your project structure
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  // Calculate total percentages
  const totalAgePercentage = data.reduce((acc, person) => acc + parseFloat(person.age.toString().replace('%', '')), 0);
  const totalEmailPercentage = data.reduce((acc, person) => acc + parseFloat(person.email.toString().replace('%', '')), 0);

  return (
    <div style={{margin:'10px'}}>
      <table style={{height:'200px', width: '100%', borderCollapse: 'collapse', borderSpacing: 0, backgroundColor: '#5E5ADB', borderRadius: '10px', margin: '40px', padding:'40px' }}>
        <thead>
          <tr>
            <th style={tableHeaderStyle}>PRODUCT</th>
            <th style={tableHeaderStyle}>Q1-23</th>
            <th style={tableHeaderStyle}>Q2-23</th>
          </tr>
        </thead>
        <tbody>
          {data.map(person => (
            <tr key={person.id}>
              <td style={tableCellStyle}>{person.name}</td>
              <td style={tableCellStyle}>{person.age}</td>
              <td style={tableCellStyle}>{person.email}</td>
            </tr>
          ))}
          <tr>
            <td colSpan={1} style={{color:'white'}}>Total</td>
            <td style={tableCellStyle}>{totalAgePercentage.toFixed(2)}%</td>
            <td style={tableCellStyle}>{totalEmailPercentage.toFixed(2)}%</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

const tableHeaderStyle: React.CSSProperties = {
  border: '1px solid #dddddd',
  textAlign: 'left',
  color: 'white'
};

const tableCellStyle: React.CSSProperties = {
  border: '1px solid #dddddd',
  borderWidth: '0.5px', // Adjust border width to make it very thin
  textAlign: 'left',
  color : 'white'
};

export default Table;
