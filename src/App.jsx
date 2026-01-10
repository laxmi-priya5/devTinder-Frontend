import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Body from './components/Body'
import Login from './components/Login'
import Profile from './components/Profile'
import Feed from './components/Feed'
import { BrowserRouter,Routes , Route } from 'react-router-dom'
import Connections from './components/Connections'
import Request from './components/Request'
function App() {


  return (
    <>
  
  <BrowserRouter basename='/'>
  <Routes>
    <Route path='/' element={<Body/>}>
      <Route path='/' element={<Feed/>}/>        // 👈 default child
      <Route path='/login' element={<Login/>}/>  // 👈 nested incorrectly
      <Route path='/profile' element={<Profile/>}/>
      <Route path='/connections' element={<Connections/>}/>
      <Route path='/request' element={<Request/>}/>
    </Route>
  </Routes>
</BrowserRouter>


     {/* <Navbar/>
     <h1 className='text-3xl font-bold text-blue-600'>Hello DevTinder</h1> */}
    </>
  )
}

export default App
