import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { EquipmentContextProvider } from './Context/equipmentContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <EquipmentContextProvider>
      <App />
    </EquipmentContextProvider>
  </React.StrictMode>
);

