
import React, {useState, useEffect} from 'react'

const Ex03 = () => {

    // 실습) 랜덤한 숫자를 맞추는 랜덤게임을 만들어보자.
    // 1. 우리에게 필요한 state들을 미리 선언 (랜덤한 숫자 ranNum, 내가 선택한 숫자 myNum)
    // 2. 버튼을 누르면 ranNum에는 1~3중 랜덤한 값이 세팅되도록 할것
    // 3.             myNum에는 내가 누른 그 숫자가 세팅되도록 할것 (참고 : e.target.innerText)
    // 4. 랜덤한 수와 내가 누른 숫자가 같다면 '정답입니다'를 출력하고,
    //    다르다면 '땡...'을 출력
    // ★ 주의사항! if문 사용하지 않고, 삼항연산자를 사용해서 return문 안에서 비교
    //      삼항연산자 코드 (React - project01 - src - App.jsx 참고!)

    // 20260319 useEffect기능 추가
    // 1. 정답을 맞힐때마다 정답횟수 1증가
    // 2. 정답횟수가 3이 된다면 알림창으로 '목표도달'출력

    const [ranNum, setRanNum] = useState(0)
    const [myNum, setMyNum] = useState(0)
    const [allCount, setAllCount] = useState(0)

    useEffect(()=>{
      if(allCount == 3){
        alert('목표도달!')
      }
    },[allCount])

    const gameStart = (e)=>{
        console.log('게임 시작!')

        const rancount = parseInt(Math.random()*3)+1
        const mycount = e.target.innerText

        console.log('랜덤 숫자', rancount)
        console.log('내가 누른 숫자는?', mycount)
        
        setRanNum(rancount)
        setMyNum(mycount)

        if(rancount == mycount){
           setAllCount(allCount+1)
        }

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

        <h3>
          정답 횟수 : {allCount}
        </h3>

    </div>
  )
}

export default Ex03