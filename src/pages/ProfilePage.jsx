import React from 'react';
import { motion } from 'framer-motion';
import ProfileCard from '../components/ProfileCard';
import ProgressCard from '../components/ProgressCard';
import { useUser } from '../context/UserContext';
import { Award, Shield } from 'lucide-react';

const ALL_BADGES = [
  "First Steps",
  "Tamil Scholar",
  "History Master",
  "Geography King",
  "Collector Aspirant",
  "Collector Rank"
];

const ProfilePage = () => {
  const { profile, level, accuracy } = useUser();

  const nextLevelXP = 
    level === "Bronze" ? 100 : 
    level === "Silver" ? 500 : 
    level === "Gold" ? 2000 : 
    level === "Diamond" ? 5000 : 5000;

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="max-w-4xl mx-auto py-8 space-y-8"
    >
      <h1 className="text-3xl font-bold text-white mb-6">Your Profile</h1>
      
      <ProfileCard profile={profile} level={level} accuracy={accuracy} />

      <div className="grid md:grid-cols-2 gap-6">
        <ProgressCard 
          currentXP={profile.xp} 
          targetXP={nextLevelXP} 
          title={`Next Rank: ${
            level === "Bronze" ? "Silver" : 
            level === "Silver" ? "Gold" : 
            level === "Gold" ? "Diamond" : 
            "Collector"
          }`}
          subtitle="Keep learning to rank up!"
        />
        
        <ProgressCard 
          currentXP={profile.quizCount} 
          targetXP={50} 
          title="Collector Aspirant Progress"
          subtitle="Complete 50 quizzes to unlock"
        />
      </div>

      <div className="glass-card p-8 rounded-2xl">
        <div className="flex items-center space-x-3 mb-6">
          <Award className="w-6 h-6 text-tamil-gold" />
          <h3 className="text-2xl font-bold text-white">Badges & Achievements</h3>
        </div>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {ALL_BADGES.map((badge, idx) => {
            const isUnlocked = profile.badges.includes(badge);
            return (
              <div 
                key={idx} 
                className={`p-4 rounded-xl flex flex-col items-center text-center transition-all ${
                  isUnlocked 
                    ? 'bg-gradient-to-b from-tamil-gold/20 to-transparent border border-tamil-gold/30' 
                    : 'bg-black/20 border border-white/5 opacity-50 grayscale'
                }`}
              >
                <div className={`p-3 rounded-full mb-3 ${isUnlocked ? 'bg-tamil-gold/20' : 'bg-white/5'}`}>
                  <Shield className={`w-8 h-8 ${isUnlocked ? 'text-tamil-gold' : 'text-gray-500'}`} />
                </div>
                <span className={`text-sm font-semibold ${isUnlocked ? 'text-white' : 'text-gray-500'}`}>
                  {badge}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
};

export default ProfilePage;
