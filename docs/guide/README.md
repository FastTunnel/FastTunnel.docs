---
lang: zh-CN
title: 介绍
description: FastTunnel使用手册
---

# 介绍
## FastTunnel-内网穿透

[![License](https://img.shields.io/badge/license-Apache%202-green.svg)](https://www.apache.org/licenses/LICENSE-2.0)
[![Build status](https://github.com/anjoy8/blog.core/workflows/.NET%20Core/badge.svg)](https://github.com/SpringHgui/FastTunnel/actions)
[![Nuget](https://img.shields.io/nuget/v/FastTunnel.Core)](https://www.nuget.org/packages/FastTunnel.Core/)
[![Nuget](https://img.shields.io/nuget/dt/FastTunnel.Core)](https://www.nuget.org/packages/FastTunnel.Core/)

## FastTunnel是什么？
- FastTunnel是一款高性能跨平台内网穿透工具，使用它可以实现将内网服务暴露到公网供自己或任何人访问。
- 与其他穿透工具不同的是，FastTunnel项目致力于打造一个易于扩展、易于维护的内网穿透框架。
- 你可以通过引用`FastTunnel.Core`的nuget包构建出自己的穿透应用，并针自己所需的业务扩展功能。
 
## GVP最有价值开源项目
![img1](/images/gvp.png)

## FastTunnel有哪些特性
- [x] 在任何地方远程内网计算机(公司或家里的计算机) Windows/Linux/Mac
- [x] 通过自定义域名访问内网web服务（常用于微信开发或对外开放web服务）
- [x] 端口转发/端口映射，访问内网任意端口提供的服务 mysql、redis、ftp等等
- [ ] p2p穿透
- [x] 支持绑定多个域名访问内网服务
- [x] 支持域名白名单限制
- [x] 支持客户端身份校验

## 立即体验内网穿透
官网：[https://suidao.io](https://suidao.io)  

此网站基于本框架开发的穿透平台，用于分享测试使用，如果你需要低频使用内网穿透可以直接注册使用，免去自己搭建和维护的成本；但生产项目请勿使用此服务。

## 感谢以下贡献者
<a href = "https://github.com/FastTunnel/FastTunnel/graphs/contributors">
  <img src = "https://contrib.rocks/image?repo=FastTunnel/FastTunnel"/>
</a>  

## QQ群交流群

<div align="center">
  <img src="/images/qqgroup.png" width="150" align=center />
  <img src="/images/FastTunnel交流群-2群聊二维码.png" width="150" align=center />
</div>

## License
Apache License 2.0
