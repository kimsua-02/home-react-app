import { useEffect, useState } from "react"


const Phonebook = () => {
    const [contacts, setContacts] = useState([]);
    const [groups, setGroups] = useState([]);
    const [editingContact, setEditingContact] = useState(null);
    const [editingGroup, setEditingGroup] = useState(null);

    useEffect(() => {
        const storedContact = JSON.parse(localStorage.getItem('contacts')) || [];
        const storedGroups = JSON.parse(localStorage.getItem('groups')) || [];
        setContacts(storedContact);
        setGroups(storedGroups);
    },[]);

    useEffect(() => {
        localStorage.setItem('contacts', JSON.stringify(contacts));
    },[contacts]);

    useEffect(() => {
        localStorage.setItem('groups', JSON.stringify(groups));
    },[groups]);

    const addContact = (contact) => {
        if (editingContact) {
            setContacts(contacts.map(c => c.id === editingContact.id ? {...editingContact, ...contact} : c));
            setEditingContact(null);
        } else {
            setContacts([...contacts, {id : Date.now(), ...contact}]);
        }
    };

    const deleteContact = (id) => {
        setContacts(contacts.filter(contact => contact.id !== id));
    };

    const editContact = (contact) => {
        setEditingContact(contact);
    };

    const addGroup = (group) => {
        if (editingGroup) {
            setGroups(groups.map(g => g.id === editingGroup.id ? {...editingGroup, ...group} : g));
            setEditingGroup(null);
        } else {
            setGroups([...groups, {id : Date.now(), ...group}]);
        }
    };
    
}