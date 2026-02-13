import React from 'react';
import { LevelData } from '../types';
import { HeartHandshake } from 'lucide-react';

interface DareCardProps {
  level: LevelData;
  onComplete: () => void;
}

const DareCard: React.FC<DareCardProps> = ({ level, onComplete }) => {
  return (
    <div className="bg-white p-8 rounded-2xl shadow-2xl max-w-md w-full text-center border-t-8 border-pink-500 animate-float">
      <div className="flex justify-center mb-6">
        <div className="bg-pink-100 p-4 rounded-full">
          <HeartHandshake className="w-12 h-12 text-pink-600" />
        </div>
      </div>
      
      <h2 className="text-3xl font-bold text-pink-600 mb-2 romantic-font">Level {level.id}</h2>
      <h3 className="text-xl font-semibold text-gray-700 mb-6">{level.title}</h3>
      
      <div className="bg-pink-50 p-6 rounded-xl border border-pink-100 mb-8">
        <p className="text-lg text-gray-800 italic leading-relaxed">
          "{level.dareDescription}"
        </p>
      </div>

      <button
        onClick={onComplete}
        className="w-full py-4 px-6 bg-gradient-to-r from-pink-500 to-red-500 text-white text-xl font-bold rounded-xl hover:from-pink-600 hover:to-red-600 transform hover:scale-105 transition-all shadow-lg active:scale-95"
      >
        I Did It!
      </button>
    </div>
  );
};

export default DareCard;