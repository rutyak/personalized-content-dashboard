import { configureStore, combineReducers } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import newsReducer from "./slices/newsSlice";
import movieReducer from "./slices/movieSlice";
import socialReducer from "./slices/socialSlice";
import favoritesReducer from "./slices/favoritesSlice";

// 1. Combine all your reducers
const rootReducer = combineReducers({
  news: newsReducer,
  movies: movieReducer,
  social: socialReducer,
  favorites: favoritesReducer
});

// 2. Configure persistence
const persistConfig = {
  key: "root",
  version: 1,
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
