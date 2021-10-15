import React , {useState} from 'react';
import Users from './Users/Users';
import './AdminPanel.css';
import {Link} from 'react-router-dom';

const AdminPanel = ()=>{

    return(
       <div>
           <Users/>
       </div>
    )
}

export default AdminPanel;