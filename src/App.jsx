import { Component } from 'react';
import './App.css';
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
            : []
        }
      </div>
    );
  }
}

export default App;



