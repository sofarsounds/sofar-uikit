import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, number, boolean } from '@storybook/addon-knobs';
import { BrowserRouter } from 'react-router-dom';

import { Textfield, FormGroup } from '../../src';

storiesOf('Form Group', module)
  .addDecorator(withKnobs)
  .add('Playground', () => (
    <>
      <h1>FormGroup</h1>
      <FormGroup
        label={text('Label', 'Email address')}
        required={boolean('Required', true)}
        errorMsg={text('Error Msg', null)}
      >
        <Textfield placeholder="your@email.com" />
      </FormGroup>
    </>
  ));
