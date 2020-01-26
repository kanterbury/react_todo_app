import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import Todo from './todo/Todo';
import Done from './todo/Done'
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
        <h1 class="title">Todo</h1>
        <AddForm />
        <hr />
        <FindForm />
        <Todo />
        <hr />
        <Done />
      </div>
    );
  }
}


export default connect()(App);