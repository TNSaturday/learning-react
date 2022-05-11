import React from 'react';
import ReactDOM from 'react-dom/client';
import TourProvider from "./providers/TourProvider";

import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <TourProvider>
    <App />
  </TourProvider>
);
