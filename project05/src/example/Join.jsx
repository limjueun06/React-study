import React from 'react'
import { useRef } from 'react'

import {useNavigate} from 'react-router-dom'
// useNavigate : 주소값을 바꿔주는 기능

import axios from 'axios'


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
    // nav(`/login?id=${inputId}&pw=${inputPw}&nick=${inputNick}`)

    // axios 사용해서 Node서버로 접근
    axios({
      // get 방식으로 데이터 전송
      // url : `http://localhost:3001/join?id=${inputId}&pw=${inputPw}&nick=${inputNick}`
      
      // post 방식으로 데이터 전송
      url : 'http://localhost:3001/join',
      method : 'post',

      data:{
        id : inputId,
        pw : inputPw,
        nick : inputNick
      }
    })
    .then((res)=>{
      // res : 통신성공시 응답받은 데이터
      console.log(res)

      // 회원가입 성공 했다면
      if(res.data == 1){
        // 로그인 페이지로 이동
        nav('/login')
      } else {
        alert('회원가입실패')
      }
      console.log('Node서버 통신완료')
    })
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