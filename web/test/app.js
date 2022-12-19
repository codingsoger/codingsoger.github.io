const express = require('express');
const app = express();
const path = require('path');
const mediaPath = path.join(__dirname, 'public', '1.png');
app.use(express.static(path.join(__dirname, 'public')));
console.log(mediaPath);
app.get('/test', (req, res) => {
    res.send('ok');
})
app.get('/file', (req, res) => {
    res.download(mediaPath);
})
app.get('/file1', (req, res) => {
    res.sendFile(mediaPath);
})

app.listen(3000, () => console.log('listening on port 3000'));