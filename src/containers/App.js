import React, {Component} from 'react';
import Navigation from '../components/Navigation/Navigation';
import Wrapper from '../components/Wrapper/Wrapper';
import HomeScreen from '../components/HomeScreen/HomeScreen';
import Footer from '../components/Footer/Footer';

class App extends Component{
  render()
  {
    return(
      <React.Fragment>
          <Navigation/>
          <Wrapper>
              <HomeScreen/>
              <Footer/>
          </Wrapper>
      </React.Fragment>
    )
  }
}

export default App;