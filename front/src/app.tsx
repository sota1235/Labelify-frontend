import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import {render} from "react-dom";
import * as React from 'react';

const theme = createMuiTheme();

function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <div>Hello, Labelify</div>
    </MuiThemeProvider>
  );
}

render(<App />, document.querySelector('#app'));
