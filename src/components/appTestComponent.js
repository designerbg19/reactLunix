import React from 'react'



function AppTestComponent(props) {
    return (
      <div className="App">
        wellcom bob first component  
        <br/>
        { props.name +' '+ props.lastName }   
       <p>{props.children}</p>
      </div>
    );
  }

  export default AppTestComponent;