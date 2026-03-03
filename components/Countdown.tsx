import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../i18n/LanguageContext';

const targetDate = new Date('2026-03-22T23:59:59+05:30');

const calculateTimeLeft = () => {
  const difference = +targetDate - +new Date();
  let timeLeft = {
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  };

  if (difference > 0) {
    timeLeft = {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60)
    };
  }
  return timeLeft;
};

const AnimatedDigit = ({ value }: { value: number }) => {
  const formattedValue = String(value).padStart(2, '0');
  
  return (
    <div className="relative w-full h-10 md:h-14 flex items-center justify-center overflow-visible [perspective:500px]">
      <AnimatePresence mode="popLayout">
        <motion.div
          key={formattedValue}
          initial={{ rotateX: -90, y: -20, opacity: 0, scale: 0.8 }}
          animate={{ rotateX: 0, y: 0, opacity: 1, scale: 1 }}
          exit={{ rotateX: 90, y: 20, opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.6, type: "spring", stiffness: 150, damping: 15 }}
          className="absolute flex items-center justify-center transform-gpu"
        >
          <span className="text-4xl md:text-5xl font-black text-white">{formattedValue}</span>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

const Countdown: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  const { t } = useLanguage();

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const isExpired = +targetDate - +new Date() <= 0;
  if (isExpired) return null;

  const unitLabels = [t.countdown.days, t.countdown.hours, t.countdown.minutes, t.countdown.seconds];

  return (
    <div className="flex flex-col items-center gap-4">
      <span className="text-xs font-black uppercase tracking-widest text-slate-400">{t.registration.closingLabel}</span>
      <div className="flex gap-3 md:gap-5 items-center justify-center">
        {Object.entries(timeLeft).map(([, value], index) => (
          <div key={index} className="flex flex-col items-center justify-center bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl w-24 h-24 md:w-28 md:h-28 shadow-2xl shadow-slate-900/20 border border-slate-700/50 hover:bg-slate-800 transition-colors duration-300">
            <AnimatedDigit value={value as number} />
            <span className="text-[9px] md:text-[11px] uppercase font-black tracking-widest text-slate-400 mt-2">{unitLabels[index]}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Countdown;
