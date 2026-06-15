import React from 'react';
import { motion } from 'framer-motion';

const ProgressCard = ({ currentXP, targetXP, title, subtitle }) => {
  const percentage = Math.min(100, Math.round((currentXP / targetXP) * 100));
  
  return (
    <div className="glass-card p-6 rounded-2xl">
      <div className="flex justify-between items-end mb-4">
        <div>
          <h4 className="font-bold text-white">{title}</h4>
          <p className="text-xs text-gray-400">{subtitle}</p>
        </div>
        <div className="text-right">
          <span className="text-xl font-bold text-tamil-gold">{currentXP}</span>
          <span className="text-sm text-gray-500"> / {targetXP} XP</span>
        </div>
      </div>
      
      <div className="w-full bg-white/10 rounded-full h-3 mb-2 overflow-hidden">
        <motion.div 
          initial={{ width: 0 }}
          animate={{ width: `${percentage}%` }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="bg-gradient-to-r from-tamil-saffron to-tamil-red h-3 rounded-full"
        />
      </div>
      <div className="text-right text-xs font-medium text-tamil-saffron">
        {percentage}% Complete
      </div>
    </div>
  );
};

export default ProgressCard;
