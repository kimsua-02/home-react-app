import { useEffect, useState } from "react"
import ContactForm from "./contactForm";
import ContactList from "./contactList";
import GroupForm from "./groupForm";


const Phonebooker = () => {
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

    const deleteGroup = (id) => {
        setGroups(groups.filter(group => group.id !== id));
    };

    return (
        <div>
            <h1>전화번호부</h1>
            <ContactForm onSubmit={addContact} initialContact={editContact} />
            <ContactList contacts={contacts} onDelete={deleteContact} onEdit={editContact} />
            <GroupForm onSubmit={addGroup} initialGroup={editingGroup} />
            <ul>
                {groups.map(group => (
                    <li key={group.id}>
                        {group.name}
                        <button onClick={() => deleteGroup(group.id)}>삭제</button>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Phonebooker;