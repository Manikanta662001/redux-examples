import { DECREMENT, INCREMENT, RESET ,INCREMENTBYAMOUNT, BUYCAKE, FETCH_USERS_REQUEST, FETCH_USERS_SUCCESS, FETCH_USERS_FAILURE} from "./ActionType"

export const IncrementAction = ()=>{
    return {type :INCREMENT}
}
export const DecrementAction = ()=>{
    return {type :DECREMENT}
}
export const ResetAction = ()=>{
    return {type :RESET}
}
export const incrementByAmount = (val)=>{
    return {type :INCREMENTBYAMOUNT,payload:val}
}
export const Buycake =()=>{
    return {type:BUYCAKE}
}
export const fetchUsersRequest =()=>{
    return {type:FETCH_USERS_REQUEST}
}
export const fetchUsersSuccess =(data)=>{
    return {type:FETCH_USERS_SUCCESS,payload:data}
}
export const fetchUsersFailure =(error)=>{
    return {type:FETCH_USERS_FAILURE,payload:error}
}

