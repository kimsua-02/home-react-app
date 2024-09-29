import React from "react";

const ContactList = ({contacts, onDelete, onEdit}) => {
    return (
        <ul>
            {contacts.map(contact => (
                <li key={contact.id}>
                    {contact.name} : {contact.phone}
                    <button onClick={() => onEdit(contact)}>수정</button>
                    <button onClick={() => onDelete(contact.id)}>삭제</button>
                </li>
            ))}
        </ul>
    )
}

export default ContactList;