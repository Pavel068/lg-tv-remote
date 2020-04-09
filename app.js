require('dotenv').config();

const app = require('express')();
const server = require('http').Server(app);
const io = require('socket.io')(server);

server.listen(3000);

io.on('connection', socket => {
    console.log('Client connected');

    socket.emit('message', {
        type: 'info',
        data: {
            text: 'Connect complete!'
        }
    });

    socket.on('command', data => {
        /*
        * Команды с фронтэнд-приложения
        * */
        switch (data.type) {
            case 'control':
                /*
                * Команды управления (каналы, громкость и т.п.)
                * */
                break;
            case 'tv':
                /*
                * Команды показа ТВ
                * */
                break;
            case 'settings':
                /*
                * Команды изменения настроек
                * */
                break;
            case 'connect':
                /*
                * Подключение к устройству
                * */
                break;
            case 'disconnect':
                /*
                * Отключение от устройства
                * */
                break;
            default:
                console.log('Undefined command', data);
                break;
        }
    });

    socket.on('disconnect', () => {
        console.log('Client disconnected');
    });
});