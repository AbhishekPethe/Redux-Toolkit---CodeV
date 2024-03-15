import React from 'react'
import { useSelector , useDispatch } from "react-redux"
import { ordered , restocked } from './cakeSlice'


const CakeView = () => {
    const numOfCakes = useSelector((state) => state.cake.numOfCakes)
    const dispatch = useDispatch()
    return (
      <div>
          <p>
          No of cakes : {numOfCakes}
          </p>
          <button onClick={()=>dispatch(ordered())} >order cake</button>
          <button onClick={()=>dispatch(restocked(20))}>restock</button>
      </div>
  )
}

export default CakeView