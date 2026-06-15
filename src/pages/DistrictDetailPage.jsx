import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, MapPin, Users, Utensils, Info } from 'lucide-react';
import { districtsData } from '../data/mockData';

const DistrictDetailPage = () => {
  const { id } = useParams();
  const district = districtsData.find(d => d.id === id);

  if (!district) {
    return (
      <div className="text-center py-20">
        <h2 className="text-2xl text-white font-bold mb-4">District not found</h2>
        <Link to="/districts" className="btn-primary">Back to Explorer</Link>
      </div>
    );
  }

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="max-w-4xl mx-auto py-8"
    >
      <Link to="/districts" className="inline-flex items-center text-tamil-saffron hover:text-white transition-colors mb-8">
        <ArrowLeft className="w-4 h-4 mr-2" />
        Back to Districts
      </Link>

      <div className="glass-card rounded-3xl overflow-hidden border-t-4 border-tamil-saffron relative">
        <div className="absolute top-0 right-0 p-8 opacity-5">
          <MapPin className="w-64 h-64" />
        </div>
        
        <div className="p-8 md:p-12 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8">
            <div>
              <h1 className="text-5xl font-bold text-white mb-2">{district.name}</h1>
              <div className="flex items-center text-gray-400 space-x-4">
                <span className="flex items-center">
                  <Users className="w-4 h-4 mr-1 text-tamil-gold" />
                  {district.population}
                </span>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="bg-black/30 p-6 rounded-2xl">
                <h3 className="text-xl font-bold text-white flex items-center mb-4">
                  <MapPin className="w-5 h-5 text-tamil-saffron mr-2" />
                  Famous Places
                </h3>
                <ul className="space-y-2">
                  {district.famousPlaces.map((place, idx) => (
                    <li key={idx} className="text-gray-300 flex items-start">
                      <span className="text-tamil-saffron mr-2">•</span> {place}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-black/30 p-6 rounded-2xl">
                <h3 className="text-xl font-bold text-white flex items-center mb-4">
                  <Utensils className="w-5 h-5 text-tamil-saffron mr-2" />
                  Famous Food
                </h3>
                <ul className="space-y-2">
                  {district.famousFood.map((food, idx) => (
                    <li key={idx} className="text-gray-300 flex items-start">
                      <span className="text-tamil-saffron mr-2">•</span> {food}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-black/30 p-6 rounded-2xl h-full border border-tamil-gold/20">
                <h3 className="text-xl font-bold text-white flex items-center mb-4">
                  <Info className="w-5 h-5 text-tamil-gold mr-2" />
                  Interesting Facts
                </h3>
                <ul className="space-y-4">
                  {district.facts.map((fact, idx) => (
                    <li key={idx} className="text-gray-300 leading-relaxed border-l-2 border-tamil-gold pl-4">
                      {fact}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default DistrictDetailPage;
