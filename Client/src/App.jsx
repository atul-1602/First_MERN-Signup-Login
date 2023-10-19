import 'bootstrap/dist/css/bootstrap.min.css'
import Login from './Login'
import Signup from './Signup'
import Home from './Home'
import {BrowserRouter  , Routes, Route } from 'react-router-dom'

function App() {

  return (
    
    <BrowserRouter>
      <Routes>
      <Route path='/home' element={<Home/>}/>
        <Route path='/' element={<Signup/>}/>
        <Route path='/login' element={<Login/>}/>
      </Routes>
    </BrowserRouter>
  
    
  )
}

export default App
