import React , {useEffect, useState} from 'react';
import AdministratorNavigation from '../AdminNavigation/AdministratorNavigation';
import {useHistory} from 'react-router-dom';
import './Users.css';
import ReactPaginate from 'react-paginate';

const Users=({updateUser})=>{
    /**React Pagination */
    const [pageNumber, setPageNumber] = useState(0);
    const usersPerPage = 10;
    const pagesVisited = pageNumber * usersPerPage;
    const [users,setUsers] = useState([]);

    /**Fetching all Users */
    useEffect(()=>{
        fetch("http://localhost:3000/getAllUsers",{
            method:'get',
            headers:{'Content-Type':'application/json'},
        }).then(response=>response.json())
        .then(receivedUsers=>setUsers(receivedUsers));
    },[]);

    /**Filtering all users based on the search requests */ 
    const displayUsers = users.slice(pagesVisited,usersPerPage + pagesVisited);
    const pageCount = Math.ceil(users.length/usersPerPage);
    const changePage = ({selected}) =>{
        setPageNumber(selected);
    }
    /**Filtering users */
    const [searchString, setSearchString] = useState('');
    const onInputChange=(event)=>{
        setSearchString(event.target.value);
    }
    const filteredUsers = displayUsers.filter((user)=>{
        return user.name.toLowerCase().includes(searchString.toLowerCase()) || user.surname.toLowerCase().includes(searchString.toLowerCase())
    })
    /**Redirecting to selected users page */
    const history = useHistory();
    const onUserClick=(userSelected)=>{
        updateUser(userSelected)
        history.push('/userInfo');
    }
     
    return(
        <div>
            <AdministratorNavigation/>
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
                                <tr key={user.id} onClick={()=>onUserClick(user)}>
                                    <th scope="row">{user.id}</th>
                                    <td>{user.name}</td>
                                    <td>{user.surname}</td>
                                    <td>{user.email}</td>
                                    <td>{user.active == 1 ? "Yes":"No"}</td>
                                </tr>
                            )
                        })
                    }
                    
                </tbody>
            </table>
            <br/>
            <br/>
            <ReactPaginate
                    previousLabel={"Previous"}
                    nextLabel={"Next"}
                    pageCount={pageCount}
                    onPageChange={changePage}
                    containerClassName={"paginationBttns"}
                    previousLinkClassName={"previousBttn"}
                    nextLinkClassName={"nextBttn"}
                    disabledClassName={"paginationDisabled"}
                    activeClassName={"paginationActive"}/>
        </div>
        );
}

export default Users;