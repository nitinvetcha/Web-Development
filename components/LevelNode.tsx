import React from 'react';
import { Lock, Heart, Star } from 'lucide-react';

interface LevelNodeProps {
  levelNumber: number;
  isLocked: boolean;
  isCompleted: boolean;
  isCurrent: boolean;
  onClick: () => void;
}

const LevelNode: React.FC<LevelNodeProps> = ({ levelNumber, isLocked, isCompleted, isCurrent, onClick }) => {
  return (
    <button
      onClick={onClick}
      disabled={isLocked}
      className={`
        relative flex flex-col items-center justify-center w-24 h-24 rounded-full border-4 shadow-xl transition-all duration-300
        ${isLocked ? 'bg-gray-200 border-gray-300 cursor-not-allowed opacity-60' : ''}
        ${isCompleted ? 'bg-pink-500 border-pink-600 text-white transform hover:scale-105' : ''}
        ${isCurrent ? 'bg-white border-red-500 text-red-500 animate-pulse ring-4 ring-red-200 transform scale-110' : ''}
      `}
    >
      <div className="z-10 flex items-center justify-center">
        {isLocked && <Lock className="w-8 h-8 text-gray-400" />}
        {isCompleted && <Heart className="w-8 h-8 fill-current" />}
        {isCurrent && <Star className="w-8 h-8 fill-current" />}
      </div>
      <span className={`absolute -bottom-8 font-bold text-lg ${isCurrent ? 'text-red-600' : 'text-gray-500'}`}>
        Level {levelNumber}
      </span>
    </button>
  );
};

export default LevelNode;