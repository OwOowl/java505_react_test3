import React from "react";
import BoardItem from "./BoardItem";

const boardItemList = [
    {
        boardIdx: 100,
        boardUserId: "test1",
        boardTitle: "게시판 글 제목 100번",
        boardCreateDate: "2023-01-03 12:40:00"
    },
    {
        boardIdx: 101,
        boardUserId: "test2",
        boardTitle: "게시판 글 제목 101번",
        boardCreateDate: "2023-01-03 12:41:00"
    },
    {
        boardIdx: 102,
        boardUserId: "test3",
        boardTitle: "게시판 글 제목 102번",
        boardCreateDate: "2023-01-03 12:42:00"
    }
]

function BoardList() {

    return(
        <div className={"container mx-auto"}>
            <table className={"table table-hover table-striped"}>
                <thead>
                <tr>
                    <th>글번호</th>
                    <th>글제목</th>
                    <th>사용자</th>
                    <th>등록시간</th>
                </tr>
                </thead>
                <tbody>
                {boardItemList.map((item) => {
                    return <BoardItem idx={item.boardIdx} title={item.boardTitle} userId={item.boardUserId} createDt={item.boardCreateDate} />
                })}
                </tbody>
            </table>
        </div>
    );
}

export default BoardList;