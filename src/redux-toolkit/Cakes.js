import React from 'react'
import {useDispatch,useSelector} from 'react-redux'
import { buycake } from './cakeSlice'

const Cakes = () => {
    const cakes = useSelector((state)=>state.cakecount.cakes)
    const dispatch = useDispatch()
  return (
    <div>
        {cakes} cakes

        <button onClick={()=>dispatch(buycake())}>BUY A CAKE </button>

    </div>
  )
}
export default Cakes