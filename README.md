# ionic-angular-boilerplate

## Android

```shell
# 生成签名
keytool -genkey -alias app -keyalg RSA -keysize 2048 -validity 36500 -keystore app.jks -storetype JKS
# 初始化安卓项目
cap add android
# 同步安卓项目
cap sync android
# 编译安卓项目
cap build android
# 列出当前链接的安卓设备
npx cap run android --list
# 直接在已连接安卓设备上运行
npx cap run android
# 直接在已连接安卓设备上运行，支持热加载
npx cap run android --live-reload --port 4200
```
