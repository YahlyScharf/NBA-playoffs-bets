import React from 'react';

function Team(props) {
    return (
        <li className="b-li"> {props.team} <input name={props.index}
             onChange={props.changeHandle} className="b-ta"></input> </li>
    )
}

export default Team;