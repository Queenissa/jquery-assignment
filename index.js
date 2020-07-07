const express = require('express');
const app = express();
const port = 3000;

app.get('/students', (req, res) => {
    res.send('Get the students list');
})

app.listen(port, () => console.log(`Listening on port ${port}!`));