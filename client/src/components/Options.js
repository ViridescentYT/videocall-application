import React, { useContext, useState } from 'react';
import { Button, TextField, Grid, Typography, Container, Paper } from '@mui/material';
import { SocketContext } from '../contexts/SocketContext'
import { CopyToClipboard } from 'react-copy-to-clipboard'

const Options = () => {
    const { me, callAccepted, name, setName, leaveCall, callUser, callEnded } = useContext(SocketContext);
    const [idToCall, setIdToCall] = useState('');

    return <Container style={{
        width: '600px',
        margin: '35px 0',
        padding: 0,
    }}>
        <Paper elevation={10} style={{
            padding: '10px 20px',
            border: '2px solid black',
        }}>
            <form noValidate autoComplete='off' style={{
                display: 'flex',
                flexDirection: 'column',
            }}>
                <Grid container style={{ width: '100%' }}>
                    <Grid item xs={12} md={6} style={{ padding: 20 }}>
                        <Typography variant='p'>Account Info</Typography>
                        <TextField label='Name' value={name} onChange={(e) => setName(e.target.value)} />
                        <CopyToClipboard text={me}>
                            <Button variant='contained' color='primary' fullWidth>Copy Your ID</Button>
                        </CopyToClipboard>
                    </Grid>
                    <Grid item xs={12} md={6} style={{ padding: 20 }}>
                        <Typography variant='p'>Make a call</Typography>
                        <TextField label='ID to call' value={idToCall} onChange={(e) => setIdToCall(e.target.value)} />
                        {callAccepted && !callEnded ? <Button variant='contained' color='secondary' fullWidth onClick={leaveCall}>Hang up</Button> : <Button variant='contained' color='primary' fullWidth onClick={() => {
                            callUser(idToCall)
                        }}>Call </Button>}
                    </Grid>
                </Grid>
            </form>
        </Paper>
    </Container>
}

export default Options;