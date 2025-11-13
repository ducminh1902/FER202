import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// 🟢 Async thunk: gọi API lấy danh sách user
export const fetchUsers = createAsyncThunk(
  'users/fetchUsers',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/api/users'); // API giả định
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response?.data || 'Lỗi không xác định');
    }
  }
);

// 🟡 State khởi tạo
const initialState = {
  list: [],
  isLoading: false,
  error: null,
};

// 🔵 Slice chính
const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    // reducer đồng bộ: toggle quyền admin
    toggleAdminStatus: (state, action) => {
      const userId = action.payload;
      const user = state.list.find((u) => u.id === userId);
      if (user) {
        user.isAdmin = !user.isAdmin;
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.isLoading = false;
        state.list = action.payload;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { toggleAdminStatus } = usersSlice.actions;
export default usersSlice.reducer;
