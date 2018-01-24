# react-v2ex-clone

### DEMO地址：[https://v2ex.mashiro.wang/](https://v2ex.mashiro.wang/)

react-v2ex-clone 项目是我刚学react不久练手的项目。
前端使用react, react-dom, react-redux, react-router, redux, redux-logger, redux-thunk。
后端使用v2ex提供的api。

首先感谢 liuzhenangel 的 [react-ruby-china](https://github.com/liuzhenangel/react-ruby-china) 这个项目，它给了我react实战的灵感和启发。

## 技术框架
* react
* react-dom
* react-router
* redux
* redux-thunk
* isomorphic-fetch
* react-redux
* es6-promise


## 如何使用
第一步，安装依赖

```
$ npm install
```
第二步，启动服务

```
$ npm start
```

## TODO
* [ ] 解决一大堆BUG
* [ ] 首页添加自定义节点

## Nginx 配置

```
server {
  listen 443;
  server_name v2ex.mashiro.wang;
  index index.html;
  ssl on;
  ssl_certificate /etc/letsencrypt/live/mashiro.wang/fullchain.pem;
  ssl_certificate_key /etc/letsencrypt/live/mashiro.wang/privkey.pem;
  location / {
    root /usr/share/nginx/html/v2ex;
    try_files $uri /index.html;
  }
  location /api/ {
    proxy_set_header  X-Real-IP  $remote_addr;
    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    proxy_pass https://www.v2ex.com/api/;
  }
}
```

## LICENSE
MIT
