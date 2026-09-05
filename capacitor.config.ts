import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
    appId: 'cn.elvea.app.capacitor',
    appName: 'App',
    webDir: 'www',
    android: {
        buildOptions: {
            keystorePath: '../tools/android/app.jks',
            keystorePassword: '123456',
            keystoreAlias: 'app',
            keystoreAliasPassword: '123456',
            releaseType: 'APK',
        },
    },
    ios: {
        buildOptions: {
            signingStyle: 'manual',
            exportMethod: 'app-store',
            signingCertificate: '',
            provisioningProfile: '',
        },
    },
    plugins: {
        SystemBars: {
            insetsHandling: 'css',
            style: 'DARK',
            hidden: false,
            animation: 'NONE',
        },
    },
};

export default config;
