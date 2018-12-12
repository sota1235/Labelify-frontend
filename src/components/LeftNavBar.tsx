import * as React from 'react';
import Drawer from '@material-ui/core/Drawer';
import LeftNavList from './LeftNavList';

interface LeftNavBarProps {
  width: number,
}

const LeftNavBar = ({ width }: LeftNavBarProps) => (
  <Drawer open={true} style={{width}} PaperProps={{elevation: 10, style: {width}}}>
    <LeftNavList/>
  </Drawer>
);

export default LeftNavBar;
