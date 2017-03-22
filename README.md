# 豆瓣电影简单展示
> this is doubanMovie show By vue2.0
# 演示地址
[豆瓣电影](http://139.199.163.228:8081/)
## 安装步骤
``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

### 使用技术简介 （vue2.x + webpack2.x + vue-resource + vue-router + vuex + Element-UI）
### 项目简单演示
![img](https://github.com/monkeyWangs/doubanMovie/blob/master/images/douban.gif)

# 教程  


## 安装 vue-cli 脚手架  


运行如下命令，即可创建一个名为 doubanMovie 的 vue 项目，并且通过本地 8080 端口启动服务   
    
``` bash
npm install -g vue-cli
vue init webpack doubanMovie
cd doubanMovie
npm install
npm run dev
```


在运行 `vue init webpack doubanMovie` 后，会依次要求输入以下配置内容  
- 项目名称
- 项目描述
- 作者
- 选择 Vue 构建：运行+编译 或 仅运行时
- 是否安装 vue-loader
- 是否使用 ESLint
    - 如果是，请选择模式：标准模式、AirBNB 模式、自定义
- 是否使用 Karma + Mocha 的单元测试
- 是否使用 Nightwatch e2e 测试  



安装完成后，即可看到以下文件结构：

```
.
|-- build                            // 项目构建相关代码
|   |-- build.js                     // 生产环境构建代码
|   |-- check-version.js             // 检查 node、npm 等版本
|   |-- dev-client.js                // 热重载相关
|   |-- dev-server.js                // 构建本地服务器
|   |-- utils.js                     // 构建工具相关
|   |-- webpack.base.conf.js         // webpack 基础配置（出入口和 loader）
|   |-- webpack.dev.conf.js          // webpack 开发环境配置
|   |-- webpack.prod.conf.js         // webpack 生产环境配置
|-- config                           // 项目开发环境配置
|   |-- dev.env.js                   // 开发环境变量
|   |-- index.js                     // 项目一些配置变量（开发环境接口转发将在此配置）
|   |-- prod.env.js                  // 生产环境变量
|   |-- test.env.js                  // 测试环境变量
|-- src                              // 源码目录
|   |-- components                   // vue 公共组件
|   |-- App.vue                      // 页面入口文件
|   |-- main.js                      // 程序入口文件，加载各种公共组件
|-- static                           // 静态文件，比如一些图片，json数据等
|-- test                             // 自动化测试相关文件
|-- .babelrc                         // ES6语法编译配置
|-- .editorconfig                    // 定义代码格式
|-- .eslintignore                    // ESLint 检查忽略的文件
|-- .eslistrc.js                     // ESLint 文件，如需更改规则则在此文件添加
|-- .gitignore                       // git 上传需要忽略的文件
|-- README.md                        // 项目说明
|-- index.html                       // 入口页面
|-- package.json                     // 项目基本信息
.
```

## ESLint 配置  

ESLint 配置在根目录的 `.eslintrc.js` 里。  
正常情况下，ESLint 报错是因为你的代码不符合现有的 ESLint 规范。当然在开发的过程中，ESlint能够很好地规范你的代码，对于新手来说可能有点别扭，但是习惯了可以极大地提升代码的可读性。

## 静态页面开发  

此时，浏览器应该已经打开了 localhost:8080 页面。  

在此情况下，请尝试更改 `/src/App.vue` 和 `/src/components/Hello.vue` 文件中`<template>`标签内的内容，保存后即可立即看到浏览器页面已自动更新了你做出的改动。  这是因为我们配置了vue的热更新组件。在`build`目录的`dev-client.js`
```javascript
/* eslint-disable */
require('eventsource-polyfill')
var hotClient = require('webpack-hot-middleware/client?noInfo=true&reload=true')

hotClient.subscribe(function (event) {
  if (event.action === 'reload') {
    window.location.reload()
  }
})
```

提示：`./src/components` 文件夹多用于保存公用组件。至于页面组件.

## Element-ui 
使用本项目使用的是Element-ui做为公共组件库，element-ui是由饿了么开源的基于vue2.0的组件库。具体可以参考官网[element-ui](http://element.eleme.io/#/zh-CN/component/installation)
## vue-router 2 使用

当一个个静态组件完成后，需要按照路由组织这些组件文件。  

请前往 [vue-router 2 介绍](https://router.vuejs.org/zh-cn/) 阅读 __基础__ 部分教程，并可以边阅读边配置路由。  

路由文件是 `./src/router.index.js` 。  

本项目中使用了 [HTML5 History 模式](https://router.vuejs.org/zh-cn/essentials/history-mode.html)，路由配置比较简单，可以参考。  


## API 请求转发配置

至此，你应该已经完成了所有的静态页面的工作，接下来我们准备搭建请求，为后面的 xhr 请求做好准备。  

1. 打开 `http://api.douban.com/v2/movie/in_theaters` 查看接口数据，留意此地址。  

2. 在 `./config/index.js` 中的 `proxyTable` 配置代理：  

    ```js 
    proxyTable: {
        '/api': {
            target: 'http://api.douban.com/v2',
            changeOrigin: true,
            pathRewrite: {
                '^/api': ''
            }
        }
    }
    ```  

3. 重新启动 `npm run dev`，打开 `localhost:8080/api/movie/in_theaters` 查看结果是否与直接请求豆瓣 API 相同。  

4. 本应该使用了以下 API：  
    - `/v2/movie/search?q={text}` 电影搜索api；  
    - `/v2/movie/in_theaters` 正在上映的电影；  
    - `/v2/movie/coming_soon` 即将上映的电影；  
    - `/v2/movie/subject/:id` 单个电影条目信息。  

> 更多请参考 [豆瓣电影 API](https://developers.douban.com/wiki) 文档。    

这样我们就可以在应用中调用 `/api/movie/in_theaters` 来访问 `http://api.douban.com/v2/movie/in_theaters`，从而解决跨域的问题。

## 使用 vue-resource 

vue-resource 库使用起来相当方便。  

你可以在单个组件中尝试引入并调用：  
```javascript
import Vue from 'vue'
import $http from 'vue-resource'
Vue.use($http)

let vm = new Vue()

const configPath = '/api'
window.configPath = configPath

export class Utils {
  get (url, data = {}) {
    url = configPath + url
    return new Promise((resolve, reject) => {
      vm.$http.get(url, {params: data, credentials: true}).then((response) => {
        resolve(response.body)
      }, function () {
        console.log('接口异常')
      })
    })
  }
}
```
这里，只使用了里面的get方法
> 更多 vue-resource 用法请参考 [vue-resource](https://github.com/pagekit/vue-resource)

## 使用 Vuex 并分离代码  

为了试代码更加结构化，我们应当将数据请求和视图分离。  

这一节中，我们有两个任务要做：  

1. 分离数据请求层逻辑。  
2. 使用 Vuex 管理状态。   

将二者放到同一节中主要是因为二者再同一目录下，我们来查看 `./store` 文件夹的结构：
```
.
|-- store                          // 数据处理根目录
|   |-- moving                     // 电影模块文件夹
|   |   |-- actions.js             // 电影模块获取接口actions
|   |   |-- getters.js             // Vuex getters
|   |   |-- index.js               // 定义store 模块入口文件
|   |   |-- mutations.js           // Vuex mutations
|   |   |-- type.js                // Vuex 操作 key
|   |-- index.js                   // Vuex 入口
.
```

我们需要先了解 Vuex。  

请查看 [Vuex 文档](https://vuex.vuejs.org/zh-cn/)，了解其 **核心概念**。  

>Vuex 是一个专为 Vue.js 应用程序开发的状态管理模式。它采用集中式存储管理应用的所有组件的状态，并以相应的规则保证状态以一种可预测的方式发生变化。Vuex 也集成到 Vue 的官方调试工具 devtools extension，提供了诸如零配置的 time-travel 调试、状态快照导入导出等高级调试功能。  

其实在我看来，Vuex 相当于某种意义上设置了读写权限的全局变量，将数据保存保存到该“全局变量”下，并通过一定的方法去读写数据。（希望这能帮助你理解 Vuex）


# 结语  

至此，主体工作已经完成。  

欢迎 Star 本项目。

