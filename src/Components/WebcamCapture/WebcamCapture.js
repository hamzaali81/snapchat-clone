import React,{ useCallback,useState } from 'react';
import Webcam from "react-webcam";
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
import { useDispatch } from 'react-redux';
import { setCameraImage } from '../../features/cameraSlice';
import { useHistory } from "react-router-dom";

import './webcamCapture.css';

const videoConstraints = {
    width: 250,
    height: 400,
    facingMode: "user"
  };

function WebcamCapture() {
    const webcamRef = React.useRef(null);
    const dispatch = useDispatch();
    const history = useHistory();
    // BEM naming
 
    const [ image,setImage ] = useState(null);
    
    const capture = useCallback(()=> {
        const imageSrc = webcamRef.current.getScreenshot();
        // console.log(imageSrc);
        dispatch(setCameraImage(imageSrc));
        // setImage(imageSrc);
        
        history.push('/preview');
        
    },[webcamRef]);

    return (
        <div className="webcamCapture">
             <Webcam
        audio={false}
        height={videoConstraints.height}
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
