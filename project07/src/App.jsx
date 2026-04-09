import './App.css'
import TodoBox from './components/TodoBox'
import { useState } from 'react'

function App() {
  const [inputValue, setInputValue] = useState('')
  const [review, setReview] = useState([])

  const clickButton = () => {
    if (inputValue.trim() !== '') {
      setReview([...review, inputValue])
      setInputValue('')
    }
  }

  const deleteTodo = (index) => {
    const newReview = review.filter((_, i) => i !== index)
    setReview(newReview)
  }

  return (
    <>
      <h2>Todo List</h2>

      <p>
        <input
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="할 일을 입력하세요"
        />
        <button onClick={clickButton}>추가</button>
      </p>

      <br />

      {review.map((item, index) => (
        <TodoBox key={index} todo={item} onDelete={()=>deleteTodo(index)}/>
      ))}
    </>
  )
}

export default App