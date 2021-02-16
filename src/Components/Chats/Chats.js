import { Avatar } from '@material-ui/core';
import React, { useState,useEffect } from 'react';
import './chats.css';
import ChatBubbleIcon from '@material-ui/icons/ChatBubble';
import SearchIcon from '@material-ui/icons/Search';
import { db,auth } from '../../firebase';
import Chat from '../Chat/Chat';
import { useSelector, useDispatch } from 'react-redux'
import { selectUser } from '../../features/appSlice';
import RadioButtonUncheckedRoundedIcon from '@material-ui/icons/RadioButtonUncheckedRounded';

function Chats() {
    const [posts, setPosts] = useState([]);
    const user = useSelector(selectUser);
     
    const takeSnap = ()=> {
        
    }

    useEffect(() => {
         db.collection('chat').orderBy('timestamp', 'desc').onSnapshot(snapshot => setPosts(snapshot.docs.map(doc => ({
             id: doc.id,
             data: doc.data()
         }))))
        
    
        }, [])

    return (
        <div className="chats">
            <div className="chats__header">
                <Avatar src={user.profilePic} onClick={()=> auth.signOut()}  className="chats__avatar"/>
                <div className="chats__search">
                   <SearchIcon />
                   <input type="text" placeholder="Friends"/>
                </div>
                  <ChatBubbleIcon className="chats__chatIcon"/>
            </div>

            <div className="chats__posts">
                   {
                       posts.map(
                           ({ id, data: { profilePic, username, timestamp, imageUrl, read }
                         }) =>(
                             <Chat 
                             id={id}
                             profilePic={profilePic}
                             username={username}
                             timestamp={timestamp}
                             imageUrl={imageUrl}
                             read={read}
                             />
                         )
                       )
                   }
            </div>
<RadioButtonUncheckedRoundedIcon 
className='chats__takePicIcon'
onClick={takeSnap}
fontSize="large"
/>
           
        </div>
    )
}

export default Chats;
