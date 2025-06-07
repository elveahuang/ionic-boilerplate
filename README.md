# ionic-angular-boilerplate

## Android

```shell
# 生成签名
keytool -genkey -alias app -keyalg RSA -keysize 2048 -validity 36500 -keystore app.jks -storetype JKS
# 列出所有设备
cap run android --list
# 初始化安卓项目
cap add android
# 同步安卓项目
cap sync android
# 编译安卓项目
cap build android
```

## iOS

```shell
# 列出所有设备
cap run ios --list
# 清理
xcodebuild -workspace ./ios/App/App.xcworkspace -list
# 清理
xcodebuild -workspace ./ios/App/App.xcworkspace -scheme App -configuration Release clean
# 构建
xcodebuild -workspace ./ios/App/App.xcworkspace -scheme App -configuration Release -sdk iphonesimulator clean build
# 导出
xcodebuild -exportArchive \
-archivePath ./ios/App/build/App.xcarchive \
-exportPath ./ios/App/build/App

##
npx cap add ios --packagemanager SPM
npx cap add ios
##
cap build ios
cap build ios --configuration build-ios-enterprise.json
cap build ios --configuration build-ios.json

## iOS Build
npx cap build ios --xcode-export-method enterprise \
--xcode-team-id xxx \
--xcode-signing-style xxx \
--xcode-signing-certificate xxx \
--xcode-provisioning-profile xxx
```
