import React from 'react';
import locIcon from '../assets/locationicon.png'; // Tell webpack this JS file uses this image

function LocIcon() {
  return <img src={locIcon} alt="location icon" width={50} />;
}

export default LocIcon;
