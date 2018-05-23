import React, { Component } from 'react';
import './App.css';

import Editor from './Editor';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React-HyperMD Demo</h1>
        </header>
        <div className="EditorContainer">
          <Editor />
        </div>
      </div>
    );
  }
}

export default App;
