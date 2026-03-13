// rafce + ENTER
// => 단축키로 구조 가져오기

/* import React from 'react'

const MemberBox = ({teamName, name, blood}) => {
  return (
    <div style={{border:'3px double gray', padding: '3%', margin: '3%'}}>
        <p>{teamName} {name}</p>
        <p>{blood}형</p>
    </div>
  )
}

export default MemberBox */


function MemberBox({teamName, name, blood}){

    // 2. return문
    return(
        <div style={{border : '3px solid skyblue', padding : '3%'}}>
           <h2>팀이름 : {teamName}</h2>
           <p>팀원이름 : {name}</p>
           <p>혈액형 : {blood}형</p>
        </div>
    )
}

// 3. export문
export default MemberBox



