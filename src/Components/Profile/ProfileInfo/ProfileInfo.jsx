import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from '../../common/Preloader';
import ProfileStatus from './ProfileStatus';
import ProfileStatusWithHooks from './ProfileStatusWithHooks';
import SimpleImageSlider from "react-simple-image-slider";




const ProfileInfo = (props) => {

  if (!props.profile) {
    return <Preloader/>
  }

  const images = [
    { url: "https://n1s1.elle.ru/b4/22/05/b4220547cc9284354a0615d442406c49/728x546_1_8ebf9fc7d9abd6dc934095ecfbe237a0@1016x762_0xc35dbb80_10169127321522236626.jpg" },
    { url: "https://www.peoples.ru/images/interesting/interesting_201502041205180.jpg" },
    { url: "https://www.spletnik.ru/img/__post/4f/4fa72c931a76b5829cb974cef2cc7692_698.jpg" },
    { url: "https://lastmag.ru/wp-content/uploads/2020/04/emma.jpg" },
    { url: "https://www.publy.ru/wp-content/uploads/2013/09/712.jpg" },
    { url: "https://mport.ua/i/75/87/23/758723/2835e59f70f088ff5edc31d5303e0c93-quality_70Xresize_crop_1Xallow_enlarge_0Xw_1200Xh_643.jpg" },
  ];

  return <div className={s.Profile}>
    <div className ={s.picture}>
      {/* <img src='https://klike.net/uploads/posts/2019-06/1561182204_1.jpg' /> */}
      <SimpleImageSlider
        width={1100}
        height={304}
        images={images}
        showBullets={true}
        showNavs={true}
        autoPlay={true}
        autoPlayDelay={2}
      />
    </div>
    <div>
      <img src={props.profile.photos.large} /> 
    </div>
    <div>
    {props.profile.fullName}
    </div>
    <div>
      <ProfileStatusWithHooks
      status={props.status}
      updateStatus={props.updateStatus} />
    </div>
  </div>
}

export default ProfileInfo;