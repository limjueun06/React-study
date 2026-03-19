import React from 'react'
import { useState , useEffect } from 'react';
import axios from 'axios';

const Ex02 = () => {

    const [movieData, setMovieDate] = useState([]);

    useEffect(()=>{
        getData()
    },[])

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

            setMovieDate(res.data.boxOfficeResult.dailyBoxOfficeList)            
        })
    }

  return (
    <div>
        <h1>axios 실습2</h1>
        <hr></hr>

        <table border={1}>
            <tr>
                <td>순위</td>
                <td>제목</td>
                <td>개봉일</td>
            </tr>

            {movieData.map((item)=>(
                <tr>
                <td>{item.rank}</td>
                <td>{item.movieNm}</td>
                <td>{item.openDt}</td>
                </tr>
            ))}

            
        </table>
        <input></input>
        <button>검색</button>
    </div>
  )
}

export default Ex02