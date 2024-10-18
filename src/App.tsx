import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Events from './pages/Events';
import Directory from './pages/Directory';
import JobBoard from './pages/JobBoard';
import Profile from './pages/Profile';
import SignIn from './pages/SignIn';
import Login from './pages/Login';
import Alumni from './pages/Alumni';
import Newsletter from './pages/Newsletter';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100 flex flex-col">
        <Header />
        <main className="flex-grow container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/events" element={<Events />} />
            <Route path="/directory" element={<Directory />} />
            <Route path="/job-board" element={<JobBoard />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/login" element={<Login />} />
            <Route path="/alumni" element={<Alumni />} />
            <Route path="/newsletter" element={<Newsletter />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;