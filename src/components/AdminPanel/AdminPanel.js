import React from 'react';
import Dashboard from './Dashboard/Dashboard';
import Sidebar from './SideBar/SideBar';

const AdminPanel = ()=>{
    return(
        <div class="container-fluid" id="main">
            <div class="row row-offcanvas row-offcanvas-left">
                <Sidebar/>
                <Dashboard/>
            </div>
        </div>  
    )
}

export default AdminPanel;