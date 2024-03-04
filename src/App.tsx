// App.tsx
import React, { useState } from 'react';
import './App.css';
import Pie from './pie'; // Assuming 'Pie' component is exported from 'Pie.tsx'
import Bar from './bar';
import Bar2 from './bar2';
import Line from './line';
import Line2 from './line2';
import Line3 from './line3';
import Description from './description';
import Table from './table';
import Table2 from './table2';
import Table3 from './table3';
import Navbar from './navbar';
import Sidebar from './sidebar';
import WidgetModal from './WidgetModal';

function App() {
  
  const [activeTab, setActiveTab] = useState<string>('Dashboard');
  const [showWidgetModal, setShowWidgetModal] = useState<boolean>(false);
  const [widgets, setWidgets] = useState<JSX.Element[]>([
    <Table />,
    <Table2 />,
    <Bar2 key="bar1"/>,
    <Description />,
    <Table3/>,
    <Line key="line" />,
    <Bar key="bar" />,
    <Line3 key="line3" />,
    <Table2 />,
    <Table />,
    <Line2 key="line2" />,
    <Pie key="pie" />
  ]); // Initial widgets (pie, bar, line, description, table)

  const openWidgetModal = () => {
    setShowWidgetModal(true);
  };

  const closeWidgetModal = () => {
    setShowWidgetModal(false);
  };

  const handleSaveWidget = (widgetType: string, selectedColor: string) => {
    let newWidget: JSX.Element | null = null;
    let color: string;
    if (selectedColor !== 'default') {
      color = selectedColor;
    } else {
      color = 'default';
    }
    switch (widgetType) {
      case 'pie':
        newWidget = <Pie key={`pie-${widgets.length}`} backgroundColor={color}/>;
        break;
      case 'line':
        newWidget = <Line key={`line-${widgets.length}`} backgroundColor={color}/>;
        break;
      case 'bar':
        newWidget = <Bar key={`bar-${widgets.length}`} backgroundColor={color}/>;
        break;
      case 'description':
        newWidget = <Description key={`description-${widgets.length}`} />;
        break;
      case 'table':
        newWidget = <Table key={`table-${widgets.length}`} />;
        break;
      default:
        break;
    }
    if (newWidget) {
      setWidgets([...widgets, newWidget]); 
    }
    closeWidgetModal();
  };

  return (
    <div className="App">
      <Navbar activeTab={activeTab} setActiveTab={setActiveTab} openWidgetModal={openWidgetModal} />
      {showWidgetModal && <WidgetModal closeWidgetModal={closeWidgetModal} handleSaveWidget={handleSaveWidget} />}
      <div className="sidebar-container">
        <Sidebar setActiveTab={setActiveTab} />
      </div>
      <div className="content-container">
        <div className="widgets-container">
          {widgets.map((widget, index) => (
            <div className="widget" key={index}>{widget}</div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
