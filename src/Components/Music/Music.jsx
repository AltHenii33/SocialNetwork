import React from 'react';
import s from './Music.module.css';

const Music = () => {

  return <div className={s.wrapper}>  
      <div class={s.item1}>PlayList
      <audio src="https://oxy.sunproxy.net/file/TnRDS2ZNZFhVeEFsaWZEazNjb0NtL1J6QWRPSmIxWk1sZzJ5MjZSekp0bHN6MGpWRnNDM1B2TVBlaWtoenVhTVJONzQ2bjUvdHZTQmhQc1N6blF5V3lIako2MGpxWG9BM21yOG1vc1F2TUE9/Dzhigan_-_Dni_i_Nochi_(Vuxo.click).mp3" controls></audio>
      </div>
      <div class={s.item2}>Item 2</div>
    </div>
}

export default Music;