import React, { useContext } from 'react';
import { Button, Box, IconButton } from '@mui/material';
import { Call } from '@mui/icons-material'

import { SocketContext } from '../contexts/SocketContext';

const Notification = () => {

    const { answerCall, call, callAccepted } = useContext(SocketContext);

    return <React.Fragment>
        {call.isReceivedCall && !callAccepted && <Box sx={{ background: 'rgba(0, 0, 0, 0.4)', position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', padding: '20px 20px', borderRadius: '20px', display: 'flex', alignItems: 'center', gap: '10px', textTransform: 'uppercase', fontFamily: 'sans-serif' }}>
            <h2 style={{ color: 'white' }}>{call.name} is calling</h2>
            <IconButton color='success' sx={{ ":hover": { backgroundColor: 'green', color: 'white' } }} onClick={answerCall}>
                <Call />
            </IconButton>
        </Box>}
    </React.Fragment>


    // return <React.Fragment>
    //     {call.isReceivedCall && !callAccepted && <div style={{
    //         display: 'flex', justifyContent: 'space-around',
    //         padding: '10px 20px',
    //         border: '2px solid black',
    //     }}>
    //         <h1>{call.name} is calling</h1>
    //         <Button variant='contained' color='primary' onClick={answerCall}>Pick Up</Button></div>}
    // </React.Fragment>
}

export default Notification;