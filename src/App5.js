import React from "react";
import NotificationList from "./Folder2/NotificationList";
import CountButton from "./Folder2/CountButton";
import CountButton2 from "./Folder2/CountButton2";
import Accommodate from "./Folder2/Accommodate";
import Calculator from "./Folder2/Calculator";

function App5() {
    return(
        <div className={"container"}>
            <NotificationList />
            <CountButton />
            <div className={"mt-5"}>
                <CountButton2 />
            </div>
            <div className={"mt-5"}>
                <Accommodate />
            </div>
            <Calculator />
        </div>
    );
}

export default App5;