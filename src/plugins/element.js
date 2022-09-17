import Vue from "vue";

import {
  Button,
  Input,
  Message,
  Header,
  Footer,
  Main,
  Aside,
  Container,
  Form,
  FormItem
} from "element-ui";

// 挂载message到Vue的prototype上，供组件使用
Vue.prototype.$message = Message;

// 全局注册组件
Vue.component(Button.name, Button);
Vue.component(Input.name, Input);
Vue.component(Header.name, Header);
Vue.component(Footer.name, Footer);
Vue.component(Main.name, Main);
Vue.component(Aside.name, Aside);
Vue.component(Container.name, Container);
Vue.component(Form.name, Form)
Vue.component(FormItem.name, FormItem)