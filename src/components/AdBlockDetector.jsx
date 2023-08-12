import React from 'react'



const AdBlockDetector = ({AdBlockDetected}) => {
  if(AdBlockDetected){
    return (
      <div className='ad-block-message'>
        <p>Please consider disabling your ad blocker to support our services</p>
      </div>
    );
  }
  return null;
} 

export default AdBlockDetector;