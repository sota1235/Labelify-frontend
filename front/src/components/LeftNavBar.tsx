import * as React from 'react';
import Drawer from '@material-ui/core/Drawer';
import LeftNavList from './LeftNavList';

const LeftNavBar = () => (
  <Drawer open={true}>
    <LeftNavList/>
  </Drawer>
);

export default LeftNavBar;
