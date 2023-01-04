import React from "react";

const styles = {
    width: {
        width: 320
    },
    imgWidth: {
        width: 260
    }
}
function Food1() {
    return (
        <div className={"text-center row"} id={"food"}>
            <div className={"col-3"} style={styles.width}>
                <img src={"img/sandwich.png"} style={styles.imgWidth} />
                <h3 className={"my-3"}>The Perfect Sandwich, A Real NYC Classic</h3>
                <p>Just some random text, lorem ipsum text praesent tincidunt ipsum lipsum</p>
            </div>
            <div className={"col-3"} style={styles.width}>
                <img src={"img/steak.png"} style={styles.imgWidth} />
                <h3 className={"my-3"}>Let Me Tell You About This Steak</h3>
                <p>Once again, some random text to lorem lorem lorem lorem ipsum text praesent tincidunt ipsum lipsum</p>
            </div>
            <div className={"col-3"} style={styles.width}>
                <img src={"img/cherries.png"} style={styles.imgWidth} />
                <h3 className={"my-3"}>Cherries, interrupted</h3>
                <p>Lorem ipsum text praesent tincidunt ipsum lipsum.<br/><br/>What else?</p>
            </div>
            <div className={"col-3"} style={styles.width}>
                <img src={"img/pasta.png"} style={styles.imgWidth} />
                <h3 className={"my-3"}>Once Again, Robust Wine and Vegetable Pasta</h3>
                <p>Lorem ipsum text praesent tincidunt ipsum lipsum.</p>
            </div>

            <div className={"col-3 mt-5"} style={styles.width}>
                <img src={"img/popsicle.png"} style={styles.imgWidth} />
                <h3 className={"my-3"}>All I Need Is a Popsicle</h3>
                <p>Lorem ipsum text praesent tincidunt ipsum lipsum.</p>
            </div>
            <div className={"col-3 mt-5"} style={styles.width}>
                <img src={"img/salmon.png"} style={styles.imgWidth} />
                <h3 className={"my-3"}>Salmon For Your Skin</h3>
                <p>Once again, some random text to lorem lorem lorem lorem ipsum text praesent tincidunt ipsum lipsum.</p>
            </div>
            <div className={"col-3 mt-5"} style={styles.width}>
                <img src={"img/sandwich.png"} style={styles.imgWidth} />
                <h3 className={"my-3"}>The Perfect Sandwich, A Real NYC Classic</h3>
                <p>Just some random text, lorem ipsum text praesent tincidunt ipsum lipsum</p>
            </div>
            <div className={"col-3 mt-5"} style={styles.width}>
                <img src={"img/french.png"} style={styles.imgWidth} />
                <h3 className={"my-3"}>The Perfect Sandwich, A Real NYC Classic</h3>
                <p>Just some random text, lorem ipsum text praesent tincidunt ipsum lipsum</p>
            </div>
        </div>
    );
}


export default Food1;