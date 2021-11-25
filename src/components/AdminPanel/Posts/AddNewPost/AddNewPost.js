import React ,{useState} from 'react';
import AdministratorNavigation from '../../AdminNavigation/AdministratorNavigation';

const AddNewPost = ()=>{

    /**Declaring field variables using hooks to fetch the values entered */
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    //const [category, setCategory] = useState('');
    const [image, setImage] = useState('');
    const [content, setContent] = useState('');
    const [successBox, setSuccessBox] = useState(false);
    const [errorBox, setErrorBox] = useState(false)
    const [displayMessage, setDisplayMessage] = useState('');

    /** Declaring onChange functions for every field on the form */
    const onTitleChange = (event)=>{
        setTitle(event.target.value);
        resetField("#postTitle");
    }

    const onAuthorChange = (event)=>{
        setAuthor(event.target.value);
        resetField("#author");
    }

    /* const onCategoryChange = (event)=>{
        setCategory(event.target.value);
        resetField("#category");
    }
    */
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
        /*if(fieldName("#category").length==0){
            highlightField("#category");
            errorCount++;
        }*/
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
    /**Submitting the post */
    const onSubmit=()=>{
        if(allFieldsHaveInput())
        {
            fetch('http://localhost:3000/addNewPost',{
                method:'post',
                headers:{'Content-Type':'multipart/form-data'},
                body:JSON.stringify({
                    postTitle:title,
                    postAuthor:author,
                    postImage:image,
                    postContent:content
                })
            }).then(response=>response.json())
            .then(receivedMessage=>{
                if(receivedMessage!='Error')
                {   
                    setSuccessBox(true);
                    setErrorBox(false);
                    setDisplayMessage('Post added successfully');
                }
                else{
                    setErrorBox(true);
                    setSuccessBox(false);
                    setDisplayMessage('Post added successfully');
                }
            })
            
        }else{
            setErrorBox(true);
            setSuccessBox(false);
            setDisplayMessage('Please fill in all the fields');
        }
    }

    return(
        <div>
            <AdministratorNavigation/>
            <div className="container-full center"> 
                <div className="col-xl-9 col-lg-9 col-md-12 col-sm-12 col-12">
                    <div className="card h-100"> 
                        <div className="card-body">
                            <div className="row gutters">

                                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                    <h2 className="mb-2 text-primary">Add New Post</h2>
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
                                        <label for="postTitle">Post Titlee</label>
                                        <input type="text" className="form-control" id="postTitle" placeholder="Title" onChange={onTitleChange}/>
                                    </div>
                                </div>

                                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                    <div className="form-group">
                                        <label for="author">Author</label>
                                        <input type="text" className="form-control" id="author" placeholder="Author" onChange={onAuthorChange}/>
                                    </div>
                                </div>
                               { /*<div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                    <div className="form-group">
                                        <label for="category">Post Category</label>
                                        <select type="text" className="form-control" id="category" onChange={onCategoryChange}>
                                            <option value="">Please select post category</option>
                                            <option value="Main Post">Main Post</option>
                                            <option value="Side Post">Side Post</option>
                                            <option value="Bottom Post">Bottom Post</option>
                                        </select>
                                    </div>
                                </div>*/
                                }
                                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                    <div className="form-group">
                                        <label for="image">Image</label>
                                        <input type="file" className="form-control-file" name="pic" id="image" onChange={onImageChange}/>
                                    </div>
                                </div>

                                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                    <div className="form-group">
                                        <label for="postContent">Content</label>
                                        <textarea type="text" className="form-control" id="postContent" rows="10" placeholder="Please insert or type post content here" onChange={onContentChange}></textarea>
                                    </div>
                                </div>
        
                            </div>

                            <div className="row gutters">
                                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                    <div className="text-right">
                                        <button type="button" id="submit" name="submit" className="btn btn-primary" onClick={onSubmit}> Add Post </button>
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

export default AddNewPost;