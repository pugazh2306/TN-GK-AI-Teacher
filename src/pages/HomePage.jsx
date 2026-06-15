import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import FactCard from '../components/FactCard';
import QuizCard from '../components/QuizCard';
import { dailyFacts } from '../data/mockData';
import { PlayCircle, Compass } from 'lucide-react';

const HomePage = () => {
  const randomFact = dailyFacts[Math.floor(Math.random() * dailyFacts.length)];

  return (
    <div className="space-y-12 pb-12">
      {/* Hero Section */}
      <section className="text-center pt-16 pb-8 px-4">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-7xl font-extrabold mb-6"
        >
          <span className="text-white">தமிழ்நாடு</span> <br />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-tamil-saffron via-tamil-gold to-tamil-red">
            GK AI Teacher
          </span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-10"
        >
          Learn Tamil Nadu History, Geography, Culture, and Current Affairs through interactive AI-powered quizzes and gamification.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="flex flex-col sm:flex-row justify-center items-center gap-4"
        >
          <Link to="/quiz" className="btn-primary w-full sm:w-auto flex items-center justify-center text-lg py-3 px-8">
            <PlayCircle className="w-5 h-5 mr-2" />
            Start Learning
          </Link>
          <Link to="/districts" className="btn-secondary w-full sm:w-auto flex items-center justify-center text-lg py-3 px-8">
            <Compass className="w-5 h-5 mr-2" />
            Explore Districts
          </Link>
        </motion.div>
      </section>

      {/* Daily Fact Section */}
      <section>
        <FactCard fact={randomFact} />
      </section>

      {/* Featured Quizzes & Topics */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-3">
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
            <span className="w-2 h-8 bg-tamil-saffron rounded-full mr-3"></span>
            Featured Quizzes
          </h2>
        </div>
        <QuizCard 
          title="Chola Dynasty" 
          description="Test your knowledge on the great Chola kings, architecture, and their naval empire."
          questionsCount={10}
          onStart={() => window.location.href='/quiz?topic=Chola%20Dynasty'}
        />
        <QuizCard 
          title="Tamil Literature" 
          description="Explore Sangam literature, Thirukkural, and epics like Silappatikaram."
          questionsCount={10}
          onStart={() => window.location.href='/quiz?topic=Tamil%20Literature'}
        />
        <QuizCard 
          title="Geography & Rivers" 
          description="Learn about the Western Ghats, Kaveri river, and important geographical landmarks."
          questionsCount={10}
          onStart={() => window.location.href='/quiz?topic=Geography'}
        />
      </section>
    </div>
  );
};

export default HomePage;
