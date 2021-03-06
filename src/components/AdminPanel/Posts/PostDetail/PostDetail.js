import React ,{useState, useEffect} from 'react';
import AdministratorNavigation from '../../AdminNavigation/AdministratorNavigation';
import { posts } from '../../../../data';
const PostDetail = (props)=>{

    /**Declaring field variables using hooks to fetch the values entered */
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [category, setCategory] = useState('');
    const [image, setImage] = useState('');
    const [content, setContent] = useState('');
    const [successBox, setSuccessBox] = useState(false);
    const [errorBox, setErrorBox] = useState(false)
    const [displayMessage, setDisplayMessage] = useState('');
    const [editMode, setEditMode] = useState(false);
     
    /**Fetching the selected post from the server */
    var receivedPost = posts.filter((post)=>{
        return post.id === props.match.params.id;})

    /** Declaring onChange functions for every field on the form */
    const onTitleChange = (event)=>{
        setTitle(event.target.value);
        resetField("#postTitle");
    }

    const onAuthorChange = (event)=>{
        setAuthor(event.target.value);
        resetField("#author");
    }

    const onCategoryChange = (event)=>{
        setCategory(event.target.value);
        resetField("#category");
    }

    const onImageChange = (event)=>{
        setImage(event.target.value);
        resetField("#image")
    }

    const onContentChange=(event)=>{
        setContent(event.target.value);
        resetField("#postContent");
    }

    /**Highlight and Reset functions are used to highlight the field when nothing 
     * is entered and reset the field after the value is entered*/
    const resetField=(id)=>{
        document.querySelector(id).style.border="";
    }
    const highlightField=(id)=>{
        document.querySelector(id).style.border="1px solid red";
    }
    const fieldName=(id)=>{
        return document.querySelector(id).value;
    }
    /**Enabling all fields when in edit mode; edit button is clicked */
    const enableFields=()=>{
        var numberOfEditableFields = document.querySelectorAll(".editable").length;
        for(var i = 0; i < numberOfEditableFields; i++){
            document.querySelectorAll(".editable")[i].readOnly = false;
        }
        document.querySelector(".editableCategory").disabled = false;
    }
    const disableFields=()=>{
        var numberOfEditableFields = document.querySelectorAll(".editable").length;
        for(var i = 0; i < numberOfEditableFields; i++){
            document.querySelectorAll(".editable")[i].readOnly = true;
        }
        document.querySelector(".editableCategory").disabled = true;
    }
    /**A function that checks if any field is missing the user input  */
    const allFieldsHaveInput=()=>{
        var errorCount=0;
        if(fieldName("#postTitle").length==0)
        {
            highlightField("#postTitle");
            errorCount++;
        }
        if(fieldName("#author").length==0){
            highlightField("#author");
            errorCount++;
        }
        if(fieldName("#category").length==0){
            highlightField("#category");
            errorCount++;
        }
        if(fieldName("#image").length==0){
            highlightField("#image");
            errorCount++;
        }
        if(fieldName("#postContent").length==0){
            highlightField("#postContent");
            errorCount++;
        }

        if(errorCount>0)
        {
            return false;
        }else{
            return true;
        }
    }
    /**Updating the post */
    const onUpdateClicked=()=>{
        if(allFieldsHaveInput())
        {
            setSuccessBox(true);
            setErrorBox(false);
            setDisplayMessage('Post updated successfully');
            setEditMode(false);
            disableFields();

        }else{
            setErrorBox(true);
            setSuccessBox(false);
            setDisplayMessage('Please fill in all the fields');
        }
    }
    /**Enabling the update button when the edit button is clicked */
    const onEditClick = ()=>{
        setEditMode(true);
        enableFields();
    }
    console.log(receivedPost[0].image)
    return(
        <div>
            <AdministratorNavigation/>
            <div className="container-full center"> 
                <div className="col-xl-9 col-lg-9 col-md-12 col-sm-12 col-12">
                    <div className="card h-100"> 
                        <div className="card-body">
                            <div className="row gutters">

                                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                    <h2 className="mb-2 text-primary">Post Details</h2>
                                </div>
                                {
                                    successBox ? 
                                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 alert alert-success" role="alert">
                                        {displayMessage}
                                    </div>
                                    : errorBox ? 
                                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 alert alert-danger" role="alert">
                                        {displayMessage}
                                    </div>
                                    : ""
                                }

                                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-6 col-12">
                                    <div className="form-group" >
                                        <label htmlFor="postTitle">Post Title</label>
                                        <input type="text" className="form-control editable" id="postTitle" placeholder="Title" onChange={onTitleChange} readOnly value={receivedPost[0].title}/>
                                    </div>
                                </div>

                                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                    <div className="form-group">
                                        <label htmlFor="author">Author</label>
                                        <input type="text" className="form-control editable" id="author" placeholder="Author" onChange={onAuthorChange} readOnly value={receivedPost[0].author}/>
                                    </div>
                                </div>

                                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                    <div className="form-group">
                                        <label htmlFor="category">Post Category</label>
                                        <select type="text" className="form-control editableCategory" id="category" onChange={onCategoryChange} disabled>
                                            <option value="">Please select post category</option>
                                            {receivedPost[0].category=="Main Post"?  
                                                <option value="Main Post" selected>Main Post</option> 
                                                :
                                                <option value="Main Post">Main Post</option>
                                            }
                                            {receivedPost[0].category=="Side Post"?  
                                                <option value="Side Post" selected>Side Post</option> 
                                                :
                                                <option value="Side Post">Side Post</option>
                                            }
                                            {receivedPost[0].category=="Bottom Post"?  
                                                <option value="Bottom Post" selected>Bottom Post</option> 
                                                :
                                                <option value="Bottom Post">Bottom Post</option>
                                            }
                                        </select>
                                    </div>
                                </div>

                                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                    <div className="form-group">
                                        {
                                            editMode ? 
                                            <React.Fragment>
                                                <label htmlFor="image">Image</label>
                                                <input type="file" className="form-control-file" id="image" onChange={onImageChange}/>
                                            </React.Fragment>
                                            :
                                                <img src={receivedPost[0].image} alt="post image"/>
                                        }
                                        
                                    </div>
                                </div>

                                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                    <div className="form-group">
                                        <label htmlFor="postContent">Content</label>
                                        <textarea type="text" className="form-control editable" id="postContent" rows="10" placeholder="Please insert or type post content here" onChange={onContentChange} readOnly value={receivedPost[0].content}></textarea>
                                    </div>
                                </div>
        
                            </div>

                            <div className="row gutters">
                                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                    <div className="text-right">
                                        {
                                            editMode ? 
                                            <button type="button" id="submit" name="submit" className="btn btn-primary" onClick={onUpdateClicked}> Update Post </button>
                                            :
                                            <button type="button" id="submit" name="submit" className="btn btn-secondary" onClick={onEditClick}> Edit Post </button>
                                        }
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    )
}

export default PostDetail;