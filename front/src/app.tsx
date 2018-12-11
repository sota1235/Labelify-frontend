import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import {render} from "react-dom";
import * as React from 'react';
import LeftNavBar from './components/LeftNavBar';

const theme = createMuiTheme();

function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <LeftNavBar/>
    </MuiThemeProvider>
  );
}

render(<App />, document.querySelector('#app'));
