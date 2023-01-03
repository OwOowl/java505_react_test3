import React from "react";

const styles = {
    width: {
        width: 320
    }
}
function Food1() {
    return (
        <div className={"text-center row"} id={"food"}>
            <div className={"col-3"} style={styles.width}>
                <img src={""} />
                <h3 className={"mb-3"}>The Perfect Sandwich, A Real NYC Classic</h3>
                <p>Just some random text, lorem ipsum text praesent tincidunt ipsum lipsum</p>
            </div>
            <div className={"col-3"} style={styles.width}>
                <img src={""} />
                <h3 className={"mb-3"}>Let Me Tell You About This Steak</h3>
                <p>Once again, some random text to lorem lorem lorem lorem ipsum text praesent tincidunt ipsum lipsum</p>
            </div>
            <div className={"col-3"} style={styles.width}>
                <img src={""} />
                <h3 className={"mb-3"}>Cherries, interrupted</h3>
                <p>Lorem ipsum text praesent tincidunt ipsum lipsum.<br/><br/>What else?</p>
            </div>
            <div className={"col-3"} style={styles.width}>
                <img src={""} />
                <h3 className={"mb-3"}>Once Again, Robust Wine and Vegetable Pasta</h3>
                <p>Lorem ipsum text praesent tincidunt ipsum lipsum.</p>
            </div>

            <div className={"col-3"} style={styles.width}>
                <img src={""} />
                <h3 className={"mb-3"}>All I Need Is a Popsicle</h3>
                <p>Lorem ipsum text praesent tincidunt ipsum lipsum.</p>
            </div>
            <div className={"col-3"} style={styles.width}>
                <img src={""} />
                <h3 className={"mb-3"}>Salmon For Your Skin</h3>
                <p>Once again, some random text to lorem lorem lorem lorem ipsum text praesent tincidunt ipsum lipsum.</p>
            </div>
            <div className={"col-3"} style={styles.width}>
                <img src={""} />
                <h3 className={"mb-3"}>The Perfect Sandwich, A Real NYC Classic</h3>
                <p>Just some random text, lorem ipsum text praesent tincidunt ipsum lipsum</p>
            </div>
            <div className={"col-3"} style={styles.width}>
                <img src={""} />
                <h3 className={"mb-3"}>The Perfect Sandwich, A Real NYC Classic</h3>
                <p>Just some random text, lorem ipsum text praesent tincidunt ipsum lipsum</p>
            </div>
        </div>
    );
}


export default Food1;