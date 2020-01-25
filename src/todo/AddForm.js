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
      <form onSubmit={this.doAction}>
        <div className="field has-addons">
          <p className="control">
            <input className="input" type="text" size="40" onChange={this.doChange}
              value={this.state.message} required />
          </p>
          <p className="control">
             <button className="button is-info" >Add</button>
          </p>
        </div>
      </form>
    );
  }
}
export default connect((state)=>state)(AddForm);