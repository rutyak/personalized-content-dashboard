import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

interface Movie {
  id: number;
  name: string;
}

interface MovieState {
  movies: Movie[];
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}

const initialState: MovieState = {
  movies: [],
  status: "idle",
  error: null,
};

export const fetchMovies = createAsyncThunk(
  "movies/fetchMovies",
  async (genreId: string) => {
    const response = await axios.get(process.env.NEXT_PUBLIC_MOVIE_API_KEY!);
    return response.data.slice(0, 15);
  },
);

const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMovies.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchMovies.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.movies = action.payload;
      })
      .addCase(fetchMovies.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || "Something went wrong";
      });
  },
});

export default movieSlice.reducer;
