import React, { useState } from "react";

// const Players=({name,symbol,isActive})=>{
//     const [newName,setNewName]=useState(name);
//     const[isEditing,setEditing] = useState(false);
//     const handalEditClick=()=>{
//         setEditing(!isEditing);
//     }
//     const handalChange=(event)=>{
//         setNewName(event.target.value)
//     }
//     let playerName=<span className="player-name">{newName}</span>;
//     if(isEditing){
//         playerName=<input className="player-name" type="text" required value={newName} onChange={handalChange}/>
//     }
//     return(
//         <li className={isActive?'active':undefined}>
//             <span className="palyer">
//             {playerName}
//             <span className="player-symbol">{symbol}</span>
//             </span>
//             <button onClick={handalEditClick}>{isEditing?'Save':'Edit'}</button>
//         </li>
//     )
// }

class Players extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newName: this.props.name,
      isEditing: false,
    };
  }
  handalEditClick = () => {
    this.setState(() => ({ isEditing: !isEditing }));
  };
  handelChange(e) {
    this.setState(() => ({ newName: e.target.value }));
  }
  render() {
    const player = <span className="player-name">{this.state.newName}</span>;
    return (
      <li className={this.props.isActive ? "active" : undefined}>
        <span className="palyer">
          {player}
          <span className="player-symbol">{this.props.symbol}</span>
        </span>
        <button onClick={this.handalEditClick}>
          {this.state.isEditing ? "Save" : "Edit"}
        </button>
      </li>
    );
  }
}

export default Players;
