import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import Todo from './todo/Todo';
import Done from './todo/Done'
import AddForm from './todo/AddForm';
import FindForm from './todo/FindForm';
import Detail from './todo/Detail';

// Appコンポーネント
class App extends Component {

  constructor(props){
    super(props);
  }

  render() {
    return (
      <div>
        <h1 className="title">Todo</h1>
        <AddForm />
        <hr />
        <FindForm />
        <hr />
        <Todo />
        <hr />
        <Done />
        <Detail />
      </div>
    );
  }
}


export default connect()(App);