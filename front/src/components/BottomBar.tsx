import * as React from 'react';
import AppBar from '@material-ui/core/AppBar';

const style: React.CSSProperties = {
  top: 'auto',
  bottom: 0,
  zIndex: 10000000,
};

const BottomBar = () => (
  <AppBar position="fixed" style={style}>
    hoge
  </AppBar>
);

export default BottomBar;
