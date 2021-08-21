import React from 'react';
import './MainPost.css';
import {Link} from 'react-router-dom';

function MainPost({post})
{
    return(
        <div className="main-post">
            <Link to={`/posts/${post[0].id}`} className="link">
                <h1>{post[0].title}</h1>
            </Link>
            <p>{post[0].author} / <span className="date">{post[0].publishedDate}</span></p>
            <Link to={`/posts/${post[0].id}`} className="link">
                <img src={process.env.PUBLIC_URL + post[0].image} className="mainPostImage" alt="post image"/>
            </Link>
            
        </div>
    )
}

export default MainPost;