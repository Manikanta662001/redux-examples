import { GET_USERS_FAILURE, GET_USERS_SUCCESS } from "./ActionTypes"


const initialState = {}
const myReducer = (state = initialState,action) =>{
    switch(action.type){
        case GET_USERS_SUCCESS:
            return {...state, users : action.users}
        case GET_USERS_FAILURE:
            return {...state, error : action.error}
        default:
            return state
    }

}

export default myReducer