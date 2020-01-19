import React, { Component } from 'react';
import { connect } from 'react-redux';
import { findTodo } from './Store';
import searchIcon from './icon/search.png';


class FindForm extends Component {
  input = {
    fontSize:"16pt",
    color:"#006",
    padding:"0px",
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
      <div>
        <img src={searchIcon} alt="search" />
        <input type="text" size="10" onChange={this.doChange}
        style={this.input} value={this.state.message} />
      </div>
    );
  }
}
export default connect((state)=>state)(FindForm);