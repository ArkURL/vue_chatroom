<template>
  <div>
    <el-container>
      <el-aside width="200px">Aside</el-aside>
      <el-container>
        <el-header> Header </el-header>
        <el-main>
          <ul v-for="message in chatMessages" :key="message.id">
            <li>{{ message.content }}</li>
          </ul>
        </el-main>
        <el-footer>
          <el-input v-model="inputValue" placeholder="请输入内容"></el-input>
          <el-button type="primary">发送</el-button>
        </el-footer>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import { nanoid } from "nanoid";

export default {
  data() {
    return {
      inputValue: "",
      chatMessages: [],
    };
  },
  methods: {
    sendMessage() {
      this.$socket.emit("chatMessageServer", this.inputValue);
      this.chatMessages.push({
        id: nanoid(),
        content: this.inputValue,
      });
      this.inputValue = "";
    },
  },
  sockets: {
    // 这里的socket会被服务器调用，方式和右边一样：io.emit('chat message', data)
    chatMessageClient(data) {
      console.log(data);
      this.chatMessages.push({
        id: nanoid(),
        content: data,
      });
    },
  },
};
</script>

<style scoped>
.el-footer {
  display: flex;
  position: fixed;
  bottom: 10px;
  justify-content: center;
  align-items: center;
  width: inherit;
}

.el-footer .el-input {
}

.el-main {
  background-color: #ddd;
}
</style>
