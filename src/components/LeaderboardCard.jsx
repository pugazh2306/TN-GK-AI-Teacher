import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Medal, Award } from 'lucide-react';

const getRankIcon = (rank) => {
  switch(rank) {
    case 1: return <Trophy className="w-6 h-6 text-yellow-400" />;
    case 2: return <Medal className="w-6 h-6 text-gray-300" />;
    case 3: return <Medal className="w-6 h-6 text-yellow-600" />;
    default: return <span className="font-bold text-gray-500 w-6 text-center">{rank}</span>;
  }
};

const LeaderboardCard = ({ rank, name, xp, accuracy, isCurrentUser }) => {
  return (
    <motion.div 
      whileHover={{ scale: 1.01 }}
      className={`glass-card p-4 rounded-xl flex items-center justify-between mb-3 ${isCurrentUser ? 'border-tamil-saffron bg-tamil-saffron/10' : ''}`}
    >
      <div className="flex items-center space-x-4">
        <div className="w-8 flex justify-center">
          {getRankIcon(rank)}
        </div>
        <div>
          <h4 className={`font-bold ${isCurrentUser ? 'text-tamil-saffron' : 'text-white'}`}>{name}</h4>
          <p className="text-xs text-gray-400">Accuracy: {accuracy}%</p>
        </div>
      </div>
      
      <div className="text-right">
        <span className="text-lg font-bold text-tamil-gold">{xp}</span>
        <span className="text-xs text-gray-400 ml-1">XP</span>
      </div>
    </motion.div>
  );
};

export default LeaderboardCard;
