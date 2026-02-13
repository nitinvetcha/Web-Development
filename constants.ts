import { LevelData } from './types';

// ==========================================
// CONFIGURATION AREA - EDIT HERE
// ==========================================

export const APP_TITLE = "Valentine's Quest";
export const APP_SUBTITLE = "Prove your love to unlock the treasure";

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
    title: "The Warm Up",
    dareDescription: "Send me a voice note saying 'I love you' in 3 different silly voices.",
    rewardImage: "https://picsum.photos/id/102/600/600",
    rewardMessage: "Aww, you sound adorable! Here is a memory from our first date.",
  },
  {
    id: 2,
    title: "Truth or Dare",
    dareDescription: "Do a 30-second dance to your favorite song right now!",
    rewardImage: "https://picsum.photos/id/1011/600/600",
    rewardMessage: "Look at those moves! You've unlocked a cute photo of us.",
  },
  {
    id: 3,
    title: "The Artist",
    dareDescription: "Draw a heart on a piece of paper, write my name inside, and show it to the camera.",
    rewardImage: "https://picsum.photos/id/30/600/600",
    rewardMessage: "Masterpiece! Frame it.",
  },
  {
    id: 4,
    title: "The Final Test",
    dareDescription: "Promise me that we will see each other soon.",
    rewardImage: "https://picsum.photos/id/319/600/600",
    rewardMessage: "I promise too. Happy Valentine's Day, my love!",
  },
];
