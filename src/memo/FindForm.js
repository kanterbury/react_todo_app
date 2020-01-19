import React, { Component } from 'react';
import { connect } from 'react-redux';
import { findTodo } from './Store';


class FindForm extends Component {
  input = {
    fontSize:"14pt",
    color:"#006",
    padding:"0px",
  }
  btn = {
    fontSize:"12pt",
    color:"#006",
    padding:"1px 10px",
  }

  constructor(props){
    super(props);
    this.state = {}
    this.doChange = this.doChange.bind(this);
  }


  doChange(e){
    let action = findTodo(e.target.value);
    this.props.dispatch(action);
  }

  render(){
    return (
      <input type="text" size="10" onChange={this.doChange}
        style={this.input} value={this.state.message} />
    );
  }
}
export default connect((state)=>state)(FindForm);