import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { Bot, Loader2, CheckCircle2, XCircle, Timer, AlertCircle, Trophy } from 'lucide-react';
import { useUser } from '../context/UserContext';

import { topicQuizzes } from '../data/quizData';

const QuizGeneratorPage = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const initialTopic = searchParams.get('topic') || '';
  
  const { recordQuiz } = useUser();
  const [topic, setTopic] = useState(initialTopic);
  const [isGenerating, setIsGenerating] = useState(false);
  const [quizState, setQuizState] = useState('idle'); // idle, playing, review
  const [questions, setQuestions] = useState([]);
  const [currentQ, setCurrentQ] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(30);

  const generateQuiz = (e) => {
    e.preventDefault();
    if(!topic.trim()) return;
    
    setIsGenerating(true);
    // Simulate AI generation delay
    setTimeout(() => {
      // In a real app, this would call an AI API with the 'topic'
      // Use topic specific mock questions, fallback to General
      const sourceQuestions = topicQuizzes[topic] || topicQuizzes["General"];
      const generated = sourceQuestions.map(q => ({...q})); 
      setQuestions(generated);
      setIsGenerating(false);
      setQuizState('playing');
      setCurrentQ(0);
      setScore(0);
      setTimeLeft(30);
    }, 2000);
  };

  useEffect(() => {
    if (quizState === 'playing' && timeLeft > 0) {
      const timer = setTimeout(() => setTimeLeft(t => t - 1), 1000);
      return () => clearTimeout(timer);
    } else if (timeLeft === 0 && quizState === 'playing') {
      handleNext();
    }
  }, [timeLeft, quizState]);

  const handleOptionSelect = (index) => {
    if (selectedOption !== null) return;
    setSelectedOption(index);
    if (index === questions[currentQ].answer) {
      setScore(s => s + 1);
    }
  };

  const handleNext = () => {
    if (currentQ < questions.length - 1) {
      setCurrentQ(c => c + 1);
      setSelectedOption(null);
      setTimeLeft(30);
    } else {
      setQuizState('review');
      recordQuiz(score + (selectedOption === questions[currentQ].answer ? 1 : 0), questions.length);
    }
  };

  return (
    <div className="max-w-3xl mx-auto py-8">
      {quizState === 'idle' && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="glass-card p-8 rounded-2xl text-center">
          <div className="w-16 h-16 bg-tamil-saffron/20 rounded-full flex items-center justify-center mx-auto mb-6">
            <Bot className="w-8 h-8 text-tamil-saffron" />
          </div>
          <h1 className="text-3xl font-bold text-white mb-2">AI Quiz Generator</h1>
          <p className="text-gray-400 mb-8">Enter any Tamil Nadu related topic and let the AI Teacher generate a custom quiz for you.</p>
          
          <form onSubmit={generateQuiz} className="max-w-md mx-auto">
            <input 
              type="text" 
              value={topic}
              onChange={(e) => setTopic(e.target.value)}
              placeholder="e.g. Chola Architecture, Sangam Literature..." 
              className="w-full px-4 py-3 bg-black/30 border border-white/20 rounded-xl text-white mb-4 focus:ring-2 focus:ring-tamil-saffron outline-none"
              required
            />
            <button 
              type="submit" 
              disabled={isGenerating}
              className="w-full btn-primary py-3 flex items-center justify-center disabled:opacity-50"
            >
              {isGenerating ? <><Loader2 className="w-5 h-5 mr-2 animate-spin" /> Generating Quiz...</> : 'Generate Magic Quiz'}
            </button>
          </form>
        </motion.div>
      )}

      {quizState === 'playing' && (
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="glass-card p-8 rounded-2xl">
          <div className="flex justify-between items-center mb-6">
            <span className="text-tamil-gold font-bold">Question {currentQ + 1}/{questions.length}</span>
            <div className="flex items-center text-tamil-saffron font-bold">
              <Timer className="w-5 h-5 mr-1" /> 00:{timeLeft.toString().padStart(2, '0')}
            </div>
          </div>
          
          <h2 className="text-2xl font-bold text-white mb-8">{questions[currentQ].q}</h2>
          
          <div className="space-y-4 mb-8">
            {questions[currentQ].options.map((opt, idx) => {
              const isSelected = selectedOption === idx;
              const isCorrect = idx === questions[currentQ].answer;
              
              let btnClass = "w-full text-left px-6 py-4 rounded-xl border transition-all ";
              if (selectedOption === null) {
                btnClass += "bg-white/5 border-white/10 hover:bg-white/10 text-white";
              } else if (isCorrect) {
                btnClass += "bg-green-500/20 border-green-500 text-green-400";
              } else if (isSelected && !isCorrect) {
                btnClass += "bg-red-500/20 border-red-500 text-red-400";
              } else {
                btnClass += "bg-black/20 border-transparent text-gray-500";
              }

              return (
                <button 
                  key={idx} 
                  onClick={() => handleOptionSelect(idx)}
                  disabled={selectedOption !== null}
                  className={btnClass}
                >
                  <div className="flex justify-between items-center">
                    <span>{opt}</span>
                    {selectedOption !== null && isCorrect && <CheckCircle2 className="w-5 h-5" />}
                    {selectedOption !== null && isSelected && !isCorrect && <XCircle className="w-5 h-5" />}
                  </div>
                </button>
              );
            })}
          </div>

          <AnimatePresence>
            {selectedOption !== null && (
              <motion.div 
                initial={{ opacity: 0, height: 0 }} 
                animate={{ opacity: 1, height: 'auto' }}
                className="bg-black/30 p-4 rounded-xl mb-6 border border-tamil-gold/30"
              >
                <h4 className="flex items-center font-bold text-tamil-gold mb-2"><AlertCircle className="w-4 h-4 mr-2"/> Explanation</h4>
                <p className="text-gray-300 text-sm">{questions[currentQ].explanation}</p>
              </motion.div>
            )}
          </AnimatePresence>

          {selectedOption !== null && (
            <button onClick={handleNext} className="btn-primary w-full py-3">
              {currentQ < questions.length - 1 ? 'Next Question' : 'Finish Quiz'}
            </button>
          )}
        </motion.div>
      )}

      {quizState === 'review' && (
        <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="glass-card p-8 rounded-2xl text-center">
          <Trophy className="w-20 h-20 text-tamil-gold mx-auto mb-4" />
          <h2 className="text-4xl font-bold text-white mb-2">Quiz Complete!</h2>
          <p className="text-gray-400 mb-8">You scored {score} out of {questions.length}</p>
          
          <div className="flex justify-center space-x-4">
            <button onClick={() => setQuizState('idle')} className="btn-secondary py-3 px-6">
              Generate Another
            </button>
            <button onClick={() => navigate('/profile')} className="btn-primary py-3 px-6">
              View Profile
            </button>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default QuizGeneratorPage;
