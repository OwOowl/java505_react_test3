import React from "react";
import axios from "axios";


function AsyncRestServer(props) {
    const sendDataGet = () => {
        axios.get(`http://localhost:8080/async/sendDataGet`, {params: {id: "test1", pw: "1234"}})
            .then((req) => {
                console.log(`get 방식 통신 성공`);
                console.log(req.data);
            })
            .catch((err) => {
                console.log(`get 방식 통신 오류`)
            });
    }

    const sendDataPost = () => {
        axios.post(`http://localhost:8080/async/sendDataPost`, null, {params: {id: "test2", pw: "4321"}})
            .then((req) => {
                console.log(`post 방식 통신 성공`);
                console.log(req.data);
            })
            .catch((err) => {
                console.log(`post 방식 통신 오류`)
            });
    }

    const sendDataPut = () => {
        axios.put(`http://localhost:8080/async/sendDataPut`, null, {params: {idx: 100}})
            .then((req) => {
                console.log(`put 방식 통신 성공`);
                console.log(req.data);
            })
            .catch((err) => {
                console.log(`put 방식 통신 오류`)
            });
    }

    const sendDataDelete = () => {
        axios.delete(`http://localhost:8080/async/sendDataDelete`, {params: {idx: 200}})
            .then((req) => {
                console.log(`delete 방식 통신 성공`);
                console.log(req.data);
            })
            .catch((err) => {
                console.log(`delete 방식 통신 오류`)
            });
    }

    return(
        <div className={"container mt-5 p-5"}>
            <h1 className={"text-center"}>Axios를 사용한 비동기 통신</h1>
            <div className={"row"}>
                <div className={"col-sm-8 mx-auto"}>
                    <div>

                    </div>
                    <div className={"my-3 d-flex justify-content-center"}>
                        <button className={"btn btn-primary me-3"} onClick={sendDataGet}>get 방식</button>
                        <button className={"btn btn-success me-3"} onClick={sendDataPost}>post 방식</button>
                        <button className={"btn btn-info me-3"} onClick={sendDataPut}>put 방식</button>
                        <button className={"btn btn-warning"} onClick={sendDataDelete}>delete 방식</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AsyncRestServer;