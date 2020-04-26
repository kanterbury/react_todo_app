import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deleteTodo, doneTodo } from './Store';
import ClassNames from 'classnames';

class Detail extends Component {

  constructor(props){
    super(props);
  }

  detailBar = {
    textAlign: "left",
    position: "fixed",
    top: "0px",
    right: "0px",
    width: "320px",
    height: "100%",
    lineHeight: "42px",
    background: "silver",
    boxShadow: "0 0 15px black",
    padding: "10px 5px 0px 10px",
    // display: "none",
  }

  list = {
    listStyle: "none",
    padding: "0",
    fontWeight: "bold",
  }

  render(){

    return(
      <div style={this.detailBar}>
        <span className="modal-close">
            <i id="closeDetail" className="fas fa-2x fa-times"></i>
        </span>
      </div>
    )
  }
}
export default connect()(Detail);
