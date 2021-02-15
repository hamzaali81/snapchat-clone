import React,{ useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { selectedImage } from '../../features/appSlice'
import { CountdownCircleTimer } from 'react-countdown-circle-timer'

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
         
         <div className="chatView__timer">
         <CountdownCircleTimer
    isPlaying
    duration={10}
    colors={[
      ['#004777', 0.33],
      ['#F7B801', 0.33],
      ['#A30000', 0.33],
    ]}
    strokeWidth={6}
    size={50}
  >
    {({ remainingTime }) =>{
       if(remainingTime === 0){
         exit();
       }
    }}
  </CountdownCircleTimer>
         </div>

        
        </div>
    )
}

export default ChatView;
