import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { Challenge } from '../../types/challenge';
import { challengeApi } from '../../api/usechallenges';

interface ChallengesState {
  challenges: Challenge[];
  loading: boolean;
  error: string | null;
}

const initialState: ChallengesState = {
  challenges: [],
  loading: false,
  error: null,
};

export const fetchChallenges = createAsyncThunk(
  'challenges/fetchChallenges',
  async (token: string, { rejectWithValue }) => {
    try {
      const challenges = await challengeApi.getChallenges(token);
      return challenges.map(challenge => ({
        ...challenge,
        completedAt: challenge.completedAt || null // Нормалізуємо дані
      }));
    } catch (error) {
      return rejectWithValue(error instanceof Error ? error.message : 'Unknown error');
    }
  }
);

export const completeChallenge = createAsyncThunk(
  'challenges/completeChallenge',
  async ({ challengeId, token }: { challengeId: number; token: string }, { rejectWithValue }) => {
    try {
      const response = await challengeApi.checkChallenge(challengeId, token);
      return { challengeId, response };
    } catch (error) {
      return rejectWithValue(error instanceof Error ? error.message : 'Unknown error');
    }
  }
);

const challengesSlice = createSlice({
  name: 'challenges',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchChallenges.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchChallenges.fulfilled, (state, action: PayloadAction<Challenge[]>) => {
        state.loading = false;
        state.challenges = action.payload;
      })
      .addCase(fetchChallenges.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      .addCase(completeChallenge.fulfilled, (state, action) => {
        const { challengeId, response } = action.payload;
        state.challenges = state.challenges.map(challenge => 
          challenge.challengeId === challengeId
            ? { 
                ...challenge, 
                completedAt: response.completedAt || new Date().toISOString() 
              }
            : challenge
        );
      })
      .addCase(completeChallenge.rejected, (state, action) => {
        state.error = action.payload as string;
      });
  },
});

export default challengesSlice.reducer;