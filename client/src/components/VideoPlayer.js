import React, { useContext } from 'react';
import { Grid, Typography, Paper } from '@mui/material';
import { SocketContext } from '../contexts/SocketContext'



const VideoPlayer = () => {
    const { name, callAccepted, myVideo, userVideo, callEnded, stream, call } = useContext(SocketContext);

    return <Grid>
        <Paper>
            <Grid item xs={12} md={6}>
                <Typography variant='p' gutterBottom>{name || 'Name'}</Typography>
                <video playsInline muted ref={myVideo} autoPlay />
            </Grid>
        </Paper>
        {callAccepted && !callEnded &&
            <Paper>
                <Grid item xs={12} md={6}>
                    <Typography variant='p' gutterBottom>{call.name || 'Name'}</Typography>
                    <video playsInline muted ref={userVideo} autoPlay />
                </Grid>
            </Paper>
        }

    </Grid>
}

export default VideoPlayer;