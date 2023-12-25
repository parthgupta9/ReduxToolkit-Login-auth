import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    items: [],
    total: 0,
};

const Cartslce = createSlice({
    name:'cart',
    initialState,
    reducers: {
        add(state,action) {

            state.items.push(action.payload);
           
        },
        remove(state,action) {
            return {
                ...state,
               items: state.items.filter( item => item.id !==action.payload)};
        },
        // addSearchText : (state, action) => {
        //   state.SearchText = action.payload
        //       }
    }
})


export const {add,remove} = Cartslce.actions;
export default Cartslce.reducer;