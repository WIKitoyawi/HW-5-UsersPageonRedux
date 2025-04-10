import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchUsersAsync = createAsyncThunk("users/fetchUsers", async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  return response.json();
});

export const fetchUserByIdAsync = createAsyncThunk(
  "users/fetchUserById",
  async (id) => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
    return response.json();
  }
);
