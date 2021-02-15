import React,{ useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { selectedImage } from '../../features/appSlice'
import './chatview.css';

function ChatView() {
      const selectedImage = useSelector(selectedImage);
      const history = useHistory();
    
      useEffect(() => {
      if(!selectedImage){
       exit();
      }
      }, [selectedImage])

      const exit = ()=> {
        history.replace('/chats');
      }
    return (
        <div className="chatView">
         <img src={selectedImage} onClick={exit} alt="chat-image" />
        </div>
    )
}

export default ChatView;
