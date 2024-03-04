// navbar.tsx
import React from 'react';

interface NavbarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  openWidgetModal: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ activeTab, setActiveTab, openWidgetModal }) => {
  return (
    <nav className="navbar" style={{ position: 'fixed', top: 0, right: 0, left: '80px', height: '50px', backgroundColor: '#f4f4f4', color: '#333', display: 'flex', justifyContent: 'flex-start', alignItems: 'center', paddingRight: '20px', width:'100%', zIndex: '1000' }}>
      <ul className="navbar-nav" style={{ display: 'flex', listStyleType: 'none', margin: 0, padding: 0 }}>
        {/* Nav items */}
        <li className={`nav-item ${activeTab === 'Home' ? 'active' : ''}`} style={{ marginRight: '10px', marginLeft: '10px' }}>
          <button className="nav-link" onClick={() => setActiveTab('Home')} style={{ background: 'none', border: '1px solid #333', borderRadius: '5px', padding: '5px 10px', color: 'inherit', cursor: 'pointer' }}>
            <i className="fas fa-home"></i>
          </button>
        </li>
        <li className={`nav-item ${activeTab === 'Overview' ? 'active' : ''}`} style={{ marginRight: '10px' }}>
          <button className="nav-link" onClick={() => setActiveTab('Overview')} style={{ background: 'none', border: '1px solid #333', borderRadius: '5px', padding: '5px 10px', color: 'inherit', cursor: 'pointer' }}>
            Overview
          </button>
        </li>
        <li className={`nav-item ${activeTab === 'Customers' ? 'active' : ''}`} style={{ marginRight: '10px' }}>
          <button className="nav-link" onClick={() => setActiveTab('Customers')} style={{ background: 'none', border: '1px solid #333', borderRadius: '5px', padding: '5px 10px', color: 'inherit', cursor: 'pointer' }}>
            Customers
          </button>
        </li>
        <li className={`nav-item ${activeTab === 'Products' ? 'active' : ''}`} style={{ marginRight: '10px' }}>
          <button className="nav-link" onClick={() => setActiveTab('Products')} style={{ background: 'none', border: '1px solid #333', borderRadius: '5px', padding: '5px 10px', color: 'inherit', cursor: 'pointer' }}>
            Products
          </button>
        </li>
        <li className={`nav-item ${activeTab === 'Settings' ? 'active' : ''}`} style={{ marginRight: '10px' }}>
          <button className="nav-link" onClick={() => setActiveTab('Settings')} style={{ background: 'none', border: '1px solid #333', borderRadius: '5px', padding: '5px 10px', color: 'inherit', cursor: 'pointer' }}>
            Settings
          </button>
        </li>
        <li style={{ marginRight: '30%' }}>
          <button className="nav-link" onClick={() => console.log('Add clicked')} style={{ background: 'none', border: '1px solid #333', borderRadius: '5px', padding: '5px 10px', color: 'inherit', cursor: 'pointer' }}>
            <i className="fas fa-plus"></i>
          </button>
        </li>
        {/* Add Widget button */}
        <li className={`nav-item `} style={{ marginLeft: '100%', marginRight: '10px' }}>
          <button className="nav-link" onClick={() => openWidgetModal()} style={{ background: 'none', border: '1px solid #333', borderRadius: '5px', padding: '5px 10px', color: 'inherit', cursor: 'pointer'}}>
            Add_Widget
          </button>
        </li>
        {/* Settings button */}
        <li className={`nav-item`} style={{ marginRight: '10px' }}>
          <button className="nav-link" onClick={() => console.log('Settings clicked')} style={{ background: 'none', border: '1px solid #333', borderRadius: '5px', padding: '5px 10px', color: 'inherit', cursor: 'pointer' }}>
            <i className="fas fa-cog"></i>
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
