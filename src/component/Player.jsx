import { useState } from "react";

const Players=({name,symbol,isActive})=>{
    const [newName,setNewName]=useState(name);
    const[isEditing,setEditing] = useState(false);
    const handalEditClick=()=>{
        setEditing(!isEditing);
    }
    const handalChange=(event)=>{
        setNewName(event.target.value)
    }
    let playerName=<span className="player-name">{newName}</span>;
    if(isEditing){
        playerName=<input className="player-name" type="text" required value={newName} onChange={handalChange}/>
    }
    return(
        <li className={isActive?'active':undefined}>
            <span className="palyer">
            {playerName}
            <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={handalEditClick}>{isEditing?'Save':'Edit'}</button>
        </li>
    )
}
export default Players;