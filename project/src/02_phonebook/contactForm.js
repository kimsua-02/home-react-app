import { useState } from "react"


const ContactForm = ({onSubmit, initialContact}) => {
    const [name, setName] = useState(initialContact ? initialContact.name : '');
    const [phone, setPhone] = useState(initialContact ? initialContact.phone : '');

    const handleSubmit = (e) => {
        e.preventDefalut();
        onSubmit({name, phone});
        setName('');
        setPhone('');
    };

    return(
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="이름" value={name} onChange={(e) => setName(e.target.value)}/>
            <input type="text" placeholder="전화번호" value={phone} onChange={(e) => setPhone(e.target.value)}/>
            <button type="submit">{initialContact ? '수정' : '추가'}</button>
        </form>
    )
}

export default ContactForm;