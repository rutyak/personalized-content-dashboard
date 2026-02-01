import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';

interface NewsArticle {
  title: string;
  description: string;
  urlToImage: string;
  publishedAt: string;
  source: { name: string };
  url: string;
}

interface NewsState {
  articles: NewsArticle[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

const initialState: NewsState = {
  articles: [],
  status: 'idle',
  error: null,
};

export const fetchNews = createAsyncThunk(
  'news/fetchNews',
  async (category: string) => {
    const API_KEY = process.env.NEXT_PUBLIC_NEWS_API_KEY;
    const response = await axios.get(
      `https://newsapi.org/v2/top-headlines?category=${category}&language=en&apiKey=${API_KEY}`
    );
    return response.data.articles;
  }
);

const newsSlice = createSlice({
  name: 'news',
  initialState,
  reducers: {
    clearNews: (state) => {
      state.articles = [];
      state.status = 'idle';
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchNews.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchNews.fulfilled, (state, action: PayloadAction<NewsArticle[]>) => {
        state.status = 'succeeded';
        state.articles = action.payload;
      })
      .addCase(fetchNews.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || 'Failed to fetch news';
      });
  },
});

export const { clearNews } = newsSlice.actions;
export default newsSlice.reducer;