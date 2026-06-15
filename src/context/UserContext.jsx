import React, { createContext, useContext, useEffect } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { checkBadges, calculateLevel } from '../utils/gamification';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [profile, setProfile] = useLocalStorage('tn_gk_user', {
    name: 'Explorer',
    xp: 0,
    streak: 1,
    lastActiveDate: new Date().toDateString(),
    quizCount: 0,
    correctAnswers: 0,
    totalQuestions: 0,
    badges: [],
  });

  useEffect(() => {
    const today = new Date().toDateString();
    if (profile.lastActiveDate !== today) {
      const lastActive = new Date(profile.lastActiveDate);
      const yesterday = new Date();
      yesterday.setDate(yesterday.getDate() - 1);

      let newStreak = profile.streak;
      if (lastActive.toDateString() === yesterday.toDateString()) {
        newStreak += 1;
      } else {
        newStreak = 1;
      }

      setProfile(prev => ({
        ...prev,
        streak: newStreak,
        lastActiveDate: today,
        xp: prev.xp + 20 // Daily login bonus
      }));
    }
  }, []);

  const addXP = (amount) => {
    setProfile(prev => {
      const newXp = prev.xp + amount;
      const newBadges = checkBadges(newXp, prev.quizCount);
      const uniqueBadges = [...new Set([...prev.badges, ...newBadges])];
      return { ...prev, xp: newXp, badges: uniqueBadges };
    });
  };

  const recordQuiz = (score, total) => {
    setProfile(prev => {
      const newQuizCount = prev.quizCount + 1;
      const newCorrect = prev.correctAnswers + score;
      const newTotal = prev.totalQuestions + total;
      
      let xpEarned = score * 10;
      if (score === total) xpEarned += 50; // Perfect score bonus

      const newXp = prev.xp + xpEarned;
      const newBadges = checkBadges(newXp, newQuizCount);
      const uniqueBadges = [...new Set([...prev.badges, ...newBadges])];

      return {
        ...prev,
        quizCount: newQuizCount,
        correctAnswers: newCorrect,
        totalQuestions: newTotal,
        xp: newXp,
        badges: uniqueBadges
      };
    });
  };

  const accuracy = profile.totalQuestions > 0 
    ? Math.round((profile.correctAnswers / profile.totalQuestions) * 100) 
    : 0;

  const level = calculateLevel(profile.xp);

  return (
    <UserContext.Provider value={{ profile, addXP, recordQuiz, accuracy, level }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
