import React from "react";
import Contents from "./Contents";
import Footer from "./Footer";
import Header from "./Header";
import Navigate from "./Navigate";
import Info from "./Info";
import Links from "./Links";


function App2() {
    return (
        <div>
            <Header/>

            <Navigate/>

            <div className={"container mt-5"}>
                <div className={"row"}>
                    <div className={"col-sm-4"}>
                        <Info/>

                        <Links/>
                        <hr className={"d-sm-none"}/>
                    </div>

                    <div className={"col-sm-8"}>
                        <Contents/>

                        <Contents/>
                    </div>
                </div>
            </div>

            <Footer/>
        </div>
    );
}

export default App2