import React from 'react';
import { NavLink } from 'react-router-dom';
import { BookOpen, Map, Target, Trophy, User, Zap } from 'lucide-react';
import { useUser } from '../context/UserContext';
import { motion } from 'framer-motion';

const Navbar = () => {
  const { profile, level } = useUser();

  const links = [
    { to: '/', icon: BookOpen, label: 'Home' },
    { to: '/quiz', icon: Zap, label: 'AI Quiz' },
    { to: '/districts', icon: Map, label: 'Districts' },
    { to: '/daily', icon: Target, label: 'Daily' },
    { to: '/leaderboard', icon: Trophy, label: 'Rank' },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 glass-card border-b border-white/10 px-6 py-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <div className="w-10 h-10 bg-gradient-to-br from-tamil-saffron to-tamil-red rounded-full flex items-center justify-center shadow-lg">
            <BookOpen className="text-white w-6 h-6" />
          </div>
          <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-tamil-saffron to-tamil-gold">
            TN GK AI Teacher
          </span>
        </div>

        <div className="hidden md:flex space-x-6">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `flex items-center space-x-1 text-sm font-medium transition-colors ${
                  isActive ? 'text-tamil-saffron' : 'text-gray-300 hover:text-white'
                }`
              }
            >
              <link.icon className="w-4 h-4" />
              <span>{link.label}</span>
            </NavLink>
          ))}
        </div>

        <NavLink to="/profile" className="flex items-center space-x-3 bg-white/5 hover:bg-white/10 px-4 py-2 rounded-full transition-all border border-white/10">
          <div className="text-right hidden sm:block">
            <div className="text-sm font-bold text-white">{profile.name}</div>
            <div className="text-xs text-tamil-gold">{level} • {profile.xp} XP</div>
          </div>
          <div className="w-8 h-8 bg-tamil-saffron rounded-full flex items-center justify-center">
            <User className="w-5 h-5 text-white" />
          </div>
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
