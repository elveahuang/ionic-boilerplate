import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
    appId: 'cn.elvea.app.capacitor',
    appName: 'App',
    webDir: 'www/browser',
    android: {
        buildOptions: {
            keystorePath: '../tools/android/app.jks',
            keystorePassword: '123456',
            keystoreAlias: 'app',
            keystoreAliasPassword: '123456',
            releaseType: 'APK',
        },
    },
    plugins: {
        SplashScreen: {
            launchAutoHide: false,
        },
    },
};

export default config;
