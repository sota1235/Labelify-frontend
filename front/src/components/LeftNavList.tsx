import * as React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { Person } from '@material-ui/icons';

const LeftNavList = () => (
  <List component="nav">
    <ListItem>
      <ListItemIcon>
        <Person/>
      </ListItemIcon>
      <ListItemText primary="Artists" />
    </ListItem>
  </List>
);

export default LeftNavList;
