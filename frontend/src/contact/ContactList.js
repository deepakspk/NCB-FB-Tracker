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
            <h1 h1 className="h1-contact_list" > {props.name}</h1>
            <p> {props.phone}</p>
            <p> {props.post}</p>
            <p> {props.product}</p>
            <p> {props.date}</p>
            <p> {props.comment}</p>
            <Link 
                className="btn btn-outline-secondary m-1 btn-contact_list" 
                to = {`/contact-keeper-app/edit/${props.id}`}
                type="submit" >                
                    EDIT
            </Link>
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
