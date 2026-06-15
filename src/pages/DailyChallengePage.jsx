import React from 'react';
import { motion } from 'framer-motion';
import { Target, Calendar, Flame } from 'lucide-react';
import FactCard from '../components/FactCard';
import { dailyFacts } from '../data/mockData';
import { useUser } from '../context/UserContext';

const DailyChallengePage = () => {
  const { profile } = useUser();
  const fact = dailyFacts[new Date().getDay() % dailyFacts.length];

  return (
    <div className="max-w-4xl mx-auto py-8 space-y-8">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold text-white mb-2">Daily Challenge</h1>
        <p className="text-gray-400">Complete your daily goals to maintain your streak and earn bonus XP.</p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        <div className="glass-card p-6 rounded-2xl flex flex-col items-center justify-center text-center border-t-4 border-tamil-saffron">
          <Flame className="w-12 h-12 text-orange-500 mb-4" />
          <h3 className="text-xl font-bold text-white mb-1">Daily Streak</h3>
          <p className="text-3xl font-bold text-tamil-gold mb-2">{profile.streak}</p>
          <p className="text-xs text-gray-400">Days in a row</p>
        </div>

        <div className="glass-card p-6 rounded-2xl flex flex-col items-center justify-center text-center border-t-4 border-tamil-red">
          <Calendar className="w-12 h-12 text-tamil-red mb-4" />
          <h3 className="text-xl font-bold text-white mb-1">Today's Goal</h3>
          <p className="text-lg font-bold text-gray-300 mb-2">1 Quiz</p>
          <span className="px-3 py-1 bg-green-500/20 text-green-400 text-xs rounded-full font-bold">
            {profile.streak > 0 ? "Completed" : "Pending"}
          </span>
        </div>

        <div className="glass-card p-6 rounded-2xl flex flex-col items-center justify-center text-center border-t-4 border-blue-500">
          <Target className="w-12 h-12 text-blue-500 mb-4" />
          <h3 className="text-xl font-bold text-white mb-1">Daily Score</h3>
          <p className="text-3xl font-bold text-blue-400 mb-2">+20</p>
          <p className="text-xs text-gray-400">XP earned today</p>
        </div>
      </div>

      <div className="mt-12">
        <h2 className="text-2xl font-bold text-white mb-6">Today's Fact</h2>
        <FactCard fact={fact} />
      </div>

      <div className="mt-12 text-center">
        <button 
          onClick={() => window.location.href='/quiz'}
          className="btn-primary py-4 px-10 text-lg shadow-xl shadow-tamil-saffron/20"
        >
          Play Daily Quiz
        </button>
      </div>
    </div>
  );
};

export default DailyChallengePage;
