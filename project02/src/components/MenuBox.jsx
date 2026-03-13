// 지금은 그냥 jsx 파일
// -> 컴포넌트화 필수요소 3가지

// 1. 파일명과 같은 함수
function MenuBox({name, temp, price}){

    // 2. return문
    return(
        <div style={{border : '3px solid pink', padding : '3%'}}>
            <h2>{temp} {name}</h2>
            <p>{price}원</p>
        </div>
    )
}

// 3. export문
export default MenuBox