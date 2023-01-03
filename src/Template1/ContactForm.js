import React from "react";

const styles = {
    button: {
        border: "none",
        padding: 8
    }
}

function ContactForm() {
    return(
        <form>
            <div className={"form-floating my-2"}>
                <input id={"name"} type={"text"} className={"form-control"} />
                <label htmlFor={"name"} >Name</label>
            </div>
            <div className={"form-floating my-2"}>
                <input id={"pop"} type={"number"} className={"form-control"}/>
                <label htmlFor={"pop"}>How many people </label>
            </div>
            <div className={"form-floating my-2"}>
                <input id={"date"} type={"datetime-local"} className={"form-control"} />
                <label htmlFor={"date"}>Date</label>
            </div>
            <div className={"form-floating my-2"}>
                <input id={"message"} type={"text"} className={"form-control"}/>
                <label htmlFor={"message"}>Message \ Special requirements</label>
            </div>
            <button style={styles.button} className={"mt-3"}>SEND MESSAGE</button>
        </form>
    );
}

export default ContactForm;