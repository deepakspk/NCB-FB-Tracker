import React from 'react';
import {Link} from 'react-router-dom';
import "./Contact.css";

const ContactList = (props) => {

    const handleClick = () =>{
        props.onDelete(props.id);
    }
    return (
        <div>
        <div className="contact-list">
            <h1 className="h1-contact_list" > {props.name} <span> <p> {props.phone}</p></span></h1>
            <p> {props.post} : {props.product} : {props.date}</p>
            <p> </p>
            <p> {props.comment}</p>

            <Link 
                className="btn btn-outline-secondary m-1 btn-contact_list"                 
                type="submit"
                onClick = { handleClick }
            >
                DELETE
            </Link>
        </div>
       
        </div>
    );
};

export default ContactList;
