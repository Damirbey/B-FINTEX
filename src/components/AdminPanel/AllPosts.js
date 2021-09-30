import React from 'react';
import { Link } from 'react-router-dom';

const AllPosts=()=>{
    return(
        <div>
            <p><Link className="adminLink" to="/adminpanel">All Users</Link> / <Link className="adminLink" to="/allposts">Posts</Link> / </p>
            <h1>All Posts</h1>
        </div>
    )
}

export default AllPosts;