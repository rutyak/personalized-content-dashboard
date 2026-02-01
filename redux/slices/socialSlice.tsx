import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

interface SocialPost {
  id: number;
  user: string;
  content: string;
  likes: number;
}

interface SocialState {
  posts: SocialPost[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
}

const initialState: SocialState = {
  posts: [],
  status: 'idle',
};

export const fetchSocialPosts = createAsyncThunk(
  'social/fetchPosts',
  async (hashtag: string) => {
    const mockData: SocialPost[] = [
      { id: 1, user: 'DevUser', content: `Check out #${hashtag}!`, likes: 120 },
      { id: 2, user: 'TechDaily', content: `Learning Redux with #${hashtag}`, likes: 85 },
      { id: 3, user: 'CodeMaster', content: `Top 10 tips for #${hashtag}`, likes: 450 },
      { id: 4, user: 'FrontendFan', content: `Is #${hashtag} the future?`, likes: 230 },
      { id: 5, user: 'JSGuru', content: `Deep dive into #${hashtag} logic`, likes: 610 },
      { id: 6, user: 'UI_UX_Design', content: `Beautiful layouts using #${hashtag}`, likes: 195 },
      { id: 7, user: 'ReactRacer', content: `Speeding up your #${hashtag} workflow`, likes: 320 },
      { id: 8, user: 'DataViz', content: `Visualizing data with #${hashtag}`, likes: 115 },
      { id: 9, user: 'CloudNative', content: `Scaling #${hashtag} in the cloud`, likes: 275 },
      { id: 10, user: 'OpenSourceAdvocate', content: `Contributing to #${hashtag} projects`, likes: 540 },
    ];
    
    return new Promise<SocialPost[]>((resolve) => 
      setTimeout(() => resolve(mockData), 500)
    );
  }
);

const socialSlice = createSlice({
  name: 'social',
  initialState,
  reducers: {
    reorderPosts: (state, action: PayloadAction<SocialPost[]>) => {
      state.posts = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchSocialPosts.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchSocialPosts.fulfilled, (state, action) => {
        state.posts = action.payload;
        state.status = 'succeeded';
      })
      .addCase(fetchSocialPosts.rejected, (state) => {
        state.status = 'failed';
      });
  },
});

export const { reorderPosts } = socialSlice.actions;
export default socialSlice.reducer;