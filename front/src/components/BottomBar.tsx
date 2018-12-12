import * as React from 'react';
import AppBar from '@material-ui/core/AppBar';
import PlayBoard from './PlayBoard';

const style: React.CSSProperties = {
  top: 'auto',
  bottom: 0,
  display: 'flex',
  height: 70,
  zIndex: 10000000,

};

const BottomBar = () => (
  <AppBar position="fixed" style={style} elevation={20}>
    <PlayBoard/>
  </AppBar>
);

export default BottomBar;
