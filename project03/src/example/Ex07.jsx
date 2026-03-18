import React from 'react'
import {useState, useEffect} from 'react'
// useEffect : 함수형 컴포넌트에서 라이프사이클함수(componentDidMount, componentDidUpdate)를
// 사용 할 수 있는 기능
// useEffect : componentDidMount + componentDidUpdate 맨처음과 화면이 바뀌었을때 실행.

const Ex07 = () => {

    // setState 함수는 close 함수다!
    // -> 제일 마지막에 실행한다!!
    const [num, setNum] = useState(0)
    const [num2, setNum2] = useState(0)

    useEffect(()=>{
        console.log('effect')
        if (num == 10){
            alert('목표숫자도달!')
        }
    } , [num])

    const addNum = ()=>{
        // 출력하는 num의 값이 10에 도달하면
        // '목표숫자도달!' 알림창 출력
        let number = num+1 ;

        setNum(num+1)
    }

  return (
    <div>
        <h1>{num}</h1>
        <h1>{num2}</h1>

        <button onClick={addNum}>PLUS</button>
        <button onClick={()=>setNum2(num2+2)}>PLUS2</button>
    </div>
  )
}

export default Ex07