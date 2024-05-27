# 修改url
打开`src/App.js`文件，修改urls

# 构建
```shell
docker build -t lava:v1 .
```

# 运行
```shell
docker run --name lava -d -p 8099:80 lava:v1 
```
