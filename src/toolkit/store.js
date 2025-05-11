import { configureStore } from "@reduxjs/toolkit";
import ProdSlice from "./ProdSlice/prodSlice";
import prodApi from "./ProdSlice/prodApi";

export const store = configureStore({
    reducer: {
        ProdSlice: ProdSlice,
        [prodApi.reducerPath]: prodApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(prodApi.middleware),
});