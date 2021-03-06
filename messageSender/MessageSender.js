import React, { useState } from 'react';
import './MessageSender.css';
import Avatar from '@material-ui/core/Avatar';
import VideocamIcon from '@material-ui/icons/Videocam';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import { useStateValue } from '../store/StateProvider';
import db from '../utils/firebase';
import firebase from 'firebase';


function MessageSender() {
    const [input, setInput] = useState("");
    const [imageUrl, setImageUrl] = useState("");
    const [{user}, dispatch] = useStateValue();

    const handleSubmit = (e) => {
        e.preventDefault();
        db.collection("posts").add({
            message: input,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            profilePic: user.photoURL,
            username: user.displayName,
            image: imageUrl
        }
        )
        setInput("");
        setImageUrl("");
    }
    
    return (
        <div className="messageSender">
            <div className="messageSender__top">
                <Avatar src={user.photoURL} />
                <form >
                    <input type="text" placeholder="What's on your mind" className="messageSender__input" value={input} onChange={e => setInput(e.target.value)} />
                    <input type="text" placeholder="Image URL (Optional)"  value={imageUrl} onChange={e => setImageUrl(e.target.value)} />
                    <button type="submit" onClick={handleSubmit}> fsadfl</button>
                </form>
            </div>
            <div className="messageSender__bottom">
                <div className="messageSender__option">
                    <VideocamIcon style={ {color: "red"} } />
                    <h3>Live Video</h3>
                </div>
                <div className="messageSender__option">
                    <PhotoLibraryIcon style={ {color: "green"} } />
                    <h3>Photo/Video</h3>
                </div>
                <div className="messageSender__option">
                    <InsertEmoticonIcon style={ {color: "yellow"} } />
                    <h3>Feeling/Activity</h3>
                </div>
            </div>
        </div>
    )
}

export default MessageSender
