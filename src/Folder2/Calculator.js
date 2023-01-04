import React, {useState} from "react";

// 결과값 저장할 부분 함수 밖에 전역변수 설정 (내부에 입력 시 컴포넌트 업데이트 시 정상적인 값 출력이 안되는 경우가 생김)
let calResult

function Calculator() {
    const [num1, setNum1] = useState(0);
    const [num2, setNum2] = useState(0);
    const [result, setResult] = useState(0);


    // input태그 입력 값 저장
    const val1 = (e) => {
        setNum1(parseInt(e.target.value));
    }

    const val2 = (e) => {
        setNum2(parseInt(e.target.value));
    }

    // 계산 결과
    const add = () => {
        calResult = num1 + num2;
    }

    const sub = () => {
        calResult = num1 - num2;
    }

    const multi = () => {
        calResult = num1 * num2;
    }

    const divide = () => {
        calResult = num1 / num2;
    }

    const resultVal = () => {
        setResult(calResult);
    }


    return(
        <div className={"row"}>
            <div className={"col-sm-4 mx-auto border rounded-3"}>
                <div className={"my-3"}>
                    <label htmlFor={"num1"}>첫번째 숫자 : </label>
                    <input type={"text"} id={"num1"} name={"num1"} className={"form-control"}
                           placeholder={"첫번째 숫자를 입력하세요"} value={num1} onChange={val1} />
                </div>
                <div className={"my-3"}>
                    <label htmlFor={"num2"}>두번째 숫자 : </label>
                    <input type={"text"} id={"num2"} name={"num2"} className={"form-control"}
                           placeholder={"두번째 숫자를 입력하세요"} value={num2} onChange={val2} />
                </div>
                <hr/>
                <div className={"my-3 d-flex justify-content-between"}>
                    <button type={"button"} className={"btn btn-primary"} onClick={add}> +</button>
                    <button type={"button"} className={"btn btn-primary"} onClick={sub}> -</button>
                    <button type={"button"} className={"btn btn-primary"} onClick={multi}> *</button>
                    <button type={"button"} className={"btn btn-primary"} onClick={divide}> /</button>
                    <button type={"button"} className={"btn btn-info"} onClick={resultVal}> = </button>
                </div>
                <hr/>
                <div className={"my-3"}>
                    <label htmlFor={"result"}>계산 결과 : </label>
                    <input type={"text"} id={"result"} name={"result"} className={"form-control"} value={result} readOnly={true} />
                </div>
            </div>
        </div>
    );
}


export default Calculator;