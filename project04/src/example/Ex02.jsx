import React from 'react'
import { useState , useEffect , useRef} from 'react';
import axios from 'axios';
// useRef : 태그 참조 변수를 만들 수 있는 기능 --> 태그를 가리킬 수 있게끔

const Ex02 = () => {

    const [movieData, setMovieDate] = useState([]);
    const [inputDay, setInputDay] = useState('')

    const inputRef = useRef();

    useEffect(()=>{
        getData('20200101');
    }, [])

    const getData = (movieDay)=>{
        axios({
            url : 'http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=2db9806a4658ad21284ad1e19db41f67&targetDt='+movieDay,
            method : 'get',

        })
        .then((res)=>{
            console.log('통신성공')
            console.log(res)
            setMovieDate(res.data.boxOfficeResult.dailyBoxOfficeList)            
        })
    }

    const serchDay = ()=>{
        // input태그에 적은 날짜 가져오기
        // inputRef.current : inputRef변수가 가르키고 있는 태그를 가져오겠다.
        //    inputRef.current.value
        //    inputDay

           getData(inputRef.current.value)
    }

  return (
    <div>
        <h1>axios 실습2</h1>
        <hr></hr>

        <table border={1}>
            <tr>
                <th>순위</th>
                <th>제목</th>
                <th>개봉일</th>
            </tr>

            {movieData.map((item)=>(
                <tr>
                <td>{item.rank}</td>
                <td>{item.movieNm}</td>
                <td>{item.openDt}</td>
                </tr>
            ))}
        </table>

        {/* 값이 바뀔때마다 setInputDay 실행
            e.target : 이벤트를 발생시킨 주체 (input태그)
            e.target.value : input태그에 적힌 값
        */}
        {/* 
            ref={inputRef}
            -> inputRef라는 변수와 input태그를 연결 해주었다!
        */}
        <input ref={inputRef} onChange={(e)=>setInputDay(e.target.value)}></input>
        <button onClick={serchDay}>검색</button>
    </div>
  )
}

export default Ex02