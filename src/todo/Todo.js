import React, { Component } from 'react';
import { connect } from 'react-redux';


import Item from './Item';


class Todo extends Component {


  render(){
    let todoList;
    let n = 0;
    switch (this.props.mode){
      case 'default':
      todoList = this.props.todoList.map((value)=>(
        <Item key={value.message} value={value} index={n++} />
      ));
      break;

      case 'find':
      todoList = this.props.fTodoList.map((value)=>(
        <Item key={value.message} value={value} index={n++}/>
      ));
      break;


      case 'delete':
      todoList = this.props.todoList.map((value)=>(
        <Item key={value.message} value={value} index={n++} />
      ));
      break;


      default:
      todoList = this.props.todoList.map((value)=>(
        <Item key={value.message} value={value} index={n++} />
      ));
    }
    return (
      <table><tbody>{todoList}</tbody></table>
    );
  }
}
export default connect((state)=>state)(Todo);