import React from 'react';
import { Link } from 'react-router-dom';
import './BottomPost.css';

function BottomPost({posts})
{
    return(
        <div className="bottom-post">
            {
                posts.map((post,index)=>{
                    return (
                    <div className="post" key={index}>
                        <div className="postHeader">
                            <Link to={`/posts/${post.id}`} className="link">
                                <h1>{post.title}</h1>
                            </Link>
                            <p>{post.author}</p>
                            <p className="date">{post.publishedDate}</p>
                        </div>
                        <div className="postContent">
                            <Link to={`/posts/${post.id}`} className="link">
                                <p>{post.content}</p>
                            </Link>
                        </div>
                        <div className="postImage">
                            <Link to={`/posts/${post.id}`} className="link">
                                <img src = {process.env.PUBLIC_URL + post.image} alt="post image" className="imgClass"/>
                            </Link>
                        </div> 
                    </div>
                    )
                })
            }
                     
        </div>
    )
}

export default BottomPost;