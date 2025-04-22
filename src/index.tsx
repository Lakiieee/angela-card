
import React from 'react';
import ReactDOM from 'react-dom/client';
import { motion } from "framer-motion";
import { Heart, Sparkles } from "lucide-react";
import './index.css';

function BirthdayCard() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 to-blue-50 p-6 flex flex-col items-center justify-center space-y-8 relative overflow-hidden">
      <audio autoPlay loop controls className="absolute top-4 right-4 w-48 opacity-60">
        <source src="/final-fantasy.mp3" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-4xl font-bold text-center text-pink-600"
      >
        🎂 Happy Birthday, Angela! 🎉
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="text-lg text-center max-w-xl text-gray-700"
      >
        Since <span className="font-semibold text-purple-600">6th November 2024</span> — the day our little adventure began 💫
      </motion.div>
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="w-full max-w-md"
      >
        <div className="bg-white shadow-lg rounded-2xl p-4">
          <div className="text-center">
            <p className="text-md text-gray-600 italic">
              "Dear Angela, Happy 24th birthday! I really hope you enjoy the gifts I got you. Love from, your English nerd."
            </p>
          </div>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="mt-6 text-center space-y-4"
      >
        <p className="text-sm text-gray-500">Welcome to Millie’s Empire 🐾🏰</p>
        <div className="flex justify-center space-x-4 text-pink-400 text-xl">
          <Heart className="animate-pulse" />
          <Sparkles className="text-purple-500 animate-spin" />
        </div>
        <div className="text-xs text-gray-400">
          ✨ Crystals shimmer in the air... a moogle waves from behind a signpost marked "Millie’s Empire"... 🎈 Hearts and balloons float like in Bloons... 🌾 Stardew flowers bloom under a soft pixel sun.
        </div>
        <div className="mt-4 text-sm text-purple-600 italic">
          "You’ve unlocked a new quest: Birthday Cheer + Napping + Cozy Nerdiness 💖"
        </div>
      </motion.div>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<BirthdayCard />);
