
    // 선생님 코드
    // 20260319 useEffect기능 추가
    // 1. 정답을 맞힐때마다 정답횟수 1증가
    // 2. 정답횟수가 3이 된다면 알림창으로 '목표도달'출력

import React, {useEffect, useState} from 'react'

const Ex03 = () => {

    const [ranNum, setRanNum] = useState(0)
    const [myNum, setMyNum] = useState(0)
    const [score, setScore] = useState(0)

    useEffect(()=>{
      if(ranNum == myNum && (myNum != 0 || ranNum != 0) ){
        setScore(score+1)
      }
    }, [ranNum, myNum])

    useEffect(()=>{
      if(score == 3){
        alert('목표도달!')
      }
    }, [score])

    const gameStart = (e)=>{
        console.log('게임 시작!')
        console.log('랜덤 숫자', parseInt(Math.random()*3)+1)
        console.log('내가 누른 숫자는?', e.target.innerText)

        setRanNum(parseInt(Math.random()*3)+1)
        setMyNum(e.target.innerText)
    }

  return (
    <div>
        <h3>랜덤게임</h3>
        <button onClick={gameStart}>1</button>
        <button onClick={gameStart}>2</button>
        <button onClick={gameStart}>3</button>
        <hr></hr>
        <p>내가 입력한 숫자 : {myNum}</p>
        <p>컴퓨터가 입력한 숫자 : {ranNum}</p>
        {ranNum === Number(myNum) ? <h3>정답입니다~!!</h3> : <h3>땡!</h3>}

        <h3>{score}</h3>

    </div>
  )
}

export default Ex03