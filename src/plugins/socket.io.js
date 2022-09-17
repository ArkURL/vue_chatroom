
import Vue from 'vue'
import VueSocketIO from 'vue-socket.io'
import SocketIO from 'socket.io-client'

// 解决跨域的客户端设置
// Etablish Connection
const socketConnection = SocketIO('http://localhost:3000')

Vue.use(new VueSocketIO({
    debug: true,
    connection: socketConnection
  }))