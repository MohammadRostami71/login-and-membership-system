import {configureStore} from '@reduxjs/toolkit'
import favoriteSlice from "./favoriteSlice";
import userData from './formSlice'

export const store = () => configureStore({
    reducer: {
        favorite: favoriteSlice,
        userData: userData
    }
});
