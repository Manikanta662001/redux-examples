import React,{useState} from 'react'
import {useDispatch,useSelector} from 'react-redux'
import { Buycake, DecrementAction, IncrementAction, ResetAction,incrementByAmount } from './Actions';
export const Counter = () => {
    const dispatch = useDispatch();
    const state = useSelector((state) => state.counter.val);
    const cakecount = useSelector((state)=>state.cakes.cakesval)

    const [incrementvalue,setincrementvalue] = useState('2')
  return (
    <div>
        {state}<br/>
        <button onClick={()=>dispatch(IncrementAction())}>click +</button><br/>
        <button onClick={()=>dispatch(DecrementAction())}>click -</button><br/>
        <button onClick={()=>dispatch(ResetAction())}>click to reset</button><br/>

        <input type='text' value={incrementvalue} onChange={(e)=>setincrementvalue(e.target.value)}/>
        <button onClick={()=>dispatch(incrementByAmount(Number(incrementvalue)))}>Increment by value</button>

<br/>
{cakecount } cakes 
<button onClick={()=>dispatch(Buycake())}> Buy cake</button><br/>

    </div>
  )
}
