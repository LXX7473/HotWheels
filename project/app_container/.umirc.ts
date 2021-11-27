import { defineConfig } from 'umi';

export default defineConfig({
  qiankun: {
    master: {
      // 注册子应用信息
      apps: [
        {
          name: 'app_common', // 公共服务
          entry: '//localhost:8002',
          // 子应用通过钩子函数的参数props可以拿到这里传入的值
          // props: {
          //   token: 'XXXXXXX',
          // },
        },
        {
          name: 'Flag', // 设备服务
          entry: '//localhost:8003',
          // 子应用通过钩子函数的参数props可以拿到这里传入的值
          // props: {
          //   token: 'XXXXXXX',
          // },
        },
      ],
      jsSandbox: true, // 是否启用 js 沙箱，默认为 false
      prefetch: true, // 是否启用 prefetch 特性，默认为 true
    },
  },
  routes: [
    {
      exact: false,
      path: '/',
      component: '@/layouts/index',
      routes: [
        {
          path: '/home',
          component: '@/pages/home/index',
          meta: { title: '首页' },
        },
        // 公共服务模块
        {
          name: 'app_common', //⚠️注意这里需要与上面qiankun配置的name相对应
          path: '/common',
          microApp: 'app_common',
        },
        // 设备服务模块
        {
          name: 'Flag',
          path: '/flag',
          microApp: 'Flag',
        },
      ],
    },
  ],
})
