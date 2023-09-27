import React, { useContext } from 'react';
import { Grid, Typography, Paper } from '@mui/material';
import { SocketContext } from '../contexts/SocketContext'



const VideoPlayer = () => {
    const { name, callAccepted, myVideo, userVideo, callEnded, stream, call } = useContext(SocketContext);

    return <Grid container style={{ justifyContent: 'center', }}>
        <Paper style={{
            padding: '10px',
            border: '2px solid black',
            margin: '10px',
        }}>
            <Typography variant='p' gutterBottom>{name || 'Name'}</Typography>
            <Grid item xs={12} md={6}>
                <video playsInline muted ref={myVideo} autoPlay />
            </Grid>
        </Paper>
        {callAccepted && !callEnded &&
            <Paper>
                <Grid item xs={12} md={6}>
                    <Typography variant='p' gutterBottom>{call.name || 'Name'}</Typography>
                    <video playsInline muted ref={userVideo} autoPlay style={{ width: '550px', }} />
                </Grid>
            </Paper>
        }

    </Grid>
}

export default VideoPlayer;