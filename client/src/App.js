import React from 'react';
import { Typography, AppBar } from '@mui/material';
import VideoPlayer from './components/VideoPlayer';
import Options from './components/Options';
import Notification from './components/Notification';
import UserVideo from './components/UserVideo';

function App() {
  return <main style={{ width: '100%', height: '100vh', position: 'relative' }}>
    <VideoPlayer />
    <UserVideo/>

    <Options />
    <Notification />
  </main>
}

export default App;
