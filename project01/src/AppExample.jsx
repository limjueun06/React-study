function AppExample (){

    // 1. 사용자에게 이름을 입력받아 준다. => name
    let name = prompt('이름을 입력하세요.')

    // 2. 현재 날짜를 가지고 와서 today 안에 넣어주고
    //      2026.03.13 <- 형식으로 정리된 날짜는 date
    //      그 중 월만 빼와서 month
    console.log('현재 날짜', new Date())
    console.log('정리된 날짜', new Date().toLocaleDateString())

    let today = new Date()
    let date = new Date().toLocaleDateString()
    let month = today.getMonth()+1
    console.log('month', month)

    // 3. 월별로 계절을 판별 season
    //      조건 1. 3~5월 : 봄
    //      조건 2. 6~8월 : 여름
    //      조건 3. 9~11월 : 가을
    //      조건 4. 12,1,2월 : 겨울
    
    let season = ""
    if (month >= 3 && month <=5){
    season = "봄"
  } else if (month >=6 && month <=8){
    sesason = "여름"
  } else if (month>=9 && month <= 11){
    season = "가을"
  }
  else {
    season = "겨울"
  }

    // [결과값] (화면)
    // h1 -> 2026.03.13.
    // hr
    // h4 -> 000님 지금은 00입니다. 좋은 하루 보내세요!
    return(
        <>
            <h1>{date}</h1>
            <hr></hr>
            <hr/>
            <h4>{name}님 지금은 {season}입니다. 좋은하루 보내세요!</h4>

        </>
    )
}

export default AppExample