import React from 'react';
import './Feed.css';
import MessageSender from '../messageSender/MessageSender';
import StoryReel from '../storyReel/StoryReel';
import Post from '../post/Post';

function Feed() {
    return (
        <div className="feed">
            <StoryReel />
            <MessageSender />
            <Post 
            profilePic="https://writestylesonline.com/wp-content/uploads/2018/11/Three-Statistics-That-Will-Make-You-Rethink-Your-Professional-Profile-Picture.jpg"
            message="This is better than Facebook"
            username="ssssangha"
            image="https://www.mercurynews.com/wp-content/uploads/2018/04/11.jpg?w=770"
            
            />

        </div>
    )
}

export default Feed
