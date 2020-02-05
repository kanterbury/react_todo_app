import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deleteTodo, doneTodo } from './Store';
import ClassNames from 'classnames';


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
    this.state={
      isModalActive: false
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
    return (
    <li>
      <nav className="level">
        <div className="level-left">
          <div>
            <div id={this.props.value.message} style={this.todo_title} onClick={this.doOpenDetail}>
              {this.props.value.message}
            </div>
            <div style={this.deadline}>
            {f}まで
            </div>
          </div>
        </div>
        <div className="level-right">
          <button className="button is-primary" onClick={this.doDone}>Done</button>
          <button className="button" onClick={this.doDelete}>Del</button>
        </div>
      </nav>
      <div className={classNameForModal}>
        <div className="modal-background"></div>
        <div className="modal-card">
          <header className="modal-card-head">
            <p className="modal-card-title">Modal title</p>
            <button className="delete" aria-label="close"></button>
          </header>
          <section className="modal-card-body">
            test
          </section>
         <footer className="modal-card-foot">
            <button className="button is-success">Save changes</button>
            <button className="button">Cancel</button>
          </footer>
        </div>
      </div>
    </li>
    );
  }
}
export default connect()(Item);