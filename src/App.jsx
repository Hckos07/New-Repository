import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './assets/Components/Home';
import PrivacyPolicy from './assets/Components/privacypolicy';
import TermsAndConditions from './assets/Components/TandC';
import Tdl from './assets/Components/tdl';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
        <Route path="/terms-of-use" element={<Tdl />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;