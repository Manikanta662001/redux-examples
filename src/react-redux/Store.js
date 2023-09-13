import {configureStore} from '@reduxjs/toolkit'
import { Reducer } from './Reducer';
import Cakereducer from './Cakereducer';

const Store = configureStore({
    reducer:{
        counter : Reducer,
        cakes:Cakereducer

    }
})
export default Store;
