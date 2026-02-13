export interface LevelData {
  id: number;
  title: string;
  dareDescription: string;
  rewardImage: string;
  rewardMessage: string;
}

export enum GameState {
  MAP = 'MAP',
  DARE = 'DARE',
  VERIFYING = 'VERIFYING',
  REWARD = 'REWARD',
  COMPLETED = 'COMPLETED',
}