import * as React from 'react';
import { useState, useEffect } from 'react';
import s from './RightContent.module.css';
import { connect } from 'react-redux';
import { compose } from 'redux';


const RightContent = (props) => {
   const [capc, setCapc] = useState(null);

   useEffect(() => {
      // Обновляем заголовок документа с помощью API браузера
      
    });

   return (
      <div>

      </div>
   )
}

let mapStateToProps = (state) => {
   return state
 }

export default compose(connect(mapStateToProps
   )) (RightContent)



