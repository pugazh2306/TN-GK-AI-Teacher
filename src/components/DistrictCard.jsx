import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Users, Utensils } from 'lucide-react';
import { Link } from 'react-router-dom';

const DistrictCard = ({ district, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
    >
      <Link to={`/districts/${district.id}`} className="block">
        <div className="glass-card rounded-2xl p-6 hover:-translate-y-2 transition-transform duration-300 cursor-pointer h-full border-t border-white/20">
          <div className="flex justify-between items-start mb-4">
            <h3 className="text-2xl font-bold text-white">{district.name}</h3>
            <div className="p-2 bg-tamil-saffron/20 rounded-lg">
              <MapPin className="w-5 h-5 text-tamil-saffron" />
            </div>
          </div>
          
          <div className="space-y-3 mt-4">
            <div className="flex items-center text-gray-300">
              <Users className="w-4 h-4 mr-2 text-tamil-gold" />
              <span className="text-sm">Pop: {district.population}</span>
            </div>
            <div className="flex items-center text-gray-300">
              <Utensils className="w-4 h-4 mr-2 text-tamil-gold" />
              <span className="text-sm truncate">{district.famousFood[0]}</span>
            </div>
          </div>
          
          <div className="mt-6 pt-4 border-t border-white/10">
            <span className="text-xs text-tamil-saffron font-medium uppercase tracking-wider">Explore District &rarr;</span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default DistrictCard;
