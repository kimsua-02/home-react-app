import React, { useEffect, useState } from 'react';

const Phonebook = () => {
    const [contacts, setContacts] = useState([]);
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');

    useEffect(() => {
        const storedContacts = JSON.parse(localStorage.getItem('contacts')) || [];
        setContacts(storedContacts);
    },[]);

    useEffect(() => {
        localStorage.setItem('contacts', JSON.stringify(contacts));
    },[contacts]);

    const handleAddContact = (e) => {
        e.preventDefault();
        if(!name || !phone) return;
        const newContact = {id : Date.now(), name, phone};
        setContacts([...contacts, newContact]);
        setName('');
        setPhone('');
    };

    const handleDeleteContact = (id) => {
        setContacts(contacts.filter(contact => contact.id !== id));
    };

    return (
        <div>
            <h1>전화번호부</h1>
            <form onSubmit={handleAddContact}>
                <input type="text" placeholder="이름" value={name} onChange={(e) => setName(e.target.value)}/>
                <input type="text" placeholder="전화번호" value={phone} onChange={(e) => setPhone(e.target.value)}/>
                <button type="submit">추가</button>
            </form>
            <ul>
                {contacts.map(contact => (
                    <li key={contact.id}>{contact.name} : {contact.phone}
                        <button onClick={() => handleDeleteContact(contact.id)}>삭제</button>
                    </li>
                ))}
            </ul>
        </div>
    )
};

export default Phonebook;