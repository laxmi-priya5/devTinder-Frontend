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
    <Route path="/" element={<Body/>}>
  <Route
    index
    element={
      <ProtectedRoute>
        <Feed />
      </ProtectedRoute>
    }
  />
  <Route path="login" element={<Login />} />
  <Route path="profile" element={<ProtectedRoute><Profile /></ProtectedRoute>} />
  <Route path="connections" element={<ProtectedRoute><Connections /></ProtectedRoute>} />
  <Route path="request" element={<ProtectedRoute><Request /></ProtectedRoute>} />
</Route>
  </Routes>
</BrowserRouter>


     {/* <Navbar/>
     <h1 className='text-3xl font-bold text-blue-600'>Hello DevTinder</h1> */}
    </>
  )
}

export default App
