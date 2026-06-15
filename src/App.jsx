import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import QuizGeneratorPage from './pages/QuizGeneratorPage';
import DistrictExplorerPage from './pages/DistrictExplorerPage';
import DistrictDetailPage from './pages/DistrictDetailPage';
import DailyChallengePage from './pages/DailyChallengePage';
import LeaderboardPage from './pages/LeaderboardPage';
import ProfilePage from './pages/ProfilePage';
import { UserProvider } from './context/UserContext';

function App() {
  return (
    <UserProvider>
      <Router>
        <div className="min-h-screen pt-20">
          <Navbar />
          <main className="max-w-7xl mx-auto p-4 sm:p-6 lg:p-8">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/quiz" element={<QuizGeneratorPage />} />
              <Route path="/districts" element={<DistrictExplorerPage />} />
              <Route path="/districts/:id" element={<DistrictDetailPage />} />
              <Route path="/daily" element={<DailyChallengePage />} />
              <Route path="/leaderboard" element={<LeaderboardPage />} />
              <Route path="/profile" element={<ProfilePage />} />
            </Routes>
          </main>
        </div>
      </Router>
    </UserProvider>
  );
}

export default App;
