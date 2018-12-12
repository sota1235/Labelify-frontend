import * as React from 'react';
import IconButton from '@material-ui/core/IconButton';
import { SkipPrevious, SkipNext, PlayArrow } from '@material-ui/icons';

const styles: React.CSSProperties = {
  alignSelf: 'center',
  height: '100%',
};

const PlayBoard = () => (
  <div style={styles}>
    <IconButton aria-label="Previous">
      <SkipPrevious />
    </IconButton>
    <IconButton aria-label="Play/pause">
      <PlayArrow />
    </IconButton>
    <IconButton aria-label="Next">
      <SkipNext />
    </IconButton>
  </div>
);

export default PlayBoard;
