import React from 'react'

const TodoBox = ({ todo, onDelete}) => {
  return (
    <div>
      <div style={{ border: '3px double gray', padding: '3%'}}>
        <input type="checkbox"></input>
        <span>{todo}</span>
        <button onClick={onDelete}>삭제</button>
      </div>
    </div>
  )
}

export default TodoBox