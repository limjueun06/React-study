import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'

// Ex01 axios 개요
// import App from './example/Ex01.jsx'
// import App from './example/Ex01 copy.jsx'

// Ex02 axios useEffect 실습
 import App from './example/Ex02.jsx'

// Router 개요
import Home from './example/Home.jsx'
import About from './example/About.jsx'

// Router : 주소값에 따라서 다른 페이지를 출력하는 기능
import {Route, Routes, BrowserRouter} from 'react-router-dom'
// Route : 컴포넌트와 주소값을 대응하는 기능
// Routes : 주소값 관리


createRoot(document.getElementById('root')).render(
      <div>
        <BrowserRouter>
          <Routes>
              <Route path='/' element={<Home></Home>}></Route>
              <Route path='/about' element={<About></About>}></Route>
          </Routes>
        </BrowserRouter>
      </div>
)
