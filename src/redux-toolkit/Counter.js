import React,{useState} from 'react'
import {useDispatch,useSelector} from 'react-redux'
import { increment,decrement,reset, incrementByAmount } from './counterSlice'
const Counter = () => {
    const count = useSelector((state)=>state.counter.val)
    console.log(count,"COUNT")
    const dispatch = useDispatch()

    const [incrementvalue,setincrementvalue] = useState('2')
  return (
    <div>
        <button onClick={()=>dispatch(increment())}>click +</button><br/>
        {count}<br/>
        <button onClick={()=>dispatch(decrement())}>click -</button><br/>
        <button onClick={()=>dispatch(reset())}>click to reset</button><br/>

        <input type='text' value={incrementvalue} onChange={(e)=>setincrementvalue(e.target.value)}/>
        <button onClick={()=>dispatch(incrementByAmount(Number(incrementvalue)))}>Increment by value</button>

    </div>
  )
}
export default Counter