import React from "react";

const styles = {
    fakeImg: {
        height: 200,
        backgroundColor: "#aaa"
    }
}

function Info() {
    return (
        <div>
            <h2>About Me</h2>
            <h2>Photo of me</h2>
            <div style={styles.fakeImg}>Fake image</div>
            <p>아무 글자나 입력해 놓은거...</p>
            <h3 className={"mt-4"}>Some Links</h3>
            <p>Lorem ipsum dolor sit ame.</p>
        </div>
    );
}

export default Info