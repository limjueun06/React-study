import React from 'react'
import { Link, useSearchParams } from 'react-router-dom'

const Home = () => {

    const [query, setQuery] = useSearchParams();

  return (
    <div>
        <h1>HOME 페이지 입니다.</h1>
        <h1>{query.get('nick')}</h1>
        <hr></hr>
        <ul>
            <li>
                <Link to='/login'>Login 이동</Link>
            </li>
            <li>
                <Link to='/join'>Join 이동</Link>
            </li>
        </ul>
    </div>
  )
}

export default Home