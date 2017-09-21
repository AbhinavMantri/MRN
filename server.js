import config from './config';
import express from 'express';
import apiRouter from './api';
import sassMiddleware from 'node-sass-middleware';
import path from 'path';
// import fs from 'fs';

const server = express();

server.use(sassMiddleware({
    src: path.join(__dirname, 'sass'),
    dest: path.join(__dirname, 'public')
}));

server.set('view engine', 'ejs');

server.get('/', (req, res) => {
    res.render('index',{
        content: "..."
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