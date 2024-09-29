import { useState } from "react"


const GroupForm = ({onSubmit, initialGroup}) => {
    const [groupName, setGroupName] = useState(initialGroup ? initialGroup.name : '');

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit({name : groupName});
        setGroupName('');
    };

    return(
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="그룹 이름" value={groupName} onChange={(e) => setGroupName(e.target.value)}/>
            <button type="submit">{initialGroup ? '수정' : '추가'}</button>
        </form>
    )
}

export default GroupForm;