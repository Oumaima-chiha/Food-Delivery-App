const app = require('./app');
const db = require('./Database');

//Setting the port and listening for connections
const port = 3000;

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
})