import React from 'react';

function SrTeam(props) {
    return (
        <div>
            {props.team} <input name={props.index}
                onChange={props.changeHandle} className="b-ta"></input>
        </div>
    )


}

export default SrTeam;