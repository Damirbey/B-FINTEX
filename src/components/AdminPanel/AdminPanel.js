import React , {useState} from 'react';
import './AdminPanel.css';
import {Link} from 'react-router-dom';
import { users, posts } from '../../data';

const AdminPanel = ({onRouteChange, setClickedUserId})=>{

    const [searchString, setSearchString] = useState('');

    const onInputChange=(event)=>{
        setSearchString(event.target.value);
    }
    const filteredUsers = users.filter((user)=>{
        return user.name.toLowerCase().includes(searchString.toLowerCase()) || user.surname.toLowerCase().includes(searchString.toLowerCase())
    })

    const onUserClick=(userId)=>{
        onRouteChange("user");
        setClickedUserId(userId);
    }
    return(
       <div>
           <p><Link className="adminLink" to="/adminpanel">All Users</Link> / <Link className="adminLink" to="/allposts">Posts</Link> / </p>
           <input 
            className="form-control mr-sm-2 " 
            type="search" 
            placeholder="Search Users by Name" 
            aria-label="Search"
            onChange={onInputChange}
            />
            <br/>
           <table class="table table-striped table-hover">
                <thead>
                    <tr>
                    <th scope="col">#</th>
                    <th scope="col">First Name</th>
                    <th scope="col">Last Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">Active</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        filteredUsers.map((user)=>{
                            return(
                            
                                <tr key={user.id} onClick={()=>onUserClick(user.id)}>
                                    <th scope="row">{user.id}</th>
                                    <td>{user.name}</td>
                                    <td>{user.surname}</td>
                                    <td>{user.email}</td>
                                    <td>{user.active}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
       </div>
    )
}

export default AdminPanel;