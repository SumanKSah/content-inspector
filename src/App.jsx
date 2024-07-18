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
    }, ()=> {
      window.top.postMessage("$#@maximize-wfx-test-buddy:", "*");
    })
  }

  crossIconClickHandler = () => {
    this.setState({
      isMinimized: true
    }, ()=> {
      window.top.postMessage("$#@minimize-wfx-test-buddy:", "*");
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
            <TestBuddy 
              minimizeClickHandler={this.crossIconClickHandler}
            />
        }
      </div>
    );
  }
}

export default App;



