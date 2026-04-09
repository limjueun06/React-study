import './App.css'
import TodoBox from './components/TodoBox'
import { useState } from 'react'

function App() {
  const [inputValue, setInputValue] = useState('')
  const [review, setReview] = useState('')
  
  const clickButton = () => {
    setReview(inputValue)
  }

  return (
    <>
      <h2>Todo List</h2>
      <p>
        <input value={inputValue} onChange={(e)=>setInputValue(e.target.value)} placeholder='할 일을 입력하세요'></input>
        <button onClick={clickButton}>추가</button>
      </p>
    
      <br></br>
      
     
    </>
  )
}

export default App