import React from 'react';
import StopRoundedIcon from '@material-ui/icons/StopRounded';
import { Avatar } from '@material-ui/core';
import { selectImage } from '../../features/appSlice';
import TimeAgo from 'react-timeago'
import './chat.css';
import { useDispatch } from 'react-redux';
import { db } from '../../firebase';
import { useHistory } from 'react-router-dom';

function Chat( { id ,profilePic,username,timestamp,imageUrl,read }) {
    console.log(profilePic, username, read);
    const dispatch = useDispatch();
    const history= useHistory();
    console.log(profilePic,username,timestamp);
    const open = ()=> {
        if(!read) {
            dispatch(selectImage(imageUrl));
            db.collection('posts').doc(id).set(
                {read: true},
                {merge: true}
            );
            history.push('/chats/view');
        }
    }
    
    return (
        <div onClick={open} className="chat">
            <Avatar className="chat" src={profilePic} />
            <div className="chat__info">
            <h4>{username}</h4>
            <p>
                {
                !read  &&   "Tap to view -" }{" "} 
            <TimeAgo data={new Date(timestamp?.toDate()).toUTCString()}/></p>
            </div>

            {!read && <StopRoundedIcon className="chat__readIcon"/>}
        </div>
    )
}

export default Chat;
