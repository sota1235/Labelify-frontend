import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import BottomBar from './BottomBar';

storiesOf('BottomBar', module)
  .add('general', () => <BottmBar height={70} />)
