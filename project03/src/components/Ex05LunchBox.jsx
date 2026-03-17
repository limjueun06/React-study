import React from 'react'

const Ex05LunchBox = ({menu}) => {
  return (
      <div style={{border : '2px solid skyblue', padding : '2%', borderRadius : '10px'}}>
        <p>
          <input type='checkbox'></input>{menu}
        </p>
      </div>
  )
}

export default Ex05LunchBox