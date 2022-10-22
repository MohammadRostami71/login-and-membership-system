import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    firstName: '',
    email: '',
}

export const userData = createSlice({
    name: 'userDataSlice',
    initialState,
    reducers: {
        submitUserData: (state, action) => {
            state.firstName = action.payload.firstName;
            state.email = action.payload.email;
            localStorage.setItem('firstName', action.payload.firstName);
            localStorage.setItem('email', action.payload.email);
        }
    }
});

export const {submitUserData} = userData.actions

export default userData.reducer