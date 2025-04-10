import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getUsersAsync = createAsyncThunk(
  "users/getUsersAsync",
  async () => {
    const resp = await fetch("https://jsonplaceholder.typicode.com/users");
    return resp.json();
  }
);

export const getUserByIdAsync = createAsyncThunk(
  "users/getUserByIdAsync",
  async (id) => {
    const resp = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
    return resp.json();
  }
);

const usersSlice = createSlice({
  name: "users",
  initialState: {
    loading: false,
    list: [],
    detail: null,  
  },
  extraReducers: (builder) => {
    builder.addCase(getUsersAsync.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getUsersAsync.fulfilled, (state, action) => {
      state.list = action.payload;
      state.loading = false;
    });
    builder.addCase(getUsersAsync.rejected, (state) => {
      state.loading = false;
    });

    // Обработчик для загрузки одного пользователя
    builder.addCase(getUserByIdAsync.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getUserByIdAsync.fulfilled, (state, action) => {
      state.detail = action.payload;
      state.loading = false;
    });
    builder.addCase(getUserByIdAsync.rejected, (state) => {
      state.loading = false;
    });
  },
});

export default usersSlice.reducer;
