const express = require('express');
const port = 27735;
const app = express();
const bodyParser = require('body-parser');

const routes = require('./routes/routes')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true,
}));

routes(app);

const server = app.listen(port, (error) => {
    if (error) return console.log(`Error: ${error}`);
    console.log(`Server listening on port ${port}`);
});