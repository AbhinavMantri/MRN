import config from './config';
import express from 'express';
import apiRouter from './api';
// import fs from 'fs';

const server = express();

server.set('view engine', 'ejs');

server.get('/', (req, res) => {
    res.render('index',{
        content: "Hello Express and <em>EJS</em>!"
    });
});

server.use('/api', apiRouter);
server.use(express.static('public'));
//Render html page throgh express server
// server.get('/about.html', (req, res) => {
//     fs.readFile('./public/about.html', (err, data) =>{
//         res.send(data.toString());
//     });
// });

server.listen(config.port, () => {
    console.info("Server is listening on port: ", config.port);
});