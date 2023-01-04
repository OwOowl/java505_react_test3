import React from "react";

function Navi2() {
    return(
        <div className={"navbar fixed-top bg-white d-flex justify-content-around"}>
            <button className={"navbar-toggler"} type={"button"} data-bs-toggle={"offcanvas"}data-bs-target={"#offcanvasNavbar"} aria-controls={"offcanvasNavbar"}>
                <span className={"navbar-toggler-icon"} />
            </button>
            <div className={"offcanvas offcanvas-start"} tabindex={"-1"} id={"offcanvasNavbar"} aria-labelledby={"offcanvasNavbarLabel"}>
                <a className={"fs-2 p-3 nav-link"} href={""} data-bs-dismiss={"offcanvas"} aria-label={"Close"}>Close Menu</a>
                <a className={"fs-2 p-3 nav-link"} href={"#food"}>Food</a>
                <a className={"fs-2 p-3 nav-link"} href={"#about"}>About</a>
            </div>
            <p className={"fs-4"}>My Food</p>
            <p className={"fs-4"}>Mail</p>
        </div>
    );
}

export default Navi2;