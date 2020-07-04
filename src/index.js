/*======================================================|IMPORTING FILES|================================================================*/

import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';


/*=================================================|DEFINING CLASSES FUNCTIONS|===============================================================*/

function AddPersonForm(props) {

    const [person, setPerson] = useState('');

    function handleChange(e) {

        setPerson(e.target.value);
    }

    function handleSubmit(e) {

        props.handleSubmit(person);
        setPerson('');
        e.preventDefault();
    }

    return (

        <form className="add-contact" onSubmit={handleSubmit}>
            <span>CONTACT NAME</span>
            <input
                type="text"
                placeholder="add New Contact"
                onChange={handleChange}
                value={person}
                required
            />
            <button className="add-button" type="submit">ADD</button>
        </form>
    );
}

function PeopleList(props) {

    const arr = props.data;
    const listItems = arr.map((val, index) =>

        <li key={index}>{val}</li>
    );

    return <div className="contact-list">
        <ul><legend>YOUR CONTACTS:</legend> <hr />
            {listItems}
        </ul>
    </div>;
}

function ContactManager(props) {

    const [contacts, setContacts] = useState(props.data);

    function addPerson(name) {

        setContacts([...contacts, name]);
    }

    return (

        <div>
            <AddPersonForm handleSubmit={addPerson} />
            <PeopleList data={contacts} />
        </div>
    );
}

/*==================================================|DEFINING ALL VARIABLES|=======================================================================*/

const contacts = [];

/*=======================================================|DRIVER CODE|================================================================*/

ReactDOM.render(

    <h1>Contact Manager</h1>,
    document.getElementById("heading")
);

ReactDOM.render(

    <ContactManager data={contacts} />,
    document.getElementById('root')
);
