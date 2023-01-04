import React, {useEffect, useState} from "react";
import useCounter from "./UseCounter";

function Accommodate(props) {
    const MAX_CAPACITY = 10;
    // state 사용하기 위해 useState 설정
    const [isFull, setIsFull] = useState(false);
    // 해당 컴포넌트 내부에서 생성해야 할 state 객체 및 setState를 커스텀 훅을 통해 생성함
    // 커스텀 훅을 사용했기 때문에 재활용이 가능함
    const [count, increaseCount, decreaseCount] = useCounter(0);

    // 리액트 생명주기 함수를 사용하기 위해서 useEffect 설정
    // 의존성 배열이 없을 경우 componentDidMount, componentWillUnmount 실행하는 것과 같은 효과
    useEffect(() => {
        console.log('============');
        console.log(`useEffect() is called`);
        console.log(`isFull : ${isFull}`);
    });

    // 의존성 배열에 count 객체를 설정하여 count 값이 수정되면 componentDidUpdate 실행하는 것과 같은 효과
    useEffect(() => {
        setIsFull(count >= MAX_CAPACITY);
        console.log(`현재 count 값 : ${count}`);
    }, [count]);

    return(
        <div>
            <p>{`총 ${count}명 수용했습니다.`}</p>
            {/* 커스텀 훅을 통해 만들어진 사용자 입장/퇴장 함수 등록 */}
            <button className={"btn btn-primary"} onClick={increaseCount} disabled={isFull}>입장</button>
            <button className={"btn btn-success"} onClick={decreaseCount}>퇴장</button>
            {isFull && <p style={{color: "red"}}>정원이 가득찼습니다.</p>}
        </div>
    );
}

export default Accommodate