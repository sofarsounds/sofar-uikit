import React from 'react';
import { storiesOf } from '@storybook/react';
import { Divider } from '../../src';

storiesOf('Divider', module).add('Default', () => (
  <>
    <h1>Divider</h1>
    <Divider />
  </>
));