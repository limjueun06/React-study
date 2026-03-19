import React from 'react'
import axios from 'axios'
import { useState } from 'react'
// axios : 비동기 통신 라이브러리

const Ex01 = () => {

    const [movieData, setMovieDate] = useState([]);

    const getData = ()=>{
        axios({
            url : 'http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=2db9806a4658ad21284ad1e19db41f67&targetDt=20120101', // 어디랑 통신할 것인지?
            method : 'get', // 어떤 방법으로 통신할 것인지
            // data : {    // 어떤 데이터를 보낼것인지
            // }
        })
        // 통신 성공시 실행시킬 로직
        .then((res)=>{
            console.log('통신성공')
            console.log(res)
            console.log(res.data.boxOfficeResult.boxofficeType)
            console.log(res.data.boxOfficeResult.dailyBoxOfficeList[2].movieNm)

            setMovieDate(res.data.boxOfficeResult.dailyBoxOfficeList)            
        })
    }

  return (
    <div>
        <h1>axios 영화데이터</h1>
        <button onClick={getData}>데이터 가져오기</button>
        <hr></hr>
        <br></br>

        <table border={1}>
        <tr>
            <th>영화순위</th>
            <th>제목</th>
            <th>개봉일</th>
        </tr>

        {movieData.map(item=>(
            <tr>
                <td>{item.rank}</td>
                <td>{item.movieNm}</td>
                <td>{item.openDt}</td>
            </tr>
        ))}
        </table>
    </div>
  )
}

export default Ex01

