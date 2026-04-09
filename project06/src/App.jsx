import './App.css'
import ReviewBox from './components/ReviewBox'
import { useState } from 'react'

function App() {
  const [inputValue, setInputValue] = useState('')
  const [reviews, setReviews] = useState([])
  
  const clickButton = () => {
    if(inputValue.trim() !== ''){
      setReviews([...reviews, inputValue])
      setInputValue('')
    }
  }

  return (
    <>
      <h2>댓글 입력창</h2>
      <p>
        <input value={inputValue} onChange={(e)=>setInputValue(e.target.value)}></input>
        <button onClick={clickButton}>작성</button>
      </p>
    
      <br></br>


      <div style={{ borderTop: '2px dashed gray', paddingTop: '10px' }}>
        <h5 style={{textAlign:'left'}}>댓글</h5>
      </div>
      {reviews.map((review, index) => (
        <ReviewBox key={index} review={review}></ReviewBox>
      ))}
    </>
  )
}

export default App