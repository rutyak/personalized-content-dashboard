"use client"; 

import Dashboard from "@/components/layout/Dashboard";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "@/redux/store";

export default function Home() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Dashboard />
      </PersistGate>
    </Provider>
  );
}