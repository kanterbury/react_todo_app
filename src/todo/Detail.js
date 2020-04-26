import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deleteTodo, doneTodo } from './Store';
import ClassNames from 'classnames';

class Detail extends Component {

  render(){
    return(
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
    )
  }
}
