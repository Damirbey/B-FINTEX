import React from 'react';
import AdministratorNavigation from '../../AdminNavigation/AdministratorNavigation';

const AddNewPost = ()=>{
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
                                {/*
                                    successBox ? 
                                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 alert alert-success" role="alert">
                                        {displayMessage}
                                    </div>
                                    : errorBox ? 
                                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 alert alert-danger" role="alert">
                                        {displayMessage}
                                    </div>
                                    : ""*/
                                }

                                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-6 col-12">
                                    <div className="form-group" >
                                        <label for="postTitle">Post Title</label>
                                        <input type="text" className="form-control" id="postTitle" placeholder="Title"/>
                                    </div>
                                </div>

                                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                    <div className="form-group">
                                        <label for="author">Author</label>
                                        <input type="text" className="form-control" id="author" placeholder="Author"/>
                                    </div>
                                </div>

                                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                    <div className="form-group">
                                        <label for="category">Post Category</label>
                                        <select type="text" className="form-control" id="category">
                                            <option value="">Please select post category</option>
                                            <option value="Main Post">Main Post</option>
                                            <option value="Side Post">Side Post</option>
                                            <option value="Bottom Post">Bottom Post</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                    <div className="form-group">
                                        <label for="image">Image</label>
                                        <input type="file" className="form-control-file" id="image" />
                                    </div>
                                </div>

                                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                    <div className="form-group">
                                        <label for="postContent">Content</label>
                                        <textarea type="text" className="form-control" id="postContent" rows="10" placeholder="Please insert or type post content here"></textarea>
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