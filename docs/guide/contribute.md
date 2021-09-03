# 开发&贡献

## 开发
- 安装 [Visual Studio](https://visualstudio.microsoft.com/zh-hans/) 最低需要`Visual Studio2019`，或[Visual Studio2022](https://visualstudio.microsoft.com/zh-hans/vs/preview/#download-preview)
- 安装 [.net5 sdk](https://dotnet.microsoft.com/download/dotnet/5.0)
- 执行项目根目录`addhost.bat`文件以添加开发用的域名到host文件
- 打开`FastTunnel.sln`
- 启动`FastTunnel.Server`项目
- 启动`FastTunnel.Client`项目

## 打包
执行`./publish.sh` 打包各平台客户端和服务端  
执行`./publishpublish-win.sh` 只打包window平台的客户端和服务端