import React, { useContext } from 'react';
import { Button } from '@mui/material';

import { SocketContext } from '../contexts/SocketContext';

const Notification = () => {

    const { answerCall, call, callAccepted } = useContext(SocketContext);

    return <React.Fragment>
        {call.isReceivedCall && !callAccepted && <div>
            <h1>{call.name} is calling</h1>
            <Button variant='contained' color='primary' onClick={answerCall}></Button></div>}

    </React.Fragment>
}

export default Notification;