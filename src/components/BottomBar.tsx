import * as React from 'react';
import AppBar from '@material-ui/core/AppBar';
import PlayBoard from './PlayBoard';

interface BottomBarProps {
  height: number,
}

const baseStyle: React.CSSProperties = {
  top: 'auto',
  bottom: 0,
  display: 'flex',
  zIndex: 10000000,
};

const formatStyles = (height: number): React.CSSProperties =>
  Object.assign({}, baseStyle, { height, left: height });

const BottomBar = ({ height }: BottomBarProps) => (
  <AppBar position="fixed" style={formatStyles(height)} elevation={20}>
    <PlayBoard/>
  </AppBar>
);

export default BottomBar;
