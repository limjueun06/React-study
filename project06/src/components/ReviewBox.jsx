import React from 'react'

const ReviewBox = (props) => {
  return (
    <div>
        <div style={{border:'3px double gray', padding: '3%', borderRadius:'10px'}}>
            <p>{props.review}</p>
        </div>
    </div>
  )
}

export default ReviewBox