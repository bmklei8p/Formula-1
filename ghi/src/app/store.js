import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from "@reduxjs/toolkit/query";
import { yelpApi } from "./yelpAPI";


export const store = configureStore({
  reducer: {
    [yelpApi.reducerPath]: yelpApi.reducer, // just to get rid of no reducer- remove when you have a valid reducer for your file
  },
});


setupListeners(store.dispatch);