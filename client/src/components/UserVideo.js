import React, { useContext } from 'react';
import { Box } from '@mui/material';
import { SocketContext } from '../contexts/SocketContext'

const UserVideo = () => {
    const { userVideo } = useContext(SocketContext);
    return <Box>
        <video playsInline ref={userVideo} autoPlay width='400px' />
    </Box>
}

export default UserVideo;