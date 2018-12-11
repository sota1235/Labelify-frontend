import * as React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { Person, Label, Filter } from '@material-ui/icons';

interface SideBarItem {
  icon: any, // TODO: React element
  text: string,
}

const sideBarItems: SideBarItem[] = [
  {
    icon: <Person />,
    text: 'Artists',
  },
  {
    icon: <Label />,
    text: 'Labels',
  },
  {
    icon: <Filter />,
    text: 'Filters',
  },
];

const LeftNavList = () => (
  <List component="nav">
    {
      sideBarItems.map((sideBarItem: SideBarItem) => (
        <ListItem button>
          <ListItemIcon>
            {sideBarItem.icon}
          </ListItemIcon>
          <ListItemText primary={sideBarItem.text} />
        </ListItem>
      ))
    }
  </List>
);

export default LeftNavList;
