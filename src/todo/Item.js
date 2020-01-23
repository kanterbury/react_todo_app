import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deleteTodo, doneTodo } from './Store';


class Item extends Component {

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


  render(){
    let d = this.props.value.created;
    let f = d.getHours() + ':' + d.getMinutes() + ':' + d.getSeconds();
    return (
    <tr><th style={this.th}>No, {this.props.index}</th>
      <td style={this.td}>{this.props.value.message}</td>
      <td style={this.date}>{f}</td>
      <td style={this.button}><button style={this.btn} onClick={this.doDone}>Done</button></td>
      <td style={this.button}><button style={this.btn} onClick={this.doDelete}>Del</button></td>
    </tr>
    );
  }
}
export default connect()(Item);