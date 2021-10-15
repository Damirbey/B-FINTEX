import React from 'react';
import { Link } from 'react-router-dom';

const Posts = ()=>{
    return(
        <div>
            <p><Link className="adminLink" to="/adminpanel">All Users</Link> / <Link className="adminLink" to="/allposts">Posts</Link> / </p>
            <input 
            className="form-control mr-sm-2 " 
            type="search" 
            placeholder="Search Post by Title or Author Name" 
            aria-label="Search"
            //onChange={onInputChange}
            />
            <br/>
            <table class="table table-striped table-hover">
                <thead>
                    <tr>
                    <th scope="col">#</th>
                    <th scope="col">Title</th>
                    <th scope="col">Author</th>
                    <th scope="col">Date published</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        /*filteredUsers.map((user)=>{
                            return(
                            
                                <tr key={user.id} onClick={()=>onUserClick(user.id)}>
                                    <th scope="row">{user.id}</th>
                                    <td>{user.name}</td>
                                    <td>{user.surname}</td>
                                    <td>{user.email}</td>
                                    <td>{user.active}</td>
                                </tr>
                            )
                        })*/
                    }
                    <tr>
                        <th></th>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    
                </tbody>
            </table>
        </div>
    )
}

export default Posts;