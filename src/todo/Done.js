import React, { Component } from 'react';
import { connect } from 'react-redux';

import DoneItem from './DoneItem';

class Done extends Component {

  todoList_area = {
    width: "50%"
  }

  render(){
    let doneList;
    let n = 0;
    
    switch(this.props.mode){
      case 'find':
        doneList = this.props.fDoneList.map((value)=>(
          <DoneItem key={value.message} value={value} index={n++} isDone={true} />
        ));
        break;

      default:
        doneList = this.props.doneList.map((value)=>(
          <DoneItem key={value.message} value={value} index={n++} isDone={true} />
        ));
    }

    return(
      <div style={this.todoList_area}>
        <ul>{doneList}</ul>
      </div>
    );
  }
}
export default connect((state)=>state)(Done)