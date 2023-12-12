import {call, put, take, takeEvery} from 'redux-saga/effects'
import { GET_USERS_FAILURE, GET_USERS_FETCH, GET_USERS_SUCCESS } from './ActionTypes'
// eslint-disable-next-line
import axios from 'axios'
async function Userfetch(){
    return fetch('https://jsonplaceholder.typicode.com/users')
    .then((resp)=>{
        //console.log(resp.json(),"DATA")
        return resp.json()
    })
    
//     return axios.get('https://jsonplaceholder.typicode.com/users').then((res) => {
//         return res.data;
//  })
    .catch((err)=>{
        console.log(err,'ERROR')
        throw err
    })
}

function* getUsersFetch(){
    try{
        const users = yield call(Userfetch);//call() method is used to call a function

        yield put({type:GET_USERS_SUCCESS,users})//put() is just like dispatch() actions to store
    }
    catch(error){
        yield put({type:GET_USERS_FAILURE,error})
    }
}

function* mySaga(){
    while(true){
        yield take(GET_USERS_FETCH)
        yield call(getUsersFetch)
        //yield takeEvery(GET_USERS_FETCH,getUsersFetch)
    }
}


export default mySaga