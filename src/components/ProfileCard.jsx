import React from 'react';
import { motion } from 'framer-motion';
import { User, Flame, Award, Target } from 'lucide-react';

const ProfileCard = ({ profile, level, accuracy }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className="glass-card p-8 rounded-2xl border-t-4 border-tamil-saffron relative overflow-hidden"
    >
      <div className="absolute top-0 right-0 p-6 opacity-10">
        <User className="w-48 h-48" />
      </div>
      
      <div className="flex flex-col md:flex-row items-center md:items-start gap-8 relative z-10">
        <div className="w-32 h-32 bg-gradient-to-br from-tamil-saffron to-tamil-red rounded-full flex items-center justify-center shadow-xl border-4 border-white/10">
          <User className="w-16 h-16 text-white" />
        </div>
        
        <div className="text-center md:text-left flex-1">
          <h2 className="text-3xl font-bold text-white mb-2">{profile.name}</h2>
          <div className="inline-block px-4 py-1 bg-tamil-gold/20 text-tamil-gold rounded-full text-sm font-semibold mb-6">
            Level: {level}
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-black/30 p-4 rounded-xl">
              <div className="flex justify-center md:justify-start items-center space-x-2 text-tamil-saffron mb-1">
                <Target className="w-4 h-4" />
                <span className="text-xs uppercase font-bold">Total XP</span>
              </div>
              <div className="text-2xl font-bold text-white">{profile.xp}</div>
            </div>
            
            <div className="bg-black/30 p-4 rounded-xl">
              <div className="flex justify-center md:justify-start items-center space-x-2 text-orange-500 mb-1">
                <Flame className="w-4 h-4" />
                <span className="text-xs uppercase font-bold">Streak</span>
              </div>
              <div className="text-2xl font-bold text-white">{profile.streak} <span className="text-sm font-normal text-gray-400">days</span></div>
            </div>

            <div className="bg-black/30 p-4 rounded-xl">
              <div className="flex justify-center md:justify-start items-center space-x-2 text-green-400 mb-1">
                <Award className="w-4 h-4" />
                <span className="text-xs uppercase font-bold">Accuracy</span>
              </div>
              <div className="text-2xl font-bold text-white">{accuracy}%</div>
            </div>
            
            <div className="bg-black/30 p-4 rounded-xl">
              <div className="flex justify-center md:justify-start items-center space-x-2 text-blue-400 mb-1">
                <Award className="w-4 h-4" />
                <span className="text-xs uppercase font-bold">Quizzes</span>
              </div>
              <div className="text-2xl font-bold text-white">{profile.quizCount}</div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProfileCard;
