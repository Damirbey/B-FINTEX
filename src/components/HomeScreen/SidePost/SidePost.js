import React from 'react';
import {Link} from 'react-router-dom';
import './SidePost.css';

function SidePost({posts}){
    return(
        <div className="side-post">
            {
                posts.map((post,index)=>{
                    return (
                    <div className="box" key={index}>
                        <Link to={`/posts/${post.id}`} className="link">
                            <h2>{post.title}</h2>
                        </Link>
                        <p>{post.author}</p>
                    </div> )
                })
            }
        </div>
    )
}

export default SidePost;