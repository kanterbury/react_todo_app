import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deleteTodo, doneTodo } from './Store';


class Item extends Component {

  todo_title = {
    fontSize:"20pt",
  }

  deadline = {
    fontSize:"10pt",
    padding:"0px 5px",
    color:"gray",
  }

  th = {
    fontSize:"14pt",
    backgroundColor:"blue",
    color:"white",
    padding:"5px 10px",
    width:"50px"
  }
  td = {
    fontSize:"14pt",
    backgroundColor:"white",
    color:"darkblue",
    padding:"5px 10px",
    border:"1px solid lightblue",
    minWidth:"300px"
  }
  date = {
    fontSize:"14pt",
    backgroundColor:"white",
    color:"darkblue",
    padding:"5px 10px",
    border:"1px solid lightblue",
    width:"80px"
  }
  button = {
    fontSize:"14pt",
    backgroundColor:"white",
    color:"darkblue",
    padding:"5px 10px",
    border:"1px solid lightblue",
    width:"80px"
  }
  btn = {
    fontSize:"14pt",
    color:"#006",
    padding:"2px 10px"
  }

  constructor(props){
    super(props);

    this.doDone = this.doDone.bind(this);
    this.doDelete = this.doDelete.bind(this);
  }

  doDelete(){
    let action = deleteTodo(this.props.index);
    this.props.dispatch(action);
  }

  doDone(){
    let action = doneTodo(this.props.index);
    this.props.dispatch(action);
  }


  // render(){
  //   let d = this.props.value.created;
  //   let f = d.getHours() + ':' + d.getMinutes() + ':' + d.getSeconds();
  //   return (
  //   <tr>
  //     <td>{this.props.value.message}</td>
  //     <td>{f}</td>
  //     <td><button class="button is-primary" onClick={this.doDone}>Done</button></td>
  //     <td><button class="button" onClick={this.doDelete}>Del</button></td>
  //   </tr>
  //   );
  // }

  render(){
    let d = this.props.value.created;
    let f = d.getHours() + ':' + d.getMinutes() + ':' + d.getSeconds();
    return (
    <li>
      <nav class="level">
        <div class="level-left">
          <div>
            <div style={this.todo_title}>
              {this.props.value.message}
            </div>
            <div style={this.deadline}>
            {f}まで
            </div>
          </div>
        </div>
        <div class="level-right">
          <button class="button is-primary" onClick={this.doDone}>Done</button>
          <button class="button" onClick={this.doDelete}>Del</button>
        </div>
      </nav>
    </li>
    );
  }
}
export default connect()(Item);