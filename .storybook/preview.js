import { addParameters } from '@storybook/react';
import INITIAL_VIEWPORTS from './viewport.js';

addParameters({
    viewport: {
        viewports: INITIAL_VIEWPORTS,
    },
});
