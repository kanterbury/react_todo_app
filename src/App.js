import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import Todo from './todo/Todo';
import AddForm from './todo/AddForm';
import FindForm from './todo/FindForm';

// Appコンポーネント
class App extends Component {

  constructor(props){
    super(props);
  }

  render() {
    return (
      <div>
        <h1>Todo</h1>
        <AddForm />
        <hr />
        <FindForm />
        <Todo />
      </div>
    );
  }
}


export default connect()(App);