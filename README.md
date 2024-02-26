# nft-cms-weixin

## 私有仓库

私有仓库地址：http://nexus.ibox.art/repository/web/

```bash
# 可以使用 nrm 管理私有库地址
# 安装 nrm
$ npm i -g nrm
# 添加私有源
$ nrm add ibox http://nexus.ibox.art/repository/web/
# 切换到私有源
$ nrm use ibox
```

## 常用命令

```bash
# 安装依赖
$ yarn

# 启动开发模式
$ yarn dev

# 指定开发模式
$ BUILD_ENV=test-2 yarn dev

# 生成静态文件与国际化
$ yarn gen
```

本项目采用Nuxt.js作为基础框架，查阅更多请访问：[Nuxt.js docs](https://nuxtjs.org).
