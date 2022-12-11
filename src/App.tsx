import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Session } from './pages';

const App = () => {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Routes>
          {/* session route */}
          <Route path="/" element={<Session />} />
        </Routes>
      </BrowserRouter>
    </React.Fragment>
  );
};

export default App;
