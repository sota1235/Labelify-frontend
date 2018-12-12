import * as React from 'react';

interface MainTopProps {
  paddingLeft: number,
}

const MainTop = ({ paddingLeft }: MainTopProps) => (
  <div style={{paddingLeft}}>
    Main Top component
  </div>
);

export default MainTop;
