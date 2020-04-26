import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deleteDone } from './Store';
import ClassNames from 'classnames';


class DoneItem extends Component {

  todo_title_box = {
    width:"70%",
  }

  todo_title = {
    width: "100%",
    fontSize:"20pt",
    overflow:"hidden",
    whiteSpace: "nowrap",
    textOverflow: "ellipsis",
  }

  doneDate = {
    fontSize:"10pt",
    padding:"0px 5px",
    color:"gray",
  }

  constructor(props){
    super(props);
    this.state={
      isModalActive: false,
    }

    this.doDelete = this.doDelete.bind(this);
  }

  doDelete(){
    let action = deleteDone(this.props.index);
    this.props.dispatch(action);
  }

  render(){
    let d = this.props.value.created;
    let f = d.getHours() + ':' + d.getMinutes() + ':' + d.getSeconds();

    return (
    <li>
      <nav className="level">
        <div className="level-left" style={this.todo_title_box}>
          < div style = {{width: "100%"}}>
            <div id={this.props.value.message} style={this.todo_title} onClick={this.doOpenDetail}>
              {this.props.value.message}
            </div>
            <div style={this.doneDate}>
            {f}に完了
            </div>
          </div>
        </div>
        <div className="level-right">
          <button className="button" onClick={this.doDelete}>Del</button>
        </div>
      </nav>
    </li>
    );
  }
}
export default connect()(DoneItem);