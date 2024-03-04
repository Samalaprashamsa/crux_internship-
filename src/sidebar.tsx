// Sidebar.tsx
import React from 'react';
import logo from './crux-logo.jpeg'; // Import your logo image
import '@fortawesome/fontawesome-free/css/all.css';
import resistorIcon from './resistor_icon.png';
import msgIcon from './double-message-icon.png';


interface SidebarProps {
  setActiveTab: (tab: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ setActiveTab }) => {
  return (
    <div className="sidebar" style={{ position: 'fixed', top: 0, left: 0, height: '100vh', width: '40px', backgroundColor: '#f4f4f4', padding: '20px', margin: 0 }}>
      <div style={{ marginBottom: '20px' }}>
        <img src={logo} alt="Logo" style={{ width: '100%' }} />
      </div>
      <ul style={{ listStyleType: 'none', margin: 0, padding: 0 }}>
        <li style={{ marginBottom: '10px' }}>
          <button onClick={() => console.log('Resistor clicked')} style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
            <img src={resistorIcon} alt="Resistor" style={{ width: '30px', height: '30px' }} />
          </button>
        </li>
        <li style={{ marginBottom: '10px' }}>
          <button onClick={() => console.log('Comment clicked')} style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
            <img src={msgIcon} alt="Comment" style={{ width: '30px', height: '30px' }} />
          </button>
        </li>
        <li style={{ marginBottom: '10px' }}>
          <button onClick={() => console.log('Layer Group clicked')} style={{ background: 'none', border: 'none', color: '#333', cursor: 'pointer' }}>
            <i className="fa-solid fa-layer-group" style={{ fontSize: '25px' }}></i>
          </button>
        </li>
        <li>
          <button onClick={() => console.log('Chart clicked')} style={{ background: 'none', border: 'none', color: '#333', cursor: 'pointer' }}>
            <i className="fa-solid fa-chart-simple" style={{ fontSize: '25px' }}></i>
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
