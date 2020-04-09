const TvApi = require('node-lgtv-api');

/*
* Uses https://www.npmjs.com/package/node-lgtv-api API
* */

class TV {
    constructor(socket, host, port) {
        this.socket = socket;
        this.host = host;
        this.port = port;

        this.tvApi = null;
    }

    /*
    * Запрос авторизации
    * */
    async requestTvAuth() {
        this.tvApi = new TvApi(this.host, this.port);
        try {
            return await this.tvApi.displayPairingKey();
        } catch (e) {
            console.log('Request code error', e);
            return false;
        }
    }

    /*
    * Ввод кода подтверждения
    * */
    async confirmCodeSend(code) {
        this.tvApi = new TvApi(this.host, this.port, code);
        try {
            return await this.tvApi.authenticate();
        } catch (e) {
            console.log('Send confirmation code error', e);
            return false;
        }
    }

    /*
    * Отправка команды
    * */
    async sendTvCommand(key, value) {
        try {
            return await this.tvApi.processCommand(this.tvApi[key], value);
        } catch (e) {
            console.log('Send command failed', e);
        }
    }

    /*
    * Отключение от ТВ
    * */
    async disconnectTv() {
        this.tvApi = null;
        this.socket.emit('message', {
            type: 'info',
            data: {
                text: 'TV was disconnected'
            }
        });
    }
}

module.exports = TV;