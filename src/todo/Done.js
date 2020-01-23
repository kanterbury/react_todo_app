import React, { Component } from 'react';
import { connect } from 'react-redux';

import DoneItem from './DoneItem';

class Done extends Component {

  render(){
    let doneList;
    let n = 0;
    console.log(this.props.doneList);

    doneList = this.props.doneList.map((value)=>(
      <DoneItem key={value.message} value={value} index={n++} />
    ));
    return(
      <table><tbody>{doneList}</tbody></table>
    );
  }
}
export default connect((state)=>state)(Done)