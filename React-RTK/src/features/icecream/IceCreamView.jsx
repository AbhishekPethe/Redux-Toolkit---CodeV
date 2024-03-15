import React, { useState } from 'react'
import { useSelector, useDispatch } from "react-redux"
import { ordered , restocked } from './icecreamSlice'


const IceCreamView = () => {
    const numOfIceCream = useSelector((state) => state.icecream.numOfIceCream)
    const dispatch = useDispatch()

    const [value, setValue] = useState(1)

  return (
      <div>
          <p>
              No of IceCream : {numOfIceCream}
          </p>
          <button onClick={() => dispatch(ordered())}>order icecream</button>
          <input type="number" value={value} onChange={(e)=>setValue(parseInt(e.target.value))} />
          <button onClick={() => dispatch(restocked(value))}>restock</button>
      </div>
  )
}

export default IceCreamView