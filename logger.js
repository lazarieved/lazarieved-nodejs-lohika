const config = require('./config');
const loggerMessageCreater = () => {
    console.log(`Server is listening on port ${config.APP_PORT}. Env is ${config.ENV}`);
}

module.exports = {
    loggerMessage: loggerMessageCreater(),
}