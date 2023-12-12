import { FETCH_USERS_FAILURE, FETCH_USERS_REQUEST, FETCH_USERS_SUCCESS } from "./ActionType"

const initialstate={
    users:[],
    isLoading:false,
    error:''
}

const usersReducer=(state=initialstate,action)=>{
    switch(action.type){
        case FETCH_USERS_REQUEST:
            return {...state,isLoading:true}
        case FETCH_USERS_SUCCESS:
            return {...state,isLoading:false,users:action.payload}
        case FETCH_USERS_FAILURE:
            return {...state,isLoading:false,error:action.payload}
        default:
            return state
    }
}
export {usersReducer}