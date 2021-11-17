import React, {Component} from 'react';
import { BrowserRouter, Redirect, Route , Switch } from 'react-router-dom';
import Navigation from '../components/Navigation/Navigation';
import Wrapper from '../components/Wrapper/Wrapper';
import HomeScreen from '../components/HomeScreen/HomeScreen';
import AboutScreen from '../components/AboutScreen/AboutScreen';
import NewsLettersScreen from '../components/NewsLettersScreen/NewsLettersScreen';
import PostScreen from '../components/PostScreen/PostScreen';
import Footer from '../components/Footer/Footer';
import SignIn from '../components/SignInScreen/SignIn';
import Register from '../components/Register/Register';
import AdminPanel from '../components/AdminPanel/AdminPanel';
import Posts from '../components/AdminPanel/Posts/Posts';
import UserProfile from '../components/AdminPanel/Users/UserProfile/UserProfile';
import PostDetail from '../components/AdminPanel/Posts/PostDetail/PostDetail';
import AddNewPost from '../components/AdminPanel/Posts/AddNewPost/AddNewPost';

const initialState={
  isLoggedIn:false,
  user:""
}
class App extends Component{
  constructor(){
    super();
    this.state={
      isLoggedIn:false,
      user:"",
      userToUpdate:""
    }
  }
  changeIsLoggedInState=()=>{
    this.setState({isLoggedIn:true})
  }
  
  changeUserState=(newState)=>{
    this.setState({user:newState});   
  }

  logOut=()=>{
    this.setState(initialState)
  }

  updateUser=(user)=>{
    this.setState({userToUpdate:user});
  }

  render()
  {
    const {isLoggedIn,user} = this.state;
    return(
      
      <React.Fragment>
        <BrowserRouter>
          <Navigation isLoggedIn={isLoggedIn} user={user} logOut={this.logOut}/>
          <Wrapper>
              <Route exact path="/b-fintex" component={HomeScreen}/>
              <Route exact path="/about" component={AboutScreen}/>
              <Route exact path="/posts/:id" component={PostScreen}/>
              <Route exact path="/newsletters" component={NewsLettersScreen}/> 
              <Route path="/user/:id" render={(props)=><UserProfile userToUpdate={this.state.userToUpdate}/>}/>
              <Route exact path="/post/:id" component={PostDetail}/>
              <Switch>
                <Route path="/adminpanel" render={() => (isLoggedIn ||user.id == 1 ? <AdminPanel  updateUser={this.updateUser}/> : <Redirect to="/b-fintex" />)} />
                <Route path="/allposts" render={() => (isLoggedIn ||user.id == 1 ? <Posts /> : <Redirect to="/b-fintex" />)} />
                <Route path="/addpost" render={() => (isLoggedIn ||user.id == 1 ?  <AddNewPost /> : <Redirect to="/b-fintex" />)} />
                <Route path="/signIn" render={() => (isLoggedIn ? <Redirect to="/b-fintex" /> : <SignIn changeIsLoggedInState={this.changeIsLoggedInState} changeUserState={this.changeUserState} isLoggedIn={isLoggedIn}/>)} />
                <Route path="/register" render={() => (isLoggedIn ? <Redirect to="/b-fintex" /> : <Register changeIsLoggedInState={this.changeIsLoggedInState} changeUserState={this.changeUserState} isLoggedIn={isLoggedIn} />)} />
              </Switch>
              <Footer/>
          </Wrapper>
        </BrowserRouter>
      </React.Fragment>
    )
  }
}

export default App;