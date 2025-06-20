export interface ChallengeBase {
  challengeId: number;
  title: string;
  description: string;
  reward: number;
  createdAt: string;
}

export interface Challenge extends ChallengeBase {
  isActive: boolean;
  completedAt: string | null; // Добавляем сюда, чтобы соответствовать ChallengeWithStatus
}

export interface ChallengeWithStatus extends Challenge {
  // Теперь наследует от Challenge, который уже включает completedAt
}

export interface UserChallenge {
  userChallengeId: number;
  userId: number;
  challengeId: number;
  isCompleted: boolean;
  completedAt: string | null;
  challenge: Challenge;
}

export interface CheckChallengeResponse {
  message: string;
}