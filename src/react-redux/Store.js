import {configureStore,getDefaultMiddleware} from '@reduxjs/toolkit'
import {combineReducers} from 'redux'
import { Reducer } from './Reducer';
import {usersReducer} from './usersReducer';
import Cakereducer from './Cakereducer';
import thunkMiddleware from 'redux-thunk';


const rootReducer = combineReducers({
    counter : Reducer,
    cakes:Cakereducer,
    usersReducer
})
const Store = configureStore({
   reducer:rootReducer,
   middleware:[
    //this is default middleware
    // ...getDefaultMiddleware(),
    thunkMiddleware
],
   devTools:process.env.NODE_ENV !== 'production',
})
export default Store;
