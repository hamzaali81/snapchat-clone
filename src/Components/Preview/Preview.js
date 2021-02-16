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
import { storage,db } from '../../firebase';
import firebase from 'firebase';
import './Preview.css';
import { v4 as uuidv4 } from 'uuid';
import { selectUser } from '../../features/appSlice';



function Preview() {
    const cameraImage  = useSelector(selectCameraImage);
    const history = useHistory();
    const dispatch = useDispatch();
    const user = useSelector(selectUser);
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
        // console.log(id);
        const uploadTask = storage
        .ref(`posts/${id}`)
        .putString(cameraImage, "data_url");

        uploadTask.on('state_changed', null, (error)=> {
            // Error function
            console.log(error);
        }, ()=> {
            // COMPLETE function
            storage
            .ref('posts')
            .child(id)
            .getDownloadURL()
            .then((url) => {
              // Insert url into an <img> tag to "download"
              db.collection("post").add({
                  imageUrl: url,
                  username: 'hamza',
                  read: false,
                  profilePic: user.profilePic,
                  timestamp: firebase.firestore.FieldValue.serverTimestamp() 
              });
              history.replace('/chats');
              console.log(history.replace('/chats'));
              console.log(url);
            })
            .catch((error) => {
            console.log(error);
            })
        });
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
