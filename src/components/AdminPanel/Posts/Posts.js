import React,{useState} from 'react';
import AdministratorNavigation from '../AdminNavigation/AdministratorNavigation';
import { Link, useHistory } from 'react-router-dom';
import { posts } from '../../../data';
import ReactPaginate from 'react-paginate';

const Posts = ()=>{
    /**React pagination */
    const [pageNumber, setPageNumber] = useState(0);
    const postsPerPage = 5;
    const pagesVisited = pageNumber * postsPerPage;

    const displayPosts = posts.slice(pagesVisited,postsPerPage + pagesVisited);
    const pageCount = Math.ceil(posts.length/postsPerPage);
    const changePage = ({selected}) =>{
        setPageNumber(selected);
    }
   /***Filtering all posts */
    const [searchString,setSearchString] = useState('');
    const onInputChange=(event)=>{
        setSearchString(event.target.value);
    }

    const filteredPosts = displayPosts.filter(post=>
        post.title.toLowerCase().includes(searchString.toLowerCase()) || post.author.toLowerCase().includes(searchString.toLowerCase())
    )
    /**Redirecting to the selected post */
    const history = useHistory();
    const onPostClick=(postID)=>{
        history.push(`/post/${postID}`);
    }
    return(
        <div>
            <AdministratorNavigation/>
            <input 
            className="form-control mr-sm-2 " 
            type="search" 
            placeholder="Search Post by Title or Author Name" 
            aria-label="Search"
            onChange={onInputChange}
            />
            <br/>
            <table class="table table-striped table-hover">
                <thead>
                    <tr>
                    <th scope="col">#</th>
                    <th scope="col">Title</th>
                    <th scope="col">Author</th>
                    <th scope="col">Post Category</th>
                    <th scope="col">Date published</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        filteredPosts.map((post)=>{
                            return(
                                <tr key={post.id} onClick={()=>onPostClick(post.id)}>
                                    <th>{post.id}</th>
                                    <td>{post.title}</td>
                                    <td>{post.author}</td>
                                    <td>{post.category}</td>
                                    <td>{post.publishedDate}</td>
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
    )
}

export default Posts;