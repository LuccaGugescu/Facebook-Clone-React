import React from 'react';
import './StoryReel.css';
import Story from '../story/Story';
function StoryReel() {
    return (
        <div className="storyReel">
            <Story profileSrc="https://images.unsplash.com/photo-1504593811423-6dd665756598?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80" image="https://images.unsplash.com/photo-1542769494-0cc077eead4b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=667&q=80" title="Landon Sears" className="storyReel__story" />
            <Story profileSrc="https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTl8fHBlcnNvbnxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" image="https://images.unsplash.com/photo-1582661271385-da4142b69da8?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80" title="Sara Snow" className="storyReel__story" />
            <Story profileSrc="https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80" image="https://images.unsplash.com/photo-1593974107239-202f6210f09f?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NTZ8fHBlcnNvbnxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" title="Casey Mcgill" className="storyReel__story" />
            <Story profileSrc="https://images.unsplash.com/photo-1500048993953-d23a436266cf?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=749&q=80" image="https://images.unsplash.com/photo-1503249023995-51b0f3778ccf?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MzV8fHBlcnNvbnxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" title="Dane Maynard" className="storyReel__story" />
        </div>
    )
}

export default StoryReel
