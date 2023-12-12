import { BUYCAKE } from "./ActionType"

const initialstate ={cakesval : 33}
const Cakereducer = (state=initialstate,action)=>{
    switch(action.type){
        case BUYCAKE:
            return {cakesval:state.cakesval-1}
        default:
            return state
    }

}
export default Cakereducer