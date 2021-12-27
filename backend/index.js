const app = require('./src/app');
const http = require('http');
const mongoose = require('mongoose')
const port = process.env.PORT || 1111;

const server = http.createServer(app);
server.listen(port);
server.on('error', (error) => {
    if (error.syscall !== 'listen') throw error

    const bind = typeof port === 'string'
        ? 'Pipe ' + port
        : 'Port ' + port
    switch (error.code) {
        case 'EACCES':
            console.error(bind + ' requires elevated privileges')
            process.exit(1)
            break
        case 'EADDRINUSE':
            console.error(bind + ' is already in use')
            process.exit(1)
            break
        default:
            throw error
    }
})

server.on('listening', () => {
    const addr = server.address()
    const bind = typeof addr === 'string'
        ? 'pipe ' + addr
        : 'port ' + addr.port
    console.log('Listening on ' + bind)
})

const connectDB = async () => {
    try {
        await mongoose.connect(`mongodb+srv://${process.env.DB_username}:${process.env.DB_password}@cluster0.xdw47.mongodb.net/CMC-product?retryWrites=true&w=majority`)
        console.log("DB connected");
    } catch (error) {
        console.log(error);
    }
}
connectDB();
