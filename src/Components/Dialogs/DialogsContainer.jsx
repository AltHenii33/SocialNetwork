import React from 'react';
import { addMessageActionCreator } from '../../redux/Dialog-reduser';
import Dialogs from './Dialogs';
import { connect } from 'react-redux';
import { withAuthRedirect } from '../../hoc/AuthRedirect';
import { compose } from 'redux';



class DialogContainer extends React.Component {


  render (){

    return (
      <Dialogs {...this.props}
      DialogData={this.props.DialogData}
      MessageData={this.props.MessageData}
      NewMessageText={this.props.NewMessageText}
       />
    )
  }
}


let mapStateToProps = (state) => {
  return {
    DialogData: state.DialogPage.DialogData,
    MessageData: state.DialogPage.MessageData,
    NewMessageText: state.DialogPage.newMessageText
  }
}


export default compose(connect(mapStateToProps, 
  {addMessageActionCreator}),
  withAuthRedirect
  ) (DialogContainer)
