import './App.css'

function App() {
  
  /* JSX : 하나의 파일 안에 HTML과 JS를 동시에 작성하는 확장자
        => 가독성이 좋고 작성이 쉽다.
        => 기능분류도 쉽다.

      ** JSX 특징
      (1) return문 안에 여러 요소가 있다면 반드시 하나의 부모요소로 감싸줄것
        - 이때, 반드시 div태그가 아니어도 상관없음
        - 다른태그도 가능하고 비어있는 <></>태그 도 가능

      (2) 표현식 사용 가능
        - JS 문법은 위에
        - HTML 문법은 return문 안에 작성
        - 만약 JS 문법을 return문 안에 쓰고 싶다면 {}안에 작성
        - 단, if문은 사용불가
        
        ※ 만약 조건문을 써야한다면?
        2-1) 조건에 대한 결과가 하나일 때 :&&
        2-2) 조건에 대한 결과가 두 개일 때 :삼항연산자
        2-3) 조건에 대한 결과가 세 개 이상일 때 : 위에 if문 작성 후 아래에는 변수만 작성

      (3) 스타일링 적용 방법
        3-1) 기존처럼 css 파일로 스타일링
        3-2) 객체 형태로 스타일 속성 삽입 ★

      (4) 기존 문법과 다른점들
      - calss 대신 className 을 사용
      - 태그를 사용 할 때 반드시 소문자만 사용 (왜? 대문자는 따로 쓸 일이 있음)
        ex) Button -> X / button -> O
      - 끝 태그 생략 불가
        ex) <br> -> (X)
            <br></br> -> (O)
            </br> -> (O) 축약은 가능
      */

  let sub = "NODE"
  let state = "closed"

  let tr = ""
  if (sub === "React"){
    tr = "선영표"
  } else if (sub === "ML"){
    tr = "강규남"
  } else {
    tr = "채수민"
  }

  let pStyle = {
    color : 'blue',
    backgroundColor : 'yellow'
  }

  return (
    <div>
      <p style={pStyle}>임주은의 {sub} 홈페이지에 오신 것을 환영합니다.</p>
      <p>오후에는 규남쌤의 수업이 진행됩니다.</p>

      {/* 2-1. &&연산자 : 둘다 true 여야 반환이 됨 */}
      {state === 'closed' && <p>비상연락망 : 010-1234-5678</p>}

      {/* 2-2. 삼항연산자 : 조건식 ? true일 때 실행문 : false일때 실행문 */}
      {sub === 'React' ? <p>강사 : 선영표</p> : <p>강사 : 강규남</p>}

      {/* 2-3. */}
      {sub}의 강사는 {tr}입니다.
    </div>
  )
}

export default App
