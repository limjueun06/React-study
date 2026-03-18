import React from 'react'
import Ex05Box from '../components/Ex05Box'
import Ex05LunchBox from '../components/Ex05LunchBox'


const Ex05 = () => {

    // map 함수? JS에 내장(설치없이사용O)되어있는 배열함수(배열을 대상으로)
    //          배열 안에서 내가 원하는 규칙(컴포넌트)에 따라 새로운 배열을 생성한다.
    // * 사용방법 : 배열이름.map(규칙콜백함수)

    let numList = [1,2,3,4,5]
    console.log('numList', numList)

    let doubledList = numList.map(item => item*2)
    console.log('doubledList', doubledList)

    let numText = numList.map(item => <button key={item}>{item}</button>)
    console.log('numText', numText)

    // 반복되는 컴포넌트 중, 고정되어야 하는 부분과 바뀔 부분을 인지
    //   - 바뀔 부분은 선생님들의 이름! => 배열화
    let trList = ['강규남', '선영표', '임다이', '채수민']
    let renderTr = trList.map(item => <Ex05Box key={item} tr={item}></Ex05Box>)
    // ============================================================================================


    // 실습 (점심메뉴 선택란 만들기)
    let menuList = ['짜장면', '짬뽕', '탕수육', '깐풍새우']
    let renderMenu = menuList.map(item => <Ex05LunchBox key={item} menu={item}></Ex05LunchBox>)
    // ============================================================================================


    // ★보통은 배열안에 객체가 들어있는 경우 map을 활용하기 좋다★
    let students = [
        {name : '신형만', age : 35, bloodType : 'A'},
        {name : '봉미선', age : 30, bloodType : 'B'},
        {name : '짱구', age : 5, bloodType : 'AB'},
        {name : '짱아', age : 2, bloodType : 'O'},
        {name : '흰둥이', age : 1, bloodType : 'A'}
    ]
    console.log('students', students)

    // 해당 배열안에 이름만 꺼내서 새로 배열로 만들어주고 싶다면?
    let nameList = students.map(item => item.name)
    console.log('nameList', nameList)


  return (
    <div>
        <p>numList {numList}</p>
        <p>numText {numText}</p>
        {renderTr}

        <hr></hr>
        <hr></hr>

        <h3>오늘의 점심메뉴~!!</h3>
        {renderMenu}

        <hr></hr>
        <hr></hr>
        <br></br>

        <table border={1}>
            <tbody>
            <tr bgcolor='pink'>
                <th>이름</th>
                <th>나이</th>
                <th>혈액형</th>
            </tr>

            {/* 반복되는 내용을 map함수로 렌더링 */}
            {students.map(item =>
                <tr key={item.name}>
                    <td>{item.name}</td>
                    <td>{item.age}</td>
                    <td>{item.bloodType}</td>
                </tr>
            )}
            </tbody>
        </table>


    </div>
  )
}

export default Ex05