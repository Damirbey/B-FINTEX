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

class App extends Component{
  constructor(){
    super();
    this.state={
      isLoggedIn:false,
      user:"",
      route:""
    }
  }

  changeIsLoggedInState=()=>{
    this.setState({isLoggedIn:true})
  }
  
  changeUserState=(newState)=>{
    this.setState({user:newState});   
  }

  logOut=()=>{
    this.setState({isLoggedIn:false});
    this.setState({user:""});
  }

  render()
  {
    const {isLoggedIn,user} = this.state;
    return(
      <React.Fragment>
        <BrowserRouter>
          <Navigation isLoggedIn={isLoggedIn} user={user} logOut={this.logOut}/>
          <Wrapper>
              <Route exact path="/B-FINTEX" component={HomeScreen}/>
              <Route exact path="/About" component={AboutScreen}/>
              <Route exact path="/posts/:id" component={PostScreen}/>
              <Route exact path="/Newsletters" component={NewsLettersScreen}/> 
              <Switch>
                <Route path="/AdminPanel" render={() => (!isLoggedIn ||user.id!==2 ? <Redirect to="/B-FINTEX" /> : <AdminPanel />)} />
                <Route path="/SignIn" render={() => (isLoggedIn ? <Redirect to="/B-FINTEX" /> : <SignIn changeIsLoggedInState={this.changeIsLoggedInState} changeUserState={this.changeUserState} isLoggedIn={isLoggedIn}/>)} />
                <Route path="/Register" render={() => (isLoggedIn ? <Redirect to="/B-FINTEX" /> : <Register changeIsLoggedInState={this.changeIsLoggedInState} changeUserState={this.changeUserState} isLoggedIn={isLoggedIn} />)} />
              </Switch>
              <Footer/>
          </Wrapper>
        </BrowserRouter>
      </React.Fragment>
    )
  }
}

export default App;