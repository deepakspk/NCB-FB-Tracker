import React, {useState, useEffect} from 'react';
import Axios from "axios";
import "./Contact.css";
import ContactForm from './ContactForm';
import ContactList from './ContactList';

const Contact = () => {
    const[contacts, setContacts] = useState([]);
    useEffect(() => {
        loadUser();
    },[]);
    const loadUser = async () =>{
        const result = await Axios.get("http://localhost:3001/read");
        setContacts(result.data.reverse());
    };
    const addContact = (contact) => {
        setContacts (prevContacts => {
            return [...prevContacts, contact]
        });
    }

    const deleteContactList = (id) => {
        Axios.delete(`http://localhost:3001/delete/${id}`).then(() => {
            setContacts (prevLists => {
                return prevLists.filter( (contact) => {
                    return contact._id !==id;
                });
            });            
        });            
    };
    return (
        <div>
            <section>
            <div className="container">
                <div className="row">                
                    <div className="col-sm-12 col-md-6">
                        <ContactForm onAdd={addContact}/>                
                    </div>                    
                    <div className="col-sm-12 col-md-6">                    
                        {contacts.map((listItem, index) => {
                            return <ContactList
                                key= {index}
                                id= {listItem._id}
                                ids = {listItem._id}
                                onDelete={deleteContactList}
                                name = {listItem.name}
                                phone = {listItem.phone}
                                post = {listItem.post}
                                product = {listItem.product}
                                date = {listItem.date}
                                comment = {listItem.comment}
                            />                            
                        })}                           
                </div>
            </div>
        </div>
        </section>

        </div>
    );
};

export default Contact;
