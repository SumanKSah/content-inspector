import { Component, useEffect } from 'react';
import './App.css';
import TestBuddy from './components/TestBuddy/TestBuddy';
import IconHome from './IconHome';

class App extends Component{
  constructor() {
    super();
    this.state = {
      isMinimized: true,
      objectUpdated: 0
    }
  }

  componentDidMount = () => {
    window.addEventListener("message", (data) => {
      if(data?.data?.message === "testBuddyObjectUpdate") {
        window.wfxTestBuddyData = data?.data?.obj;
        const curr = this.state.objectUpdated;
        this.setState({
          objectUpdated: curr+1
        });
      }
      if(data?.data?.message === "testBuddyMessageResult") {
        window.wfxTestBuddyResponse = data?.data?.obj;
        const curr = this.state.objectUpdated;
        this.setState({
          objectUpdated: curr+1
        });
      }
    })
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
              test={this.state.objectUpdated}
              minimizeClickHandler={this.crossIconClickHandler}
            />
        }
      </div>
    );
  }
}

export default App;



