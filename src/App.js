import logo from './logo.svg';
import './App.css';
import React ,{ Component }from 'react'

import AppTestComponent from "./components/appTestComponent"
import Hello from "./components/hello"

 class App extends Component {
  render() {
    return(
    <div className="App">
      Class Difinition 
      {/* <AppTestComponent name="bahjet" lastName="Glida" /> */}
      <Hello value="passed props 2" />
      <AppTestComponent name="bahjet" lastName="Glida">
        DESCREPTIONS
      </AppTestComponent>
    </div>
    );
  }
}

export default App;
