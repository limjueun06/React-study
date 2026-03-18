import React, { useState } from 'react'

const Ex07 = () => {

  const [num, setNum] = useState(0)

  const addNum = () => {
  
    setNum(num + 1)

    if (num == 10) {
      alert('목표숫자도달!')
    }
  }

  return (
    <div>
      <h1>{num}</h1>

      <button onClick={addNum}>PLUS</button>
    </div>
  )
}

export default Ex07
