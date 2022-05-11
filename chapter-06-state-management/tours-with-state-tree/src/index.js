import React, { createContext } from 'react';
import tours from './data/tours.json';
import ReactDOM from 'react-dom/client';

import App from './App';

export const TourContext = createContext(undefined);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <TourContext.Provider value={tours}>
    <App />
  </TourContext.Provider>
);
