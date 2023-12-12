import {configureStore} from '@reduxjs/toolkit'
import Counterreducer from './counterSlice'
import cakereducer from './cakeSlice'
const store =configureStore({
    reducer:{
        counter:Counterreducer,
        cakecount:cakereducer

    }
})
export default store

