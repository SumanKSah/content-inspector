import { Component } from 'react';
import './App.css';
import TestBuddy from './components/TestBuddy/TestBuddy';
import IconHome from './IconHome';

class App extends Component{
  constructor() {
    super();
    this.state = {
      isMinimized: true,
    }
  }

  iconClickHandler = () => {
    this.setState({
      isMinimized: false
    })
  }

  render() {
    const {isMinimized} = this.state;
    return (
      <div className="App">
        {
          isMinimized 
            ?
            <div 
              onClick={()=> {
                this.iconClickHandler();
              }}
            > 
              <IconHome />
            </div>
            : 
            <TestBuddy />
        }
      </div>
    );
  }
}

export default App;



