import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    currentUser  : null, 
    error  : null, 
    loading  : false
}
export const userSlice  = createSlice({
    initialState,
    name:"user",
    reducers:{
        signInStart:(state)=>{
            state.loading =  true 
        },
        signInSuccess:(state,action)=>{
            state.loading =  false , 
            state.error = null, 
            state.currentUser = action.payload
        },
        signInFailure:(state,action)=>{
            state.loading =  false,
            state.error = action.payload
        }
    }
})

export const {signInStart,signInSuccess,signInFailure} = userSlice.actions

export default userSlice.reducer