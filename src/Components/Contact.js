import React, { useState } from "react";
import './Style.css'

function Contact() {
    const [formStatus, setFormStatus] = useState("Send");
    const onSubmit = (e) => {
        e.preventDefault();
        setFormStatus("Submitting...");
        const { fname, lname, email, phone } = e.target.elements;
        let conFom = {
            fname: fname.value, lname: lname.value,
            email: email.value, phone: phone.value,
        };
        console.log(conFom);
    };
    return (
        <div className="form">
            <form onSubmit={onSubmit}>
                <div className="lForm">
                    <label htmlFor="fname">F Name</label>
                    <input type="text" id="fname" required placeholder="Enter First Name" />
                    <label htmlFor="lname">L Name</label>
                    <input type="text" id="lname" required placeholder="Enter Last Name" />
                  </div>
                    <div className="lForm">
                    <label htmlFor="email"> Email </label>
                    <input type="email" id="email" required placeholder="Your Email" />
                    <label htmlFor="phone"> Phone </label>
                    <input  id="phone" placeholder="+91-9876543210" required />
                </div>
                <button className="btn btn-danger" type="submit">{formStatus}</button>
            </form>
        </div>
    );
}

export default Contact;
