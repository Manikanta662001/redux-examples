import React,{useState} from 'react'
import {useDispatch,useSelector} from 'react-redux'
import { Buycake, DecrementAction, IncrementAction, ResetAction,incrementByAmount } from './Actions';
import { Asyncoperation } from './Asyncoperation';
export const Counter = () => {
    const dispatch = useDispatch();
    const state=useSelector((state)=>console.log(state,"REDUXSTATE"))
    const countvalue = useSelector((state) => state.counter.val);
    const cakecount = useSelector((state)=>state.cakes.cakesval)
    const users = useSelector((state)=>state.usersReducer.users)

    const [incrementvalue,setincrementvalue] = useState('2')
  return (
    <div>
        {countvalue}<br/>
        <button onClick={()=>dispatch(IncrementAction())}>click +</button><br/>
        <button onClick={()=>dispatch(DecrementAction())}>click -</button><br/>
        <button onClick={()=>dispatch(ResetAction())}>click to reset</button><br/>

        <input type='text' value={incrementvalue} onChange={(e)=>setincrementvalue(e.target.value)}/>
        <button onClick={()=>dispatch(incrementByAmount(Number(incrementvalue)))}>Increment by value</button>

<br/>
{cakecount } cakes 
<button onClick={()=>dispatch(Buycake())}> Buy cake</button><br/>

<h1>{users.length}</h1>
<button onClick={()=>dispatch(Asyncoperation())}>Api call</button>

    </div>
  )
}