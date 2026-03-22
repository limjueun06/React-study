import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
        <h1>HOME 페이지 입니다!</h1>
        <ul>
          <li>
            {/* 주소값을 바꾸면서 페이지도 새로고침
                페이지가 새로고침하면서 이동 */}
            <a href='/about?data=A'>About 이동</a>
          </li>
          <li>
            {/* 비동기 통신으로 주소변경 (컴포넌트만 교체)
                새로고침없이 새로운 컴포넌트를 보여준다. */}
            <Link to='/about?data=Link'>About 이동2</Link>
          </li>
        </ul>
    </div>
  )
}

export default Home