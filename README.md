# supermall

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).



# 新项目

### 1. 划分目录结构

```
src
|___assets 存放资源（图片，css等）
|    |_____img
|	 |_____css 
|___component   存放公共组件
|    |___common   完全公共组件（和项目每关系）
|    |___content  和项目相关的公共组件
|___views  大的视图
|    |___home 主页 
|    |___……  其他视图
|___router  路由
|    |___index.js
|___store   状态管理
|    |___store.js
|___network
|	 |___request.js
|___common  公共js文件
     |___const.js  公共常量 
```

### 2. 划分目录结构

css标签初始化统一

第三方normalize.css

在base.css中进行统一处理

项目模块划分tabbar



