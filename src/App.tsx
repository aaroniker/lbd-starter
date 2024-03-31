import React from 'react';
import { css } from '~/styles/css';
import { grid } from '~/styles/patterns';

const wrapper = [
  css({
    minHeight: ['100vh', '100dvh'],
  }),
  grid({
    placeItems: 'center',
  }),
].join(' ');

export const App = () => {
  return <div className={wrapper}>Demo</div>;
};
