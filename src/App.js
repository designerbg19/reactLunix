import './App.css';
import React ,{ Component }from 'react'

import AppTestComponent from "./components/appTestComponent"
import Hello from "./components/hello"

 class App extends Component {
  render() {
    return(
    <div className="App">
      <h1>Class Definitions</h1>  
        {/* component class diff   */}
        <Hello value="passed props 2" />
        {/* component function diff  */}
        <AppTestComponent name="bahjet" lastName="Glida">
          <h2>DESCRIPTIONS</h2>
        </AppTestComponent>
    </div>
    );
  }
}

export default App;
