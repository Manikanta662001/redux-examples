import {createSlice} from '@reduxjs/toolkit'
const initialState={val:12}
const counterSlice = createSlice({
    name:'counter',
    initialState,
    reducers:{
        increment : (state)=>{
            state.val+=1
        },
        decrement : (state)=>{
            if (state.val>0){
                state.val-=1
            }
        },
        reset : (state)=>{
            state.val=0
        },
        incrementByAmount : (state,action)=>{
            state.val+=action.payload
        }
    }
    
})


export default counterSlice.reducer

export const {increment,decrement,incrementByAmount,reset}=counterSlice.actions
