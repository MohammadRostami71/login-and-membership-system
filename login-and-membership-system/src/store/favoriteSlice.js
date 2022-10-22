import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    items: []
}


export const favoriteSlice = createSlice({
    name: 'favoriteSlice',
    initialState,
    reducers: {
        addToFav: (state, action) => {
            const newItem = action.payload;
            const existingItem = state.items.find(item => item.id === newItem.id);
            if (!existingItem) {
                state.items.push({
                    id: newItem.id,
                    title: newItem.title,
                    body: newItem.body,
                });
            }
        },
        removeFromFav: (state, action) => {
            const id = action.payload;
            state.items = state.items.filter(item => item.id !== id)
        }
    },
})

// Action creators are generated for each case reducer function
export const {addToFav, removeFromFav} = favoriteSlice.actions

export default favoriteSlice.reducer