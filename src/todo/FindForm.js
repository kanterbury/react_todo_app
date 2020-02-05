import React, { Component } from 'react';
import { connect } from 'react-redux';
import { findTodo } from './Store';


class FindForm extends Component {

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
      <div className="columns">
        <div className="column is-half field">
          <p className="control has-icons-left">
            <input className="input" type="text" onChange={this.doChange}  value={this.state.message} />
            <span className="icon is-small is-left">
            <i className="fas fa-search"></i>
          </span>
          </p>
        </div>
      </div>
    );
  }
}
export default connect((state)=>state)(FindForm);