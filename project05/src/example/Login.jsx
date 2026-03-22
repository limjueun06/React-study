import React from 'react'
import { useRef } from 'react'
import {useNavigate} from 'react-router-dom'

import {useSearchParams} from 'react-router-dom'


// 로그인 버튼을 눌렀을때 Home 페이지로 이동
// ID : smhrd, PW : 123 일 때만 페이지로 이동!
// 두개의 값 중 하나라도 다르다면 알림창 '아이디 비밀번호 다시입력' 출력

const Login = () => {
 
  // 사용자 입력값
  const inputIdRef = useRef();
  const inputPwRef = useRef();
  const nav = useNavigate();

  // 주소(쿼리스트링)에서 가져온값
  const [query, setquery] = useSearchParams();
  const qId = query.get('id')
  const qPw = query.get('pw')
  const qNick = query.get('nick')

  // 사용자 입력값과 넘어온값이 일치하면 메인페이지로 이동하게
  const tryLogin = ()=>{
    let inputId = inputIdRef.current.value
    let inputPw = inputPwRef.current.value

    if( inputId == qId && inputPw == qPw ){
        nav(`/?nick=${qNick}`)
    } else {
      alert('아이디 비밀번호 다시입력!')
    }
  }


  return (
    <div>
        <h1>즐거운 React수업</h1>
        <h2>로그인 페이지 입니다.</h2>
        ID : <input ref={inputIdRef} ></input><br></br>
        PW : <input ref={inputPwRef}></input><br></br>
        <button onClick={tryLogin}>로그인</button>
    </div>
  )
}

export default Login