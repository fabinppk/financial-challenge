import React from 'react';
import { storiesOf } from '@storybook/react';
import { Provider } from 'react-redux';
import testStore from '_utils/testStore';

import Container from '_storybook/container';
import CustomSlider from '_molecules/CustomSlider';

const store = testStore();

storiesOf('Molecules/CustomSlider', module).add('default', () => {
    return (
        <Provider store={store}>
            <Container>
                <CustomSlider />
            </Container>
        </Provider>
    );
});
