import React, {useState} from "react";
import axios from "axios";

function DailyBoxOffice(props) {
    // 초기값 빈 배열로 설정
    const [data, setData] = useState([]);

    const loadBoxOffice = () => {
        axios.get("http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=f5eef3421c602c6cb7ea224104795888&targetDt=20230109")
            .then((req) => {
                const list = req.data.boxOfficeResult.dailyBoxOfficeList;
                setData(list);
                console.log(data);
            })
            .catch((err) => {
                console.log('통신 시 오류가 발생하였습니다.');
            });
    }

    return(
        <div className={`container`}>
            <div className={`row`}>
                <div className={`col-sm-8 mx-auto`}>
                    <table className={`table table-striped table-hover`}>
                        <thead>
                        <tr>
                            <th>순위</th>
                            <th>제목</th>
                            <th>개봉일</th>
                            <th>당일 관람객</th>
                            <th>누적 관람객</th>
                        </tr>
                        </thead>
                        <tbody>
                            {data.map((item) => {
                                return (
                                    <tr key={item.rnum}>
                                        <td>{item.rank}</td>
                                        <td>{item.movieNm}</td>
                                        <td>{item.openDt}</td>
                                        <td>{item.audiCnt}</td>
                                        <td>{item.audiAcc}</td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                    <hr />
                    <div className={`my-3 d-flex justify-content-end`}>
                        <button className={`btn btn-outline-primary`} onClick={loadBoxOffice}>영화 순위 조회</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DailyBoxOffice