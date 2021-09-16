import React from 'react';
import {posts} from '../../data';
import './PostScreen.css';

function PostScreen(props){
  
    const post = posts.filter((post)=>{
        return post.id === props.match.params.id;
    });
    return(
        <div class="postContainer">
            <h1>{post[0].title}</h1>
            <p>{post[0].author} / <span class="date">{post[0].publishedDate}</span></p>
            <img src={process.env.PUBLIC_URL + post[0].image} alt="Post Image"/>
            <blockquote class="postFullContent">
                {post[0].content}
            </blockquote>
        </div>
    )
}

export default PostScreen;