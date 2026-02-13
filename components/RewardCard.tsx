import React from 'react';
import { LevelData } from '../types';
import { Gift, ArrowRight } from 'lucide-react';

interface RewardCardProps {
  level: LevelData;
  onNext: () => void;
}

const RewardCard: React.FC<RewardCardProps> = ({ level, onNext }) => {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-2xl max-w-lg w-full text-center border-t-8 border-green-500 transform transition-all duration-500 scale-100">
      <div className="flex justify-center -mt-12 mb-4">
        <div className="bg-green-100 p-4 rounded-full shadow-lg">
          <Gift className="w-10 h-10 text-green-600" />
        </div>
      </div>

      <h2 className="text-3xl font-bold text-green-600 mb-4 romantic-font">Level Complete!</h2>
      
      <div className="relative group mb-6 rounded-xl overflow-hidden shadow-md border-4 border-pink-200">
        <img 
          src={level.rewardImage} 
          alt="Reward" 
          className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end justify-center p-4">
          <p className="text-white font-medium text-shadow">{level.rewardMessage}</p>
        </div>
      </div>

      <button
        onClick={onNext}
        className="flex items-center justify-center w-full py-3 px-6 bg-green-500 text-white text-lg font-bold rounded-xl hover:bg-green-600 transform hover:translate-x-1 transition-all shadow-md"
      >
        <span>Next Level</span>
        <ArrowRight className="ml-2 w-5 h-5" />
      </button>
    </div>
  );
};

export default RewardCard;