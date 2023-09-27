import React, { useContext } from 'react';
import { Grid, Typography, Paper, Box } from '@mui/material';
import { SocketContext } from '../contexts/SocketContext'



const VideoPlayer = () => {
    const { name, callAccepted, myVideo, userVideo, callEnded, stream, call } = useContext(SocketContext);

    return <Box display='flex' justifyContent='center' alignItems='center' height='100%' position='absolute' width='100%' zIndex="-1">
        <video playsInline muted ref={myVideo} autoPlay width='100%' />
    </Box>

    // return <Grid container style={{ justifyContent: 'center', }}>
    //     <Paper style={{
    //         padding: '10px',
    //         border: '2px solid black',
    //         margin: '10px',
    //     }}>
    //         <Typography variant='p' gutterBottom>{name || 'Name'}</Typography>
    //         <Grid item xs={12} md={6}>
    //             <video playsInline muted ref={myVideo} autoPlay />
    //         </Grid>
    //     </Paper>
    //     {callAccepted && !callEnded &&
    //         <Paper>
    //             <Grid item xs={12} md={6}>
    //                 <Typography variant='p' gutterBottom>{call.name || 'Name'}</Typography>
    //                 <video playsInline ref={userVideo} autoPlay style={{ width: '550px', }} />
    //             </Grid>
    //         </Paper>
    //     }

    // </Grid>
}

export default VideoPlayer;