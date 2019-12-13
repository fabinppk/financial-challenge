import React from 'react';
import { storiesOf } from '@storybook/react';
import { Provider } from 'react-redux';
import testStore from '_utils/testStore';

import Container from '_storybook/container';
import RightSide from '_organisms/RightSide';

const store = testStore();

storiesOf('Organisms/RightSide', module).add('default', () => {
    return (
        <Provider store={store}>
            <Container>
                <RightSide />
            </Container>
        </Provider>
    );
});
