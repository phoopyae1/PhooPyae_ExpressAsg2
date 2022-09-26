const express = require('express');
const path = require('path');
const app = express();
app.get("", (req, res) => {
    res.sendFile('index.html', { root: path.join(__dirname, '') });
})
app.get("/action_page", (req, res) => {
    res.sendfile('action_page.html', { root: path.join(__dirname, '') });
})
app.get("/about", (req, res) => {
    res.sendfile('about.html', { root: path.join(__dirname, '') });
})
app.get("/exit", (req, res) => {
    res.sendfile('exit.html', { root: path.join(__dirname, '') });
})
app.listen(3000, () => {
    console.log('Server starting up at : Port :3000');
})