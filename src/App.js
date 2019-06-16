import React, {Component} from 'react';
import './App.css';

import Person from './Person/Person';

class App extends Component{
  render(){
  return (
    <div className="App">
     <h1>React - The Complete Guide (incl Hooks, React Router, Redux)</h1>
     <Person name="MAx" age="28"/>
     <Person name="Manu" age="29"> My hobbies: Racing </Person>
     <Person name="Stephanie" age="25"/>
    </div>
  );
  // return React.createElement('div', {className:'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default App;
