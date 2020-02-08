import React, { Component } from 'react';
import { connect } from 'react-redux';


import Item from './Item';


class Todo extends Component {

  todoList_area = {
    width:"50%"
  }

  render(){
    let todoList;
    let n = 0;
    // console.log(this.props.todoList);

    switch (this.props.mode){
      case 'find':
      todoList = this.props.fTodoList.map((value)=>(
        <Item key={value.message} value={value} index={n++} isDone={false} />
      ));
      break;

      default:
      todoList = this.props.todoList.map((value)=>(
        <Item key={value.message} value={value} index={n++} isDone={false} />
      ));
    }

    return (
      <div style={this.todoList_area}>
        <ul>{todoList}</ul>
      </div>
    );
  }
}
export default connect((state)=>state)(Todo);