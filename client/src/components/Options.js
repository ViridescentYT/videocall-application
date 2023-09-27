import React, { useContext, useState } from 'react';
import { Button, TextField, Grid, Typography, Container, Paper, Box, IconButton } from '@mui/material';
import { SocketContext } from '../contexts/SocketContext'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import { ContentCopy, CallEnd, Call } from '@mui/icons-material';

const Options = () => {
    const { me, callAccepted, name, setName, leaveCall, callUser, callEnded } = useContext(SocketContext);
    const [idToCall, setIdToCall] = useState('');

    return <Box sx={{ backgroundColor: 'rgba(0, 0, 0, 0.4)', position: "absolute", top: '80%', left: '50%', transform: 'translate(-50%, -50%)', borderRadius: '40px', padding: '20px 20px' }}>
        <form>
            <Box display='flex' flexDirection='column' gap='10px'>
                <Box display='flex' alignItems='center' gap='10px'>
                    <TextField label='Name' value={name} onChange={(e) => setName(e.target.value)} />
                    <CopyToClipboard text={me}>
                        <IconButton color='secondary'>
                            <ContentCopy />
                        </IconButton>

                    </CopyToClipboard>
                </Box>
                <Box display='flex' alignItems='center' gap='10px'>
                    <TextField label='ID to call' value={idToCall} onChange={(e) => setIdToCall(e.target.value)} />
                    {callAccepted && !callEnded ? <IconButton color='error' onClick={leaveCall}>
                        <CallEnd />
                    </IconButton> : <IconButton color='success' onClick={() => { callUser(idToCall) }}>
                        <Call /></IconButton>}
                </Box>

            </Box>
        </form>
    </Box>

    // return <Container style={{
    //     width: '600px',
    //     margin: '35px 0',
    //     padding: 0,
    // }}>
    //     <Paper elevation={10} style={{
    //         padding: '10px 20px',
    //         border: '2px solid black',
    //     }}>
    //         <form noValidate autoComplete='off' style={{
    //             display: 'flex',
    //             flexDirection: 'column',
    //         }}>
    //             <Grid container style={{ width: '100%' }}>
    //                 <Grid item xs={12} md={6} style={{ padding: 20 }}>
    //                     <Typography variant='p'>Account Info</Typography>
    //                     <TextField label='Name' value={name} onChange={(e) => setName(e.target.value)} />
    //                 <CopyToClipboard text={me}>
    //                          <Button variant='contained' color='primary' fullWidth>Copy Your ID</Button>
    //                     </CopyToClipboard>
    //                 </Grid>
    //                 <Grid item xs={12} md={6} style={{ padding: 20 }}>
    //                     <Typography variant='p'>Make a call</Typography>
    //                     <TextField label='ID to call' value={idToCall} onChange={(e) => setIdToCall(e.target.value)} />
    //                     {callAccepted && !callEnded ? <Button variant='contained' color='secondary' fullWidth onClick={leaveCall}>Hang up</Button> : <Button variant='contained' color='primary' fullWidth onClick={() => {
    //                         callUser(idToCall)
    //                     }}>Call </Button>}
    //                 </Grid>
    //             </Grid>
    //         </form>
    //     </Paper>
    // </Container>
}

export default Options;