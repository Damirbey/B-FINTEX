import React , {useState} from 'react';
import Users from './Users/Users';
import './AdminPanel.css';
import {Link} from 'react-router-dom';

const AdminPanel = ({updateUser})=>{

    return(
       <div>
           <Users updateUser={updateUser}/>
       </div>
    )
}

export default AdminPanel;