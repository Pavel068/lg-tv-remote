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

    /*
    * TV Class
    * */
    const TV = require('./lib/TV');
    const TVInstance = new TV(socket, '192.168.1.113', 8080);

    /*
    * Request confirm code at connect
    * */
    (async () => {
        try {
            await TVInstance.requestTvAuth();
            console.log('Requested');
        } catch (e) {
            console.error('Request code failed');
        }
    })();

    socket.on('command', async data => {
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
                await TVInstance.confirmCodeSend(data.value);
                break;
            case 'disconnect':
                /*
                * Отключение от устройства
                * */
                await TVInstance.disconnectTv();
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