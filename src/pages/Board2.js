import React from "react";
import {useLocation, useNavigate, useSearchParams} from "react-router-dom";

function Board2() {
    const param1 = useLocation();
    const [param2, setParam2] = useSearchParams();
    const navi = useNavigate();

    const goBack = () => {
        navi(-1);
    }

    const goBoard = () => {
        navi("/Board/4");
    }

    return (
        <div>
            <p>{param1.search}</p>
            <p>{param2.get("val1")}</p>
            <p>{param2.get("val2")}</p>
            <button className={"btn btn-primary"} onClick={goBack}>뒤로</button>
            <button className={"btn btn-success"} onClick={goBoard}>Board 페이지 이동</button>
        </div>
    );
}

export default Board2;