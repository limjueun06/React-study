import React from 'react'

const Ex04Box = ({name, dice}) => {
  return (
    <div>
        <h3>{name}</h3>
        <img src={`/img/dice${dice}.png`}></img>
    </div>
  )
}

export default Ex04Box