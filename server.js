const express = require('express');
const compression = require('compression');

const app = express();

app.use(compression());

app.use(express.static('./dist/spaceX'));

app.get('/*', (req, res) =>
    res.sendFile('index.html', {root: './dist/spaceX'}),
);

app.listen(process.env.PORT || 8080);