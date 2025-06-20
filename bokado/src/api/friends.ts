// api/friends.ts
import axios from 'axios';
import type { FriendDto, UserSwipeDto, TopUser } from '../types/friends';

const API_BASE_URL = 'https://localhost:7192/api/Friends';

const getAuthToken = () => {
  const token = localStorage.getItem('token');
  console.log('🔥 Retrieved auth token:', token);
  return token;
};

// Swipe користувача (передаємо action як query parameter)
export const swipeUser = async (targetUserId: number, action: 'like' | 'pass'): Promise<void> => {
  const token = getAuthToken();
  console.log(`🔥 Sending swipe request: targetUserId=${targetUserId}, action=${action}`);
  
  await axios.post(`${API_BASE_URL}/swipe/${targetUserId}?action=${action}`, {}, {
    headers: { Authorization: `Bearer ${token}` },
  });
  
  console.log('🔥 Swipe completed successfully');
};

// Прийняти запит на дружбу (передаємо swipeId)
export const acceptSwipe = async (swipeId: number): Promise<void> => {
  const token = getAuthToken();
  console.log(`🔥 Accepting friend request with swipeId ${swipeId}`);
  
  await axios.post(`${API_BASE_URL}/accept/${swipeId}`, {}, {
    headers: { Authorization: `Bearer ${token}` },
  });
  
  console.log('🔥 Friend request accepted');
};

// Отримати користувачів які лайкнули мене
export const getWhoLikedMe = async (): Promise<UserSwipeDto[]> => {
  const token = getAuthToken();
  console.log('🔥 Fetching who liked me...');
  
  const { data } = await axios.get(`${API_BASE_URL}/who-liked-me`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  
  console.log('🔥 Who liked me data:', data);
  return data; // Бекенд повертає масив UserSwipeDto
};

// Отримати топ користувачів
export const getTopUsers = async (): Promise<TopUser[]> => {
  const token = getAuthToken();
  console.log('🔥 Fetching top users...');
  
  const { data } = await axios.get(`${API_BASE_URL}/top-users`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  
  console.log('🔥 Top users data:', data);
  return data; // Бекенд повертає масив User
};

// Отримати користувачів для свайпу
export const fetchUsersForSwipe = async (): Promise<FriendDto[]> => {
  const token = getAuthToken();
  console.log('🔥 Fetching swipe users...');
  
  const { data } = await axios.get(`${API_BASE_URL}/search`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  
  console.log('🔥 Swipe users fetched:', data);
  return data; // Бекенд повертає масив FriendDto
};

// Отримати моїх друзів
export const getMyFriends = async (): Promise<FriendDto[]> => {
  const token = getAuthToken();
  console.log('🔥 Fetching my friends...');
  
  const { data } = await axios.get(`${API_BASE_URL}/my-friends`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  
  console.log('🔥 My friends data:', data);
  return data; // Бекенд повертає масив FriendDto
};

// Видалити друга
export const removeFriend = async (friendId: number): Promise<void> => {
  const token = getAuthToken();
  console.log(`🔥 Removing friend with ID ${friendId}`);
  
  await axios.delete(`${API_BASE_URL}/remove/${friendId}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  
  console.log('🔥 Friend removed successfully');
};
// Отримати користувачів, яких я лайкнув
export const getILikedUsers = async (): Promise<UserSwipeDto[]> => {
  const token = getAuthToken();
  console.log('🔥 Fetching users I liked...');
  
  const { data } = await axios.get(`${API_BASE_URL}/swipe`, {
    headers: { Authorization: `Bearer ${token}` },
    params: { liked: true }
  });
  
  console.log('🔥 Users I liked:', data);
  // Перевіряємо структуру відповіді і трансформуємо дані при необхідності
  return Array.isArray(data) ? data : data.users || [];
};
// Видалити лайк
export const removeLike = async (swipeId: number): Promise<void> => {
  const token = getAuthToken();
  console.log(`🔥 Removing like with swipeId ${swipeId}`);

  await axios.delete(`${API_BASE_URL}/remove/swipe/${swipeId}`, {
    headers: { Authorization: `Bearer ${token}` },
  });

  console.log('🔥 Like removed successfully');
};
