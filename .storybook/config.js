import { configure, addParameters } from '@storybook/react';
import INITIAL_VIEWPORTS from './viewport';

import '_styles/style.css';

const req = require.context('../src/components', true, /stories.js$/);

function loadStories() {
    req.keys().forEach(filename => req(filename));
}

addParameters({ viewport: { viewports: INITIAL_VIEWPORTS,  defaultViewport: 'responsive', } });
configure(loadStories, module);
