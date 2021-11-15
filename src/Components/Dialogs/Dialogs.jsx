import React from 'react';
import s from './Dialogs.module.css';
import { NavLink } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';
import { TextArea } from '../common/FormsControls/FormsControls';
import {required, maxLengthCreator} from '../../utils/Validators/Validator'

const DialogItem = (props) => {

  let path = "/dialogs/" + props.id;
  return (
    <div className={s.items + ' ' + s.active}>
      <NavLink to={path}>{props.name} </NavLink>
    </div>
  )
}

const Message = (props) => {

  return (
    <div className={s.messages}>{props.message}</div>

  )
}

const maxLength20 = maxLengthCreator(20);

const addMessageForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field 
        component={TextArea} 
        name='newMessageBody' 
        placeholder={'Enter your massage'} 
        validate = {[required, maxLength20]}/>
      </div>
      <div>
      <button >Add Message</button>
      </div>
    </form>
  )
}

const MessageReduxForm = reduxForm({form:'dialogAddMessageForm'})(addMessageForm)

const Dialogs = (props) => {

  const addNewMessage =(values) => {
    props.addMessageActionCreator(values.newMessageBody);
    values.newMessageBody = '';
}

  let DialogElements = props.DialogData.map(d => <DialogItem name={d.name} key={d.id} id={d.id} img={d.img} />);
  let MessageElements = props.MessageData.map(m => <Message message={m.message} key={m.id} />);

  return <div className={s.dialogs}>
    <div className={s.items}>
      {DialogElements}

    </div>
    <div className={s.messages}>
      {MessageElements}
    </div>
    <MessageReduxForm onSubmit={addNewMessage}/>
  </div>
}


export default Dialogs;