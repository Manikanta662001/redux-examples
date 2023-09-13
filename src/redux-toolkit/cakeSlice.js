import {createSlice} from '@reduxjs/toolkit'


const initialState = {cakes : 33}
const cakeSlice =createSlice({
    name:'cakecount',
    initialState,
    reducers:{
        buycake : (state)=>{
            state.cakes-=1
        }
    }


})
export default cakeSlice.reducer
export const {buycake} =cakeSlice.actions