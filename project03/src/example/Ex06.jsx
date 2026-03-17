import React from 'react'

const Ex06 = () => {
    // filter 함수 : 자바스크립트 배열의 내장함수
    //              주어진 함수의 테스트를 통과하는 요소를 모아서
    //              true면 유지, false면 버리고 새로운 배열로 반환
    //              (기존배열에는 영향을 미치지 않는다.)

    let numList = [1,2,3,4,5]
    let oddList = numList.filter(item => item%2 === 1)
    console.log('oddList', oddList)

    let oddList2 = numList.map(item => item%2 === 1)
    console.log('oddList', oddList2)

    let students = [
        {name : '신형만', age : 35, bloodType : 'A'},
        {name : '봉미선', age : 30, bloodType : 'B'},
        {name : '짱구', age : 5, bloodType : 'AB'},
        {name : '짱아', age : 2, bloodType : 'O'},
        {name : '흰둥이', age : 1, bloodType : 'A'}
    ]

    // Q. students 배열에서 나이가 10살보다 많은 사람들만 표로 출력
    // filter -> map 
   let adult = students.filter(item => item.age > 19)
   console.log('adult', adult)

   
    // 예제) students 배열에서 혈액형이 2개이상인 사람들만 모아서 표로 만들어보자
    //       표 디자인은 자유롭게
    let aType = students.filter(item => item.bloodType === 'A')
    console.log('A형은', aType)


  return (
    <div>
        <h3>아래목록 인원은 음주와 흡연이 가능합니다.</h3>
        {adult.map(item => <p key={item.name}>{item.name}</p>)}
        
        <hr></hr>
        
        <table border={1}>
        <tbody>
            <tr>
                <th>이름</th>
                <th>혈액형</th>
            </tr>

            {aType.map(item => <tr key={item.name}>
                <td>{item.name}</td>
                <td>{item.bloodType}</td>
            </tr>)}

        </tbody>
        </table>
    </div>
  )
}

export default Ex06

