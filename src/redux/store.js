import { configureStore } from "@reduxjs/toolkit";
import albumReducer from "./album/albumSlice";

const store = configureStore({
    reducer: {
        // todo: ajouter les futurs reducers ici

        albums: albumReducer
    },
});

export default store