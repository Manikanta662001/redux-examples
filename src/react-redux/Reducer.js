import { DECREMENT, INCREMENT, INCREMENTBYAMOUNT, RESET } from "./ActionType"

const initialstate={val:20}
export const Reducer = (state = initialstate,action) => {
    switch(action.type){
        case INCREMENT:
            return {...state,val:state.val+1}
        case DECREMENT:
            return {...state,val:state.val-1}
        case RESET:
            return {...state,val:0}
        case INCREMENTBYAMOUNT:
            return {...state,val:state.val+action.payload}
        default :
            return state
        
    }
}