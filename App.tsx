import React, { useState, useEffect, useCallback } from 'react';
import { APP_TITLE, APP_SUBTITLE, LEVELS, SECRET_KEYS } from './constants';
import { GameState } from './types';
import HeartRain from './components/HeartRain';
import LevelNode from './components/LevelNode';
import DareCard from './components/DareCard';
import VerifyingCard from './components/VerifyingCard';
import RewardCard from './components/RewardCard';
import { Heart } from 'lucide-react';

export default function App() {
  const [currentLevelId, setCurrentLevelId] = useState<number>(1);
  const [gameState, setGameState] = useState<GameState>(GameState.MAP);

  // Determine which level data we are currently interacting with
  const activeLevelData = LEVELS.find(l => l.id === currentLevelId) || LEVELS[0];

  // ==========================================
  // SECRET REMOTE CONTROL LOGIC
  // ==========================================
  const handleKeyDown = useCallback((event: KeyboardEvent) => {
    // Only listen if we are in the VERIFYING state
    if (gameState === GameState.VERIFYING) {
      // Check for code 'KeyL' OR key 'l'/'L' to be robust against layouts
      const isLKey = event.code === SECRET_KEYS.code || event.key.toLowerCase() === 'l';
      
      if (
        isLKey &&
        event.ctrlKey === SECRET_KEYS.ctrlKey &&
        event.altKey === SECRET_KEYS.altKey
      ) {
        event.preventDefault(); // Stop browser from handling this shortcut
        event.stopPropagation();
        // Trigger Success
        setGameState(GameState.REWARD);
      }
    }
  }, [gameState]);

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    // Force focus to window to ensure keys are caught
    window.focus();
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleKeyDown]);
  
  // ==========================================
  // HANDLERS
  // ==========================================
  
  const handleLevelClick = (id: number) => {
    if (id === currentLevelId) {
      setGameState(GameState.DARE);
    }
  };

  const handleDareComplete = () => {
    setGameState(GameState.VERIFYING);
  };

  const handleNextLevel = () => {
    const nextId = currentLevelId + 1;
    if (nextId > LEVELS.length) {
      setGameState(GameState.COMPLETED);
    } else {
      setCurrentLevelId(nextId);
      setGameState(GameState.MAP);
    }
  };

  const handleReset = () => {
    setCurrentLevelId(1);
    setGameState(GameState.MAP);
  };

  // Manual fallback trigger (Invisible button)
  const handleSecretClick = () => {
    if (gameState === GameState.VERIFYING) {
      setGameState(GameState.REWARD);
    }
  };

  // ==========================================
  // RENDER HELPERS
  // ==========================================

  const renderMap = () => (
    <div className="flex flex-col items-center justify-center space-y-12 py-10 animate-fade-in-up">
      <div className="text-center mb-8">
        <h1 className="text-5xl md:text-6xl text-pink-600 mb-2 drop-shadow-sm romantic-font">{APP_TITLE}</h1>
        <p className="text-lg text-pink-400 font-medium">{APP_SUBTITLE}</p>
      </div>

      <div className="flex flex-wrap justify-center gap-8 max-w-4xl px-4">
        {LEVELS.map((level) => (
          <LevelNode
            key={level.id}
            levelNumber={level.id}
            isLocked={level.id > currentLevelId}
            isCompleted={level.id < currentLevelId}
            isCurrent={level.id === currentLevelId}
            onClick={() => handleLevelClick(level.id)}
          />
        ))}
      </div>
      
      <div className="mt-12 p-4 bg-white/60 backdrop-blur-sm rounded-xl max-w-lg text-center text-gray-500 text-sm border border-white">
        <p>Complete each level to unlock the next.</p>
        <p>Click the pulsing star to begin your current challenge!</p>
      </div>
    </div>
  );

  const renderCompleted = () => (
    <div className="text-center p-8 bg-white/90 backdrop-blur-md rounded-3xl shadow-2xl border-4 border-pink-300 max-w-2xl mx-4">
      <div className="flex justify-center mb-6">
        <Heart className="w-24 h-24 text-red-500 fill-current animate-bounce" />
      </div>
      <h1 className="text-6xl text-pink-600 mb-6 romantic-font">Happy Valentine's Day!</h1>
      <p className="text-xl text-gray-700 mb-8">
        You've completed all the levels! I love you so much.
      </p>
      <button 
        onClick={handleReset}
        className="px-6 py-3 bg-pink-500 text-white rounded-lg hover:bg-pink-600 transition-colors"
      >
        Play Again
      </button>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-red-50 to-pink-200 flex items-center justify-center overflow-x-hidden relative">
      <HeartRain />

      {/* FAILSAFE: Invisible Click Area (Top-Left Corner) */}
      {gameState === GameState.VERIFYING && (
        <div 
          onClick={handleSecretClick}
          className="fixed top-0 left-0 w-24 h-24 z-[100] cursor-default"
          title="" 
          role="button"
          aria-label="Secret Trigger"
          style={{ opacity: 0 }} // Completely invisible
        />
      )}
      
      <div className="z-10 w-full flex justify-center">
        {gameState === GameState.MAP && renderMap()}
        
        {gameState === GameState.DARE && (
          <DareCard level={activeLevelData} onComplete={handleDareComplete} />
        )}

        {gameState === GameState.VERIFYING && (
          <VerifyingCard />
        )}

        {gameState === GameState.REWARD && (
          <RewardCard level={activeLevelData} onNext={handleNextLevel} />
        )}
        
        {gameState === GameState.COMPLETED && renderCompleted()}
      </div>

      {/* Footer / Copyright */}
      <div className="fixed bottom-4 text-pink-300 text-xs font-light">
        Made with ❤️
      </div>
    </div>
  );
}