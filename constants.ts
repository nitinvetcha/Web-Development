import { LevelData } from './types';

// ==========================================
// CONFIGURATION AREA - EDIT HERE
// ==========================================

export const APP_TITLE = "Kiss Day Challenge";
export const APP_SUBTITLE = "Collect all the kisses to unlock the treasure";

// The Secret Keys to approve a level when in "Verifying" mode.
// Default: Ctrl + Alt + L
export const SECRET_KEYS = {
  ctrlKey: true,
  altKey: true,
  code: 'KeyL', 
};

export const LEVELS: LevelData[] = [
  {
    id: 1,
    title: "The Air Kiss",
    dareDescription: "Blow me the biggest, most dramatic air kiss you can muster! Make sure I feel the breeze through the screen.",
    // REPLACE THE URL BELOW WITH YOUR IMAGE FOR LEVEL 1
    rewardImage: "https://picsum.photos/id/102/600/600", 
    rewardMessage: "Caught it! Here is a memory to start us off.",
  },
  {
    id: 2,
    title: "The Sound of Love",
    dareDescription: "Lean close to the microphone (or call me) and give me the loudest, wettest 'Mwah' sound you can make.",
    // REPLACE THE URL BELOW WITH YOUR IMAGE FOR LEVEL 2
    rewardImage: "https://picsum.photos/id/1011/600/600",
    rewardMessage: "Music to my ears. You've unlocked the next one!",
  },
  {
    id: 3,
    title: "The Screen Kiss",
    dareDescription: "Find my lips on your screen right now (on the video feed) and plant a kiss directly on the glass. Don't be shy!",
    // REPLACE THE URL BELOW WITH YOUR IMAGE FOR LEVEL 3
    rewardImage: "https://picsum.photos/id/30/600/600",
    rewardMessage: "I felt that one! You're doing great.",
  },
  {
    id: 4,
    title: "Memory Lane",
    dareDescription: "Tell me the story of our very first kiss. What were you thinking right before it happened?",
    // REPLACE THE URL BELOW WITH YOUR IMAGE FOR LEVEL 4
    rewardImage: "https://picsum.photos/id/319/600/600",
    rewardMessage: "I'll never forget it either. Happy Kiss Day, my love!",
  },
];