import React from 'react';
import './AdminPanel.css';
import {Link} from 'react-router-dom';
import { users, posts } from '../../data';

const AdminPanel = ()=>{
    return(
       <div>
           <p><Link className="adminLink" to="/adminpanel">All Users</Link> / <Link className="adminLink" to="/allposts">Posts</Link> / </p>
           
           <table class="table table-striped table-hover">
                <thead>
                    <tr>
                    <th scope="col">#</th>
                    <th scope="col">First Name</th>
                    <th scope="col">Last Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">Active</th>
                    <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map((user)=>{
                            return(
                            <tr>
                                <th scope="row">{user.id}</th>
                                <td>{user.name}</td>
                                <td>{user.surname}</td>
                                <td>{user.email}</td>
                                <td>{user.active}</td>
                                <td><button type="button" class="btn btn-primary">Edit</button> {user.id!==2 && <button type="button" class="btn btn-danger">Delete</button>}</td>
                            </tr>)
                        })
                    }
                </tbody>
            </table>
       </div>
    )
}

export default AdminPanel;