import React from 'react';

const User=(props)=>{
    return (
        <p>{props.match.params.id}</p>
    )

}

export default User;