# 开机自启

修改好你的配置文件，能够正常使用后，按下面的方式设置开机后台自启。
## Windos
使用客户端项目或服务端项目目录下的`install.bat`脚本，注册为window服务。

## Linux
使用源码根目录下的`fasttunnel.service`文件,复制到`/etc/systemd/system`目录，自行根据具体的环境进行微调；注册为systemd守护进程。
```sh
systemctl enable fasttunnel.service
systemctl start fasttunnel
```
## Mac
没用过mac，不清楚。