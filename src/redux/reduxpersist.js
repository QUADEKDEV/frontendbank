// src/redux/store.js
import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // localStorage
import { combineReducers } from "redux";
import authReducer from "./appSlice";

// 1. Combine reducers
const rootReducer = combineReducers({
  auth: authReducer,
});

// 2. Persist config
const persistConfig = {
  key: "root",
  storage,
};

// 3. Persisted reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// 4. Configure store
export const store = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(store);
