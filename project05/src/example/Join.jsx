import React from 'react'
import { useRef } from 'react'

import {useNavigate} from 'react-router-dom'
// useNavigate : 주소값을 바꿔주는 기능

const Join = () => {

  const idRef = useRef();
  const pwRef = useRef();
  const nickRef = useRef();

  // 주소값을 바꾸는 변수(nav) 생성
  const nav = useNavigate();
  
  const tryJoin = ()=>{

    // 사용자가 입력한 아이디,비번,닉네임 값 가져오기
    let inputId = idRef.current.value
    let inputPw = pwRef.current.value
    let inputNick = nickRef.current.value
    
    nav(`/login?id=${inputId}&pw=${inputPw}&nick=${inputNick}`)
  }


  return (
    <div>
        <h1>즐거운 React수업</h1>
        <h2>회원가입 페이지 입니다.</h2>
        <br></br>
        ID : <input ref={idRef}></input><br></br>
        PW : <input ref={pwRef}></input><br></br>
        NICK : <input ref={nickRef}></input>
        <br></br>
        <button onClick={tryJoin}>Join</button>
        <button>초기화</button>
    </div>
  )
}

export default Join