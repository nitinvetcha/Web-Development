import React from 'react';
import { Loader2 } from 'lucide-react';

const VerifyingCard: React.FC = () => {
  return (
    <div className="bg-white p-8 rounded-2xl shadow-2xl max-w-md w-full text-center border-t-8 border-purple-500">
      <div className="flex justify-center mb-6">
        <Loader2 className="w-16 h-16 text-purple-500 animate-spin" />
      </div>
      
      <h2 className="text-3xl font-bold text-purple-600 mb-4 romantic-font">Checking with Cupid...</h2>
      
      <p className="text-gray-600 mb-6">
        Please wait while the system verifies your completion. 
        <br/>
        <span className="text-sm text-gray-400">(Don't close this window!)</span>
      </p>

      <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700 overflow-hidden">
        <div className="bg-purple-600 h-2.5 rounded-full animate-pulse w-full"></div>
      </div>
    </div>
  );
};

export default VerifyingCard;