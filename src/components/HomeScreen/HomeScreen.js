import React from 'react';
import './HomeScreen.css';
import MainPost from './MainPost/MainPost';
import SidePost from './SidePost/SidePost';
import BottomPost from './BottomPost/BottomPost';

function HomeScreen()
{
    return(
        <div className="container">
            <MainPost/>
            <SidePost/>
            <h2 className="header">The Latest</h2>
            <BottomPost/>                
        </div>
    )
}

export default HomeScreen;