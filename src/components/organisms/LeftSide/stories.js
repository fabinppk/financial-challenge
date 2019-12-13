import React from 'react';
import { storiesOf } from '@storybook/react';
import { Provider } from 'react-redux';
import testStore from '_utils/testStore';

import Container from '_storybook/container';
import LeftSide from '_organisms/LeftSide';

const store = testStore();

storiesOf('Organisms/LeftSide', module).add('default', () => {
    return (
        <Provider store={store}>
            <Container>
                <LeftSide />
            </Container>
        </Provider>
    );
});
