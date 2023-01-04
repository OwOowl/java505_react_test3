import React from "react";
import hamberger from "./img/hamburger.jpg";
import img1 from "./img/2.png";
import img2 from "./img/3.png";
import Navi1 from "./Template1/Navi1";
import About from "./Template1/About";
import Menu from "./Template1/Menu";
import Contact from "./Template1/Contact";
import Footer from "./Template1/Footer";

const styles = {
    home: {
        position: "relative",
    },
    imgText: {
        position: "absolute",
        bottom: 10,
        left: 170
    },
    mainImg: {
        width: 1600,
        height: 800
    },
    two: {
        width: 530,
        height: 600
    },
    content: {
        width: 1100
    }
}

function App4() {
    return (
        <div>
            <Navi1 />
            <div className={"mx-auto d-flex justify-content-center"} id={"home"} style={styles.home}>
                <div>
                    <img style={styles.mainImg} src={hamberger} />
                </div>
                <div style={styles.imgText}>
                    <h1 className={"text-secondary"}>Le Catering</h1>
                </div>
            </div>
            <br/>
            <div className={"row my-5 mx-auto d-flex justify-content-center"} style={styles.content}>
                <img src={img1} style={styles.two} className={"col-sm-6 opacity-75"} />
                <About />
            </div>

            <br/>
            <hr/>
            <br/>

            <div className={"row my-5 mx-auto d-flex justify-content-center"} style={styles.content}>
                <Menu />
                <img src={img2} style={styles.two} className={"col-sm-6 opacity-75"} />
            </div>

            <br/>
            <hr/>
            <br/>

            <div className={"my-5 mx-auto d-flex justify-content-center"} style={styles.content}>
                <Contact />
            </div>

            <Footer />
        </div>
    );
}

export default App4;