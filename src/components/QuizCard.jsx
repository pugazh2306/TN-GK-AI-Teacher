import React from 'react';
import { motion } from 'framer-motion';
import { HelpCircle } from 'lucide-react';

const QuizCard = ({ title, description, questionsCount, onStart }) => {
  return (
    <motion.div 
      whileHover={{ scale: 1.02 }}
      className="glass-card p-6 rounded-2xl border-l-4 border-tamil-red flex flex-col justify-between"
    >
      <div>
        <div className="flex items-center space-x-2 mb-3">
          <HelpCircle className="w-5 h-5 text-tamil-gold" />
          <span className="text-xs font-semibold text-tamil-gold uppercase tracking-wider">{questionsCount} Questions</span>
        </div>
        <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
        <p className="text-sm text-gray-400 mb-6">{description}</p>
      </div>
      
      <button 
        onClick={onStart}
        className="w-full btn-primary py-2 text-sm"
      >
        Start Quiz
      </button>
    </motion.div>
  );
};

export default QuizCard;
