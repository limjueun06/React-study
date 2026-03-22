import { createRoot } from 'react-dom/client'
import './index.css'
import {Route, Routes, BrowserRouter} from 'react-router-dom'
import Home from './example/Home'
import Join from './example/Join'
import Login from './example/Login'

createRoot(document.getElementById('root')).render(
<div>
  <BrowserRouter>
    <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/join' element={<Join></Join>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
    </Routes>
  </BrowserRouter>
</div>
)
