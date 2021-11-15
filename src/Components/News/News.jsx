import React from 'react';
import s from './News.module.css';
import { Field, reduxForm } from 'redux-form';
import { required } from '../../utils/Validators/Validator'
import { TextArea } from '../common/FormsControls/FormsControls';
import { useState } from 'react';

const Users = (props) => {
  return (
    <div>
      <div className = {s.nameData}>
        {props.name}
        {/* {props.date} */}
      </div>
    </div>
  )
}


const MyPostForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field
          validate={[required]}
          placeholder={'Введите ФИО'}
          name={'newUserBody'}
          component={TextArea} />
      </div>
      <div>
        <Field
          validate={[required]}
          placeholder={'Введите Дату рождения dd.mm.yyyy'}
          name={'newDataBody'}
          component={TextArea} />
      </div>
      <div>
        <button>Добавить пользователя</button>
      </div>
    </form>
  )
}

const PostReduxForm = reduxForm({ form: 'AddMessageForm' })(MyPostForm)

const News = (props) => {

  console.log('props.arr')
  console.log(props.arr)

  let [sortMode, setSortMode] = useState(false);

  const activateSortMode = () => {
    setSortMode(true);
  }

  const deactivateSortMode = () => {
    setSortMode(false);
  }

  let usersElement;

  if (sortMode) {
    const pattern = /(\d{2})\.(\d{2})\.(\d{4})/;
    let usersElementBySort = props.arr.map(el => {
      return { ...el, date: new Date(el.date.replace(pattern, '$3-$2-$1')) }
    }).sort(dateSort);

    function dateSort(a, b) {
      return a.date - b.date;
    }
    usersElement = usersElementBySort.map(p => <Users name={p.name} date={p.date} />);
  }

  if (!sortMode) { usersElement = props.arr.map(p => <Users name={p.name} date={p.date} />); }

  let addNewPost = (values) => {
    props.addUserActionCreator(values.newUserBody, values.newDataBody);
    values.newUserBody = '';
    values.newDataBody = '';
  }

  return <div>
    <div> Имя пользователя </div>
    <div>
      <PostReduxForm onSubmit={addNewPost} />
    </div>
    <div>
      <div className={s.user}>
        Список пользователей
       </div>
      <div className={s.users}>
        {usersElement}
      </div>
    </div>
    {!sortMode &&
      <div>
        <button onClick={activateSortMode} >Сортировать по дате </button>
      </div>}
    {sortMode &&
      <div>
        <button onClick={deactivateSortMode} >Отменить сортировку по дате </button>
      </div>}
  </div>
}

export default News;


