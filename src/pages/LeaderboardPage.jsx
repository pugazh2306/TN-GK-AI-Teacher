import React from 'react';
import { motion } from 'framer-motion';
import LeaderboardCard from '../components/LeaderboardCard';
import { useUser } from '../context/UserContext';
import { Trophy } from 'lucide-react';

const mockLeaderboard = [
  { id: '1', name: 'Karthik S.', xp: 12500, accuracy: 98 },
  { id: '2', name: 'Priya R.', xp: 11200, accuracy: 95 },
  { id: '3', name: 'Arun Kumar', xp: 9800, accuracy: 92 },
  { id: '4', name: 'Meena V.', xp: 8500, accuracy: 89 },
  { id: '5', name: 'Suresh P.', xp: 7200, accuracy: 85 },
  { id: '6', name: 'Deepa K.', xp: 6400, accuracy: 82 },
  { id: '7', name: 'Vijay M.', xp: 5100, accuracy: 78 },
];

const LeaderboardPage = () => {
  const { profile, accuracy } = useUser();
  
  // Insert current user into leaderboard for simulation
  const fullLeaderboard = [...mockLeaderboard, { 
    id: 'current', 
    name: profile.name + " (You)", 
    xp: profile.xp, 
    accuracy: accuracy 
  }].sort((a, b) => b.xp - a.xp);

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="max-w-4xl mx-auto py-8"
    >
      <div className="text-center mb-10">
        <div className="inline-flex items-center justify-center p-4 bg-gradient-to-br from-tamil-saffron to-tamil-red rounded-full mb-4 shadow-lg shadow-tamil-saffron/20">
          <Trophy className="w-10 h-10 text-white" />
        </div>
        <h1 className="text-4xl font-bold text-white mb-2">Global Leaderboard</h1>
        <p className="text-gray-400">Compete with other learners and climb the ranks to become a Collector!</p>
      </div>

      <div className="glass-card rounded-2xl p-6 md:p-8">
        <div className="flex justify-between items-center mb-6 text-sm font-semibold text-gray-400 uppercase tracking-wider px-4">
          <div className="w-1/2">Rank & User</div>
          <div className="w-1/2 text-right">Score (XP)</div>
        </div>
        
        <div className="space-y-2">
          {fullLeaderboard.map((user, index) => (
            <LeaderboardCard 
              key={user.id}
              rank={index + 1}
              name={user.name}
              xp={user.xp}
              accuracy={user.accuracy}
              isCurrentUser={user.id === 'current'}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default LeaderboardPage;
