import React,{ useCallback,useState } from 'react';
import Webcam from "react-webcam";
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';

import './webcamCapture.css';

const videoConstraints = {
    width: 250,
    height: 400,
    facingMode: "user"
  };

function WebcamCapture() {
    const webcamRef = React.useRef(null);
    const [ image,setImage ] = useState(null);
    
    const capture = useCallback(()=> {
        const imageSrc = webcamRef.current.getScreenshot();
        console.log(imageSrc);
        setImage(imageSrc);
       
    },[webcamRef]);

    return (
        <div className="webcamCapture">
             <Webcam
        audio={false}
        height={720}
        ref={webcamRef}
        screenshotFormat="image/jpeg"
        // width={1280}
        width={videoConstraints.width}
        videoConstraints={videoConstraints}
      />

      <RadioButtonUncheckedIcon 
      className="webcamCapture__button"
      onClick={capture}
      fontSize="large"
      />
 
      <img src={image} alt=""/> 
  
        </div>
    )
}

export default WebcamCapture;
