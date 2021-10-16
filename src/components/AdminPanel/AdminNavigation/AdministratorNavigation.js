import React from 'react';
import { Link } from 'react-router-dom';

const AdministratorNavigation=()=>{
    return(
        <p><Link className="adminLink" to="/adminpanel">All Users</Link> / <Link className="adminLink" to="/allposts">All Posts</Link> / <Link className="adminLink" to="/allposts">Add New Post</Link> /</p>
    )
}

export default AdministratorNavigation;