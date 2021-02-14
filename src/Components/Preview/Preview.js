import React from 'react'
import { useSelector,useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { selectCameraImage,resetCameraImage } from '../../features/cameraSlice';

import CloseIcon from '@material-ui/icons/Close';
import TextFieldsIcon from '@material-ui/icons/TextFields';
import CreateIcon from '@material-ui/icons/Create';
import NoteIcon from '@material-ui/icons/Note';
import MusicNoteIcon from '@material-ui/icons/MusicNote';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import CropIcon from '@material-ui/icons/Crop';
import TimerIcon from '@material-ui/icons/Timer';
import SendIcon from '@material-ui/icons/Send';

import './Preview.css';
import { v4 as uuidv4 } from 'uuid';



function Preview() {
    const cameraImage  = useSelector(selectCameraImage);
    const history = useHistory();
    const dispatch = useDispatch();

    useHistory(() => {
        if(!cameraImage){
            history.replace("/");
        }
    }, [cameraImage,history])

    const closePreview = () =>{
        dispatch(resetCameraImage);
        // history.replace('/');
    }

    const sendPost = ()=> {
        const id = uuidv4(); // ⇨ '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d'
        console.log(id);
    }

    return (
        <div className="preview">
           <CloseIcon onClick={closePreview} className="preview__close"/>
           <div className="preview__toolbarRight ">
              <TextFieldsIcon />
              <CreateIcon />
              <NoteIcon />
              <MusicNoteIcon />
              <AttachFileIcon />
              <CropIcon />
              <TimerIcon />
           </div>
           <img src={cameraImage} alt="Preview-screenshot" />
        <div onClick={sendPost} className="preview__footer">
           <h2>Send Now</h2>
           <SendIcon fontSize="small" className="preview__sendIcon" />
        </div>
        </div>
    )
}

export default Preview;
