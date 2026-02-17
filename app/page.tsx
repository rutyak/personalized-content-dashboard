"use client";

import Dashboard from "../components/layout/Dashboard";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "../redux/store";
import { ThemeProvider } from "../context/Theme";

export default function Home() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ThemeProvider>
          <Dashboard />
        </ThemeProvider>
      </PersistGate>
    </Provider>
  );
}
