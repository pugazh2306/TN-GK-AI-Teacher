import React from 'react';
import { motion } from 'framer-motion';
import { Lightbulb } from 'lucide-react';

const FactCard = ({ fact }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className="glass-card rounded-2xl p-6 relative overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-32 h-32 bg-tamil-saffron/10 rounded-full blur-2xl -mr-10 -mt-10"></div>
      
      <div className="flex items-start space-x-4 relative z-10">
        <div className="flex-shrink-0 p-3 bg-gradient-to-br from-tamil-saffron to-tamil-red rounded-xl shadow-lg">
          <Lightbulb className="w-6 h-6 text-white" />
        </div>
        <div>
          <h3 className="text-xl font-bold text-white mb-2">Did You Know?</h3>
          <p className="text-gray-300 leading-relaxed text-sm md:text-base">
            {fact}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default FactCard;
