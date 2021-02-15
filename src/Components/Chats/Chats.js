import { Avatar } from '@material-ui/core';
import React from 'react';
import './chats.css';
import ChatBubbleIcon from '@material-ui/icons/ChatBubble';
import SearchIcon from '@material-ui/icons/Search';


function chats() {
    return (
        <div className="chats">
            <div className="chats__header">
                <Avatar className="chats__avatar"/>
                <div className="chats__search">
                   <SearchIcon />
                   <input type="text" placeholder="Friends"/>
                </div>
                  <ChatBubbleIcon className="chats__chatIcon"/>
            </div>

            <div className="chats__posts">

            </div>
        </div>
    )
}

export default chats
