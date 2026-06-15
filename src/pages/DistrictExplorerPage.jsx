import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Map } from 'lucide-react';
import DistrictCard from '../components/DistrictCard';
import { districtsData } from '../data/mockData';

const DistrictExplorerPage = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredDistricts = districtsData.filter(d => 
    d.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="py-8 space-y-8">
      <div className="flex flex-col md:flex-row justify-between items-center gap-6">
        <div>
          <h1 className="text-4xl font-bold text-white flex items-center mb-2">
            <Map className="w-8 h-8 text-tamil-saffron mr-3" />
            District Explorer
          </h1>
          <p className="text-gray-400">Discover the unique culture, food, and history of all 38 districts of Tamil Nadu.</p>
        </div>
        
        <div className="relative w-full md:w-96">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-gray-500" />
          </div>
          <input
            type="text"
            className="block w-full pl-10 pr-3 py-3 border border-white/10 rounded-xl leading-5 bg-black/50 text-gray-300 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-tamil-saffron focus:border-tamil-saffron transition-colors"
            placeholder="Search districts..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredDistricts.length > 0 ? (
          filteredDistricts.map((district, index) => (
            <DistrictCard key={district.id} district={district} index={index} />
          ))
        ) : (
          <div className="col-span-full py-12 text-center text-gray-400">
            No districts found matching "{searchTerm}".
          </div>
        )}
      </div>
    </div>
  );
};

export default DistrictExplorerPage;
