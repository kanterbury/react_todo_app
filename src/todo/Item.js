import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deleteTodo, doneTodo } from './Store';
import ClassNames from 'classnames';


class Item extends Component {

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

  createDate = {
    fontSize:"10pt",
    padding:"0px 5px",
    color:"gray",
  }

  constructor(props){
    super(props);
    this.state={
      isModalActive: false,
    }

    this.doDone = this.doDone.bind(this);
    this.doDelete = this.doDelete.bind(this);
    this.doOpenDetail = this.doOpenDetail.bind(this);
  }

  doDelete(){
    let action = deleteTodo(this.props.index);
    this.props.dispatch(action);
  }

  doDone(){
    let action = doneTodo(this.props.index);
    this.props.dispatch(action);
  }

  doOpenDetail(){
    
     this.setState({
       isModalActive: true
     });
  }

  render(){
    let d = this.props.value.created;
    let f = d.getHours() + ':' + d.getMinutes() + ':' + d.getSeconds();

    const classNameForModal = ClassNames({
      "modal": true,
      "is-active": this.state.isModalActive
    })
    const classNameForDoneButton = ClassNames({
      "button": true,
      "is-primary": true,
      "is-hidden": this.props.isDone,
    })
    return (
    <li>
      <nav className="level">
        <div className="level-left" style={this.todo_title_box}>
          < div style = {{width: "100%"}}>
            <div id={this.props.value.message} style={this.todo_title} onClick={this.doOpenDetail}>
              {this.props.value.message}
            </div>
            <div style={this.createDate}>
            {f}に作成
            </div>
          </div>
        </div>
        <div className="level-right">
          <button className={classNameForDoneButton} onClick={this.doDone}>Done</button>
          <button className="button" onClick={this.doDelete}>Del</button>
        </div>
      </nav>
    </li>
    );
  }
}
export default connect()(Item);