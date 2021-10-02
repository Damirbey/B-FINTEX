import React from 'react';

const User=(props)=>{
    return (
<h1>{props.match.params.id}</h1>
    )

}

export default User;