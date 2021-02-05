import React, {useState, useEffect} from 'react';
import axios from "axios";
import {useHistory, useParams} from 'react-router-dom';

import "./Contact.css";

const ContactEdit = (props) => {    
    
    let history = useHistory();
    const {id} = useParams();
    
    const [contact, setContact] = useState ({
        name : "",
        email : "",
        phone : "",
        contact_type : "",
    });

    const handleChange = (event) => {
        const{name,value} = event.target;

        setContact(prevContact => {
            return {
                ...prevContact,
                [name] :value
            };
        });
    }

    useEffect(() => {
        loadContact()
    },[]);

    const submitContact = async (event)=> {

       

        event.preventDefault ();
        await axios.put(`http://localhost:3003/users/${id}`, contact);
        history.push("/contact-keeper-app");
    };

    const loadContact = async () => {
        const result = await axios.get(`http://localhost:3003/users/${id}`);
        setContact(result.data);
    };


    return (

        <div className="row mt-5">
        <div className="col-md-6 pt-5 pt-lg-0 d-flex justify-content-center flex-column add_contact">

        <div className="contact-sticky-form-edit ">
          <form className="form-contact">
          <h2 className="h1-contact"> EDIT CONTACT </h2>
          <div className="form-group">
            <input
              type="text"
              className="contact-form"
              placeholder="Name"
              name="name"
              
                value = {contact.name}
                onChange = {handleChange}
            />
          </div>
          
          <div className="form-group">
            <input
              type="email"
              className="contact-form"
              placeholder="E-mail"
              name="email"
             
                value = {contact.email}
                onChange = {handleChange} 
              
             
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="contact-form"
              placeholder="Phone"
              name="phone"
             
                value = {contact.phone}
                onChange = {handleChange} 
              
             
            />
          </div>
         
          <button 
          onClick = {submitContact}
                className="btn-contact" 
                type="submit" >
          Update Contact</button>
        </form>


        </div>
    </div>
    </div>

        
    )
};

export default ContactEdit;
