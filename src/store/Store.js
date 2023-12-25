import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './Cartslce'
import searchReducer from './SearchSlice';
import sortReducer from './SortSlice'; 

const store = configureStore({
    reducer: {
        cart: cartReducer,
        search: searchReducer,
        sort: sortReducer,
    },
})

export default store;