import React from 'react';
import { Typography, AppBar } from '@mui/material';
import VideoPlayer from './components/VideoPlayer';
import Options from './components/Options';
import Notification from './components/Notification';

function App() {
  return <main>
    <AppBar position='static' color='inherit'>
      <Typography variant='h2' align='center'>Video Call</Typography>
    </AppBar>

    <VideoPlayer />
    <Options />
    <Notification />
  </main>
}

export default App;
