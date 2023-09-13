import { DECREMENT, INCREMENT, INCREMENTBYAMOUNT, RESET } from "./ActionType"

const initialstate={val:20}
export const Reducer = (state = initialstate,action) => {
    switch(action.type){
        case INCREMENT:
            return {val:state.val+1}
        case DECREMENT:
            return {val:state.val-1}
        case RESET:
            return {val:0}
        case INCREMENTBYAMOUNT:
            return {val:state.val+action.payload}
        default :
            return state
        
    }
}
