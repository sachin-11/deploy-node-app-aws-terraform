const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('hello from express')
})

const PORT = process.env.PORT || 3000;


app.listen(PORT, () => {
    console.log(`Server is listen on port ${PORT}`)
})
