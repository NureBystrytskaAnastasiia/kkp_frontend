import type { Challenge} from '../types/challenge';

const API_BASE_URL = 'https://localhost:7192/api/Challenge';

export const challengeApi = {
  async getChallenges(token: string): Promise<Challenge[]> {
    const response = await fetch(`${API_BASE_URL}/challenges`, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) throw new Error('Failed to fetch challenges');
    return response.json();
  },

  async checkChallenge(challengeId: number, token: string): Promise<{ completedAt: string }> {
    const response = await fetch(`${API_BASE_URL}/check/${challengeId}`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) throw new Error('Failed to check challenge');
    return response.json();
  }
};