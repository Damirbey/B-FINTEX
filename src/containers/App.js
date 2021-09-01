import React, {Component} from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Navigation from '../components/Navigation/Navigation';
import Wrapper from '../components/Wrapper/Wrapper';
import HomeScreen from '../components/HomeScreen/HomeScreen';
import AboutScreen from '../components/AboutScreen/AboutScreen';
import NewsLettersScreen from '../components/NewsLettersScreen/NewsLettersScreen';
import PostScreen from '../components/PostScreen/PostScreen';
import Footer from '../components/Footer/Footer';
import SignIn from '../components/SignInScreen/SignIn';
import Register from '../components/Register/Register';

class App extends Component{
  render()
  {
    return(
      <React.Fragment>
        <BrowserRouter>
          <Navigation/>
          <Wrapper>
              <Route path="/B-FINTEX" component={HomeScreen} exact/>
              <Route path="/About" component={AboutScreen}/>
              <Route path="/posts/:id" component={PostScreen}/>
              <Route path="/Newsletters" component={NewsLettersScreen}/>
              <Route path="/SignIn" component={SignIn}/>
              <Route path="/Register" component={Register}/>
              <Footer/>
          </Wrapper>
        </BrowserRouter>
      </React.Fragment>
    )
  }
}

export default App;