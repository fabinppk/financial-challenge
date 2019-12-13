import React from 'react';
import { storiesOf } from '@storybook/react';

import Container from '_storybook/container';
import Switch from '_atoms/Switch';

storiesOf('Atoms/Switch', module).add('default', () => {
    return (
        <Container>
            <Switch theme={false} />
        </Container>
    );
});
