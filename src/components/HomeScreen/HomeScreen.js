import React from 'react';
import './HomeScreen.css';
import MainPost from './MainPost/MainPost';
import SidePost from './SidePost/SidePost';
import BottomPost from './BottomPost/BottomPost';
import {posts} from '../../data';

function HomeScreen()
{
    const mainPost = posts.filter((post)=>{
        return post.category === 'Main Post';
    })
    const sidePosts = posts.filter((post)=>{
        return post.category === 'Side Post'
    })
    const bottomPosts = posts.filter((post)=>{
        return post.category === 'Bottom Post'
    })
    
    return(
        <div className="container">
            <MainPost post = {mainPost}/>
            <SidePost posts = {sidePosts}/>
            <h2 className="header">The Latest</h2>
            <BottomPost posts = {bottomPosts}/>                
        </div>
    )
}

export default HomeScreen;