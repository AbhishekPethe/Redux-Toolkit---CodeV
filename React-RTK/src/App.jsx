import { useState } from 'react'

import './App.css'
import CakeView from './features/cake/CakeView'
import IceCreamView from './features/icecream/IceCreamView'
import UsersView from './features/users/UsersView'

function App() {


  return (
    <>
      <CakeView />
      <IceCreamView />
      <UsersView />
    </>
  )
}

export default App
