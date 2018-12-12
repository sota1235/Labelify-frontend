import * as React from 'react';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';

interface NowPlayingCard {
  height: number,
  image: string,
  title: string,
}

const formatStyles = (height: number): React.CSSProperties => ({
  width: height,
  height,
  position: 'fixed',
  bottom: 0,
  left: 0,
});

const NowPlayingCard = ({ height, image, title }: NowPlayingCard) => (
  <Card>
    <CardMedia
      style={formatStyles(height)}
      image={image}
      title={title}
    />
  </Card>
);

export default NowPlayingCard;
