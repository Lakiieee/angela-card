
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

function BirthdayCard() {
  return (
    <div className="container">
      <h1 className="title">🎂 Happy Birthday, Angela! 🎉</h1>
      <p className="subtitle">Since 6th November 2024 — the day our little adventure began 💫</p>

      <div className="message-box">
        "Dear Angela, Happy 24th birthday! I really hope you enjoy the gifts I got you. Love from, your English nerd."
      </div>

      <div className="icon-row">💜 💫 🎈 🌸 🎮</div>

      <p>Welcome to Millie’s Empire 🐾🏰</p>

      <div className="quest">
        "You’ve unlocked a new quest: Birthday Cheer + Napping + Cozy Nerdiness 💖"
      </div>

      <audio autoPlay loop controls>
        <source src="/final-fantasy.mp3" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<BirthdayCard />);
