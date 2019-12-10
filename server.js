const express = require('express');
const next = require('next');
const cookieParser = require('cookie-parser');

const port = process.env.PORT || 3000;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dir: './src', dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
    const server = express();

    server.use(cookieParser());

    server.use('/static/images', express.static(`${__dirname}/src/images`));

    server.get('*', (req, res) => {
        return handle(req, res);
    });

    server.listen(port, err => {
        if (err) throw err;
        // eslint-disable-next-line no-console
        console.log(`> Ready on http://localhost:${port}`);
    });
});
