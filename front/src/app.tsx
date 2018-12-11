import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import {render} from "react-dom";
import * as React from 'react';
import LeftNavBar from './components/LeftNavBar';
import MainTop from './components/MainTop';

const theme = createMuiTheme({
  typography: {
    useNextVariants: true,
  },
});

function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <LeftNavBar/>
      <MainTop/>
    </MuiThemeProvider>
  );
}

render(<App />, document.querySelector('#app'));
