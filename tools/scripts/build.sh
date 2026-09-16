#!/bin/bash

# 进入工作目录
ROOT=$(cd $(dirname $0);cd ../../; pwd)
cd $ROOT
echo Current workspace : $ROOT

# 清理已有构建缓存
echo Cleaning...
cd $ROOT/android
chmod a+x ./gradlew
./gradlew clean

# 编译
echo Building...
cd $ROOT
pnpm run build

# 安卓打包
echo Android Building...
npx trapeze run config.yaml -y --android-project android
npx cap sync android
npx cap build android

# 复制文件
echo Copying files...
rm -rf $ROOT/build
mkdir -p $ROOT/build
cp -r $ROOT/android/app/build/outputs/apk/release/app-release-signed.apk $ROOT/build/tes_app.apk
