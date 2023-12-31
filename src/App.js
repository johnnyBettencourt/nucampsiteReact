import React from 'react';
import { Route, Routes } from 'react-router-dom';
import ContactPage from './pages/ContactPage';
import HomePage from './pages/HomePage';
import CampsiteDetailPage from './pages/CampsiteDetailPage';
import './App.css';
import CampsitesDirectoryPage from './pages/CampsitesDirectoryPage';
import Header from './components/Header';
import Footer from './components/Footer';
import AboutPage from './pages/AboutPage';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path ='directory' element={<CampsitesDirectoryPage />} />
        <Route
          path='directory/:campsiteId'
          element={<CampsiteDetailPage />}
        />
        <Route path ='About' element={<AboutPage />} />
        <Route path ='contact' element={<ContactPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
