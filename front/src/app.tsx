import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import {render} from "react-dom";
import * as React from 'react';
import LeftNavBar from './components/LeftNavBar';
import MainTop from './components/MainTop';
import BottomBar from './components/BottomBar';

const LEFT_NAV_WIDTH = 200;

const theme = createMuiTheme({
  typography: {
    useNextVariants: true,
  },
});

function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <LeftNavBar width={LEFT_NAV_WIDTH}/>
      <MainTop paddingLeft={LEFT_NAV_WIDTH}/>
      <BottomBar/>
    </MuiThemeProvider>
  );
}

render(<App />, document.querySelector('#app'));
