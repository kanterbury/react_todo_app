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
    // return (
    //   <table className="table"><tbody>{todoList}</tbody></table>
    // );

    return (
      <div style={this.todoList_area}>
        <ul>{todoList}</ul>
      </div>
    );
  }
}
export default connect((state)=>state)(Todo);