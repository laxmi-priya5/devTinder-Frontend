import { createSlice } from "@reduxjs/toolkit";

const connectionRequestSlice = createSlice({
    name:"connectionRequest",
    initialState:null,
    reducers:{
        addRequest:(state , action)=>{
            return action.payload;
        },
        removeRequest:(state,action)=>{
            return state.filter((item)=>item._id != action.payload)
        }
    }

})

export const {addRequest , removeRequest} = connectionRequestSlice.actions;
export default connectionRequestSlice.reducer;