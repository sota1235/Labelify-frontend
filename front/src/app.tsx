import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import {render} from "react-dom";
import * as React from 'react';
import LeftNavBar from './components/LeftNavBar';
import MainTop from './components/MainTop';
import BottomBar from './components/BottomBar';
import NowPlayingCard from './components/NowPlayingCard';

const LEFT_NAV_WIDTH = 200;
const BOTTOM_HEIGHT = 70;

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
      <NowPlayingCard height={BOTTOM_HEIGHT} image={'https://learn.getgrav.org/user/pages/11.troubleshooting/01.page-not-found/error-404.png'} title={'title'}/>
      <BottomBar height={BOTTOM_HEIGHT}/>
    </MuiThemeProvider>
  );
}

render(<App />, document.querySelector('#app'));
