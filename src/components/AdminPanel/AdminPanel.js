import React , {useState} from 'react';
import Users from './Users/Users';
import './AdminPanel.css';
import {Link} from 'react-router-dom';

const AdminPanel = ()=>{

    return(
       <div>
           <p><Link className="adminLink" to="/adminpanel">All Users</Link> / <Link className="adminLink" to="/allposts">Posts</Link> / </p>
           <Users/>
       </div>
    )
}

export default AdminPanel;