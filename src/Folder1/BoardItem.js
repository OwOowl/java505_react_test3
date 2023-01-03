import React from "react";

function BoardItem(props) {
    return(
        <tr>
            <td>{props.idx}</td>
            <td>{props.title}</td>
            <td>{props.userId}</td>
            <td>{props.createDt}</td>
        </tr>
    );
}

export default BoardItem;