import React from 'react'
import { useRef } from 'react'
import {useNavigate} from 'react-router-dom'

import {useSearchParams} from 'react-router-dom'
import axios from 'axios'


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


    // DB에 있는 회원 데이터와 비교해서 
    // 입력값과 DB에 있는값을 비교
    // -> 리액트에서 값을 노드로 보내고 노드에서 DB와 접근해 비교
    // 로그인 성공시 -> Home 이동 , 실패 -> 로그인 실패알림
    axios({
      // post 방식으로 데이터 전송
      url : 'http://localhost:3001/login',
      method : 'post',
      data:{
        id : inputId,
        pw : inputPw
      }
    })
    .then((res)=>{
      // res : 통신성공시 응답받은 데이터
      console.log(res)

      if(res.data == 1){
        nav('/')
      } else {
        alert('로그인실패')
      }

      console.log('Node서버 통신완료')
    })


    // 쿼리스트링으로 주소에서 받아온값과 입력값을 비교
    // if( inputId == qId && inputPw == qPw ){
    //     nav(`/?nick=${qNick}`)
    // } else {
    //   alert('아이디 비밀번호 다시입력!')
    // }
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