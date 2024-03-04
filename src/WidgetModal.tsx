import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearchPlus, faSearchMinus } from '@fortawesome/free-solid-svg-icons';
import './widgetModal.css';
import Pie from './pie';
import Line from './line';
import Bar from './bar';
import Description from './description';
import Table from './table';

interface WidgetModalProps {
  closeWidgetModal: () => void;
  handleSaveWidget: (widgetType: string, selectedColor: string) => void;
}

const WidgetModal: React.FC<WidgetModalProps> = ({ closeWidgetModal, handleSaveWidget }) => {
  const [widgetType, setWidgetType] = useState('');
  const [selectedColor, setSelectedColor] = useState('white');
  const [zoomLevel, setZoomLevel] = useState(100);

  const handleZoomIn = () => {
    setZoomLevel(Math.min(200, zoomLevel + 10));
  };

  const handleZoomOut = () => {
    setZoomLevel(Math.max(10, zoomLevel - 10));
  };

  const handleSave = () => {
    if (widgetType) {
      handleSaveWidget(widgetType, selectedColor);
    }
    closeWidgetModal();
  };

  const renderGraphPreview = () => {
    switch (widgetType) {
      case 'pie':
        return <Pie backgroundColor={selectedColor} selectedColor={selectedColor} />;
      case 'line':
        return <Line backgroundColor={selectedColor} selectedColor={selectedColor} />;
      case 'bar':
        return <Bar backgroundColor={selectedColor} selectedColor={selectedColor} />;
      case 'description':
        return <Description />;
      case 'table':
        return <Table />;
      default:
        return null;
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal">
        <table className="widget-table">
          <tbody>
            <tr>
              <td>
                <div className="title-bar">
                  <h2 style={{ color: '#5E5ADB' }}>Create Widget</h2>
                </div>
                <div className="preview-wrapper">
                  
                  <div className="preview-container" style={{ transform: `scale(${zoomLevel / 100})` }}>
                  <div className="zoom-controls">
                    <FontAwesomeIcon icon={faSearchPlus} onClick={handleZoomIn} />
                    <FontAwesomeIcon icon={faSearchMinus} onClick={handleZoomOut} />
                  </div>
                    {renderGraphPreview()}
                  </div>
                </div>
                {widgetType && (
                  <div className="color-options">
                    <label>Color:</label>
                    <div className="color-selector">
                      <div className="color-circle" style={{ backgroundColor: '#5E5ADB' }} onClick={() => setSelectedColor('#5E5ADB')}></div>
                      <div className="color-circle" style={{ backgroundColor: 'white' }} onClick={() => setSelectedColor('white')}></div>
                      <div className="color-circle" style={{ backgroundColor: 'black' }} onClick={() => setSelectedColor('black')}></div>
                    </div>
                  </div>
                )}
              </td>

              <td style={{width:'400px'}}>
                <div className="title-bar">
                  <h2>Components</h2>
                </div>
                <div className="boxes-container">
                  <div className="box" >
                    <input type="text" placeholder="Enter summary" className={`icon-container ${widgetType === "table" ? "selected" : ""}` } onClick={() => setWidgetType("table")} />
                  </div>
                  <div className="box" contentEditable>
                    <h3>Graph</h3>
                    <div className={`icon-container ${widgetType === "pie" ? "selected" : ""}`} onClick={() => setWidgetType("pie")}>
                      <i className="fa fa-pie-chart"></i>
                    </div>
                    <div className={`icon-container ${widgetType === "line" ? "selected" : ""}`} onClick={() => setWidgetType("line")}>
                      <i className="fa fa-line-chart"></i>
                    </div>
                    <div className={`icon-container ${widgetType === "bar" ? "selected" : ""}`} onClick={() => setWidgetType("bar")}>
                      <i className="fa fa-bar-chart"></i>
                    </div>
                  </div>
                  <div className="box">
                    <input type="text" placeholder="Enter summary" className={`icon-container ${widgetType === "description" ? "selected" : ""}`} onClick={() => setWidgetType("description")} />
                  </div>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
        <div className="button-group">
          <button onClick={closeWidgetModal}>Cancel</button>
          <button onClick={handleSave}>Save</button>
        </div>
      </div>
    </div>
  );
};

export default WidgetModal;
