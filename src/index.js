import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import AcademicStress from './pages/AcademicStress';
import EmotionalWellbeing from './pages/EmotionalWellbeing';
import ComingSoon from './pages/ComingSoon';
import './index.css';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/academic-stress" element={<AcademicStress />} />
          <Route path="/emotional-wellbeing" element={<EmotionalWellbeing />} />
          <Route
            path="/social-challenges"
            element={<ComingSoon title="Social Challenges" />}
          />
          <Route
            path="/life-balance"
            element={<ComingSoon title="Life Balance" />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
