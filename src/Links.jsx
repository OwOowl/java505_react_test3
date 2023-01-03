import React from "react";

function Links() {
    return(
        <ul className={"nav nav-pills flex-column"}>
            <li className={"nav-item"}>
                <a className={"nav-link active"} href={"#"}>Active</a>
            </li>
            <li className={"nav-item"}>
                <a className={"nav-link"} href={"#"}>Link</a>
            </li>
            <li className={"nav-item"}>
                <a className={"nav-link"} href={"#"}>Link</a>
            </li>
            <li className={"nav-item"}>
                <a className={"nav-link disabled"} href={"#"}>Disabled</a>
            </li>
        </ul>
    );
}

export default Links