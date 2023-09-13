import { DECREMENT, INCREMENT, RESET ,INCREMENTBYAMOUNT, BUYCAKE} from "./ActionType"

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
