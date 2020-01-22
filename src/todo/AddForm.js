import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTodo } from './Store';


class AddForm extends Component {
  input = {
    fontSize:"16pt",
    color:"#006",
    padding:"1px",
    margin:"5px 0px"
  }
  btn = {
    fontSize:"16pt",
    color:"#006",
    padding:"2px 10px"
  }

  constructor(props){
    super(props);
    this.state = {
      message:''
    }
    this.doChange = this.doChange.bind(this);
    this.doAction = this.doAction.bind(this);
  }


  doChange(e){
    this.setState({
      message: e.target.value
    });
  }


  doAction(e){
    e.preventDefault();
    let action = addTodo(this.state.message);
    this.props.dispatch(action);
    this.setState({
      message: ''
    });
  }


  render(){
    return (
      <div>
        <p style={this.message}>{this.props.message}</p>
        <form onSubmit={this.doAction}>
        <input type="text" size="40" onChange={this.doChange}
          style={this.input} value={this.state.message} required />
        <button style={this.btn} onClick={this.doAction}>Add</button>
        </form>
      </div>
    );
  }
}
export default connect((state)=>state)(AddForm);