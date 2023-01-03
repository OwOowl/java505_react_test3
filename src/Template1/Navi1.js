import React from "react";

const styles = {
    nav: {
        borderBottom: "1px solid"
    }
}

function Navi1() {
    return (
        <div className={"navbar fixed-top bg-white px-4 shadow-sm"}>
            <div className={"navbar-brand col-sm-3"}>
                <a className={"nav-link"} href={"#home"}>Gourmet au Catering</a>
            </div>
            <div className={"navbar-nav col-sm-4 text-center"}>
                <div className={"row d-flex justify-content-end"}>
                    <a className={"navbar-brand col-2"} href={"#about"}>About</a>
                    <a className={"navbar-brand col-2"} href={"#menu"}>Menu</a>
                    <a className={"navbar-brand col-2"} href={"#contact"}>Contact</a>
                </div>

            </div>
        </div>
    );
}

export default Navi1