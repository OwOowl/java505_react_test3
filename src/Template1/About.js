import React from "react";

const styles = {
    text: {
        backgroundColor: "#f1f1f1",
        padding: 4
    }
}
function About() {
    return(
        <div className={"col-sm-6 ms-3"} id={"about"}>
            <h1 className={"text-center"}>About Catering</h1>
            <br/>
            <h5 className={"text-center"}>Tradition since 1889</h5>
            <br/>
            <p>The Catering was founded in blabla by Mr. Smith in lorem ipsum dolor sit amet, consectetur adipiscing elit consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute iruredolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.We only use <span style={styles.text}>seasonal</span> ingredients.</p>
            <p className={"text-secondary"}>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod temporincididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </div>
    );
}


export default About;