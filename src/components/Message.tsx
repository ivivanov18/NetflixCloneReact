import * as React from 'react';

function Message({from, body}: MessageProps) {
        return (
            <div>Message from {from}: {body}</div>
        );
}

interface MessageProps {
    body: string;
    from: string;
}

export default Message;
