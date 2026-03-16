import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

// 1. useState의 개념
// import App from './example/Ex01'

// 2. useState 실습 (좋아요)
// import App from './example/Ex02'

// 3. useState 실습 (랜덤게임)
// import App from './example/Ex03'

// 4. useState 실습 (주사위게임)
import App from './example/Ex04'

createRoot(document.getElementById('root')).render(
    <App />
)
