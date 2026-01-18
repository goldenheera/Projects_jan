import { useState } from 'react'
import Login from '../pages/Login'
import { BrowserRouter, Route } from 'react-router-dom'
import { Routes } from 'react-router-dom'
import Dashbord from '../pages/Dashbord'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element = { <Login /> }/>
      <Route path='/dashbord' element = { <Dashbord />} />
    </Routes>
    </BrowserRouter>

     
    </>
  )
}

export default App
