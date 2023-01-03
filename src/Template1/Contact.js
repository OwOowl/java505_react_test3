import React from "react";
import ContactForm from "./ContactForm";

const styles = {
    text: {
        color: "#607d8b",
        fontSize: 16
    },
    pText: {
        fontSize: 14
    },
}

const dt = Date.now()

function Contact() {
    return(
        <div id={"contact"}>
            <h1>Contact</h1>
            <br/>
            <p style={styles.pText}>We offer full-service catering for any event, large or small. We understand your needs and we will cater the food to satisfy the biggerst criteria of them all, both look and taste. Do not hesitate to contact us.</p>
            <p style={styles.text}><b>Catering Service, 42nd Living St, 43043 New York, NY</b></p>
            <p style={styles.pText}>You can also contact us by phone 00553123-2323 or email catering@catering.com, or you can send us a message here:</p>
            <ContactForm />
        </div>
    );
}

export default Contact;