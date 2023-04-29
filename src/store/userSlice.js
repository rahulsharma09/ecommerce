import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: 'user',
    initialState: {
        data:[],
        profilePic: ""
    },
    reducers:{
        setUserProfile(state, action){
            state.data.push(action.payload)
        }
    }
});

export const {setUserProfile} = userSlice.actions;
export default userSlice.reducer;