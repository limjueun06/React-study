import React, {useState} from 'react'

const Ex01 = () => {

    // state : 컴포넌트 내부에서 관리되는 변경이 가능한 데이터
    //      ** 변수와의 차이점?
    //         state는 일반 변수와 달리 값이 변하면 화면이 바로 렌더링

    // case 1) 변수
    let num1 = 0

    // case 2) state
    // 2-1. import {useState} from 'react'
    // 2-2. state 선언
    const [num2, setNum2] = useState(0)
    // 2-3. state 사용
    //      setState이름('바꿀값')

    const ck = ()=>{
        console.log('(+)버튼 클릭!')
        num1 ++
        console.log('num1', num1)
        // 변수의 값은 변하지만 화면에 반영되지 않음
        setNum2(num2+1)
    }

    const ck_m = ()=>{
        setNum2(num2-1)
    }

  return (
    <div>
        <p>Count : {num2}</p>
        <button onClick={ck}>+1</button>
        <button onClick={ck_m}>-1</button>
    </div>
  )
}

export default Ex01