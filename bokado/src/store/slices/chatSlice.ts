  import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
  import type { PayloadAction } from '@reduxjs/toolkit';
  import type { ChatState, Chat, Message } from '../../types/chat';
  import { getChats, createChat, getUsers } from '../../api/chat';

  const initialState: ChatState = {
    chats: [],
    currentChat: null,
    messages: [],
    loading: false,
    error: null,
    onlineUsers: [],
    typingUsers: {},
  };


  // Async actions
  export const fetchChats = createAsyncThunk('chat/fetchChats', async () => {
    return await getChats();
  });

  export const fetchUsers = createAsyncThunk('chat/fetchUsers', async () => {
    return await getUsers();
  });

  export const createNewChat = createAsyncThunk(
    'chat/createNewChat',
    async (withUserId: number, { rejectWithValue }) => {
      try {
        const chat = await createChat(withUserId);
        return chat;
      } catch (error: any) {
        return rejectWithValue(error.message);
      }
    }
  );

  const chatSlice = createSlice({
    name: 'chat',
    initialState,
    reducers: {
      setCurrentChat(state, action: PayloadAction<Chat | null>) {
        state.currentChat = action.payload;
      },
      setMessages(state, action: PayloadAction<Message[]>) {
        state.messages = action.payload;
      },
      markChatAsRead(state, action: PayloadAction<number>) {
        const chatId = action.payload;
        const chat = state.chats.find(c => c.chatId === chatId);
        if (chat) {
          chat.unreadCount = 0;
          if (chat.lastMessage) {
            chat.lastMessage.isRead = true;
          }
        }
      },
    },
    extraReducers: (builder) => {
      builder
        .addCase(fetchChats.pending, (state) => {
          state.loading = true;
          state.error = null;
        })
        .addCase(fetchChats.fulfilled, (state, action: PayloadAction<Chat[]>) => {
          state.loading = false;
          state.chats = action.payload;
        })
        .addCase(fetchChats.rejected, (state, action) => {
          state.loading = false;
          state.error = action.error.message || 'Failed to load chats';
        })
        .addCase(createNewChat.fulfilled, (state, action: PayloadAction<Chat>) => {
          state.chats.push(action.payload);
        });
    },
  });

  export const { setCurrentChat, setMessages, markChatAsRead } = chatSlice.actions;
  export default chatSlice.reducer;
