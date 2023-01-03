import React from "react";

const styles = {
    footer: {height: 116}
}
function Footer() {
    return(
        <div className={"mt-5 p-4 bg-light text-center"} style={styles.footer}>
            <p className={"mt-4"}>Powered by <a className={"text-dark"} href={"https://www.w3schools.com/w3css/default.asp"} target={"_blank"}>w3.css</a></p>
        </div>
    );
}

export default Footer;