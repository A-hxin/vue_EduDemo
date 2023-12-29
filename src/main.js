import './assets/index.css'
import { createApp } from 'vue';
import App from './App.vue';
import * as echarts from 'echarts';
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
import router from './router';
import DataVVue3 from '@kjgl77/datav-vue3'

// 创建应用实例
const app = createApp(App);

// 全局配置
app.config.globalProperties.$echarts = echarts;

// 使用插件
app.use(ElementPlus);   // ElementPlus
app.use(DataVVue3)      // DataVVue3

// 使用路由
app.use(router);


// 挂载到 #app
app.mount('#app');
