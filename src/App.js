import React, { Component } from 'react';
import MainNavigation from './component/includes/nav';
import './css/App.css';
import  SampleList from   './json/sample.json';

class App extends Component {
  render() {
    return (
      <div className="App">
        <MainNavigation></MainNavigation>
        <ViewList/>
      </div>
    );
  }
}

function ViewList(){
  var sample = SampleList.map((list) =>
    <li  key={list.id}>{list.first_name}</li>
  )
  return(
    sample
  );
}


export default App;
