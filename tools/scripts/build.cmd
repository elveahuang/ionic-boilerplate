@echo off

rem 进入工作目录
set ROOT=%~dp0..\..\
cd %ROOT%
echo Current workspace : %ROOT%

rem 清理已有构建缓存
echo Cleaning...
cd %ROOT%\android
chcp 65001
call .\gradlew.bat clean

rem 编译
echo Building...
cd %ROOT%
pnpm run build

rem 安卓打包
echo Android Building...
npx trapeze run config.yaml -y --android-project android
npx cap sync android
npx cap build android

rem 复制文件
@echo off
echo Copying files...
if exist "%ROOT%\build" rmdir /s /q "%ROOT%\build"
mkdir "%ROOT%\build"
copy /y "%ROOT%\android\app\build\outputs\apk\release\app-release-signed.apk" "%ROOT%\build\tes_app.apk"
