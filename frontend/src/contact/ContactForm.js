import React, {useState} from 'react';
import Axios from "axios";
import {useHistory} from 'react-router-dom';
import "./Contact.css";

const ContactForm = (props) => {
    let history = useHistory();
    const [contact, setContact] = useState ({
        name : "",
        post : "",
        product : "",
        date : "",
        comment : "",
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
    const submitContact = async (event)=> {

      Axios.post("http://localhost:3001/insert", { 
        name: contact.name,
        phone: contact.phone,
        post: contact.post,
        product: contact.product,
        date: contact.date,
        comment: contact.comment
      })
      props.onAdd(contact);
      setContact ({
        name : "",
        phone :"",
        post : "",
        product : "",
        date : "", 
        comment : "",         
      });   

      event.preventDefault ();        
        
  };

    return (
      <div>
        <div className="contact-sticky-form">
          <form className="form-contact form-control">
          <h2 className="h1-contact"> ADD CONTACT </h2>
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
              type="text"
              className="contact-form"
              placeholder="Phone"
              name="phone"              
                value = {contact.phone}
                onChange = {handleChange}
            />
          </div>
          
          <div className="form-group">
            <input
              type="text"
              className="contact-form"
              placeholder="Post"
              name="post"             
                value = {contact.post}
                onChange = {handleChange}            
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="contact-form"
              placeholder="Product"
              name="product"             
                value = {contact.product}
                onChange = {handleChange}            
            />
          </div>
          <div className="form-group">
            <input
              type="date"
              className="contact-form"
              placeholder="Date"
              name="date"             
                value = {contact.date}
                onChange = {handleChange}            
            />
          </div>
          <div className="form-group">
            <textarea
              type="text"
              className="contact-form"
              placeholder="Comment"
              name="comment"             
                value = {contact.comment}
                onChange = {handleChange}            
            />
          </div>        
          <button 
          onClick = {submitContact}
                className="btn-contact m-2" 
                type="submit" >
          Add Contact</button>
        </form><hr></hr>
        </div>        
        </div>        
    )
};
export default ContactForm;
