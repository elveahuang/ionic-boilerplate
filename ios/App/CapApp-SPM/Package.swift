// swift-tools-version: 5.9
import PackageDescription

// DO NOT MODIFY THIS FILE - managed by Capacitor CLI commands
let package = Package(
    name: "CapApp-SPM",
    platforms: [.iOS(.v15)],
    products: [
        .library(
            name: "CapApp-SPM",
            targets: ["CapApp-SPM"])
    ],
    dependencies: [
        .package(url: "https://github.com/ionic-team/capacitor-swift-pm.git", exact: "8.0.0-nightly-20251204T150751.0"),
        .package(name: "CapacitorApp", path: "../../../node_modules/.pnpm/@capacitor+app@8.0.0-nightly-20251204T150817.0_@capacitor+core@8.0.0-nightly-20251204T1_b6e3c8d8bf26d9ddac500f8fd5e7e7f3/node_modules/@capacitor/app"),
        .package(name: "CapacitorBrowser", path: "../../../node_modules/.pnpm/@capacitor+browser@8.0.0-nightly-20251204T150817.0_@capacitor+core@8.0.0-nightly-202512_9cf83069004b49e609de6cf68d187e1b/node_modules/@capacitor/browser"),
        .package(name: "CapacitorCamera", path: "../../../node_modules/.pnpm/@capacitor+camera@8.0.0-nightly-20251204T150817.0_@capacitor+core@8.0.0-nightly-2025120_b1f290bb8e58952e991c9afece3bb8d4/node_modules/@capacitor/camera"),
        .package(name: "CapacitorDevice", path: "../../../node_modules/.pnpm/@capacitor+device@8.0.0-nightly-20251204T150817.0_@capacitor+core@8.0.0-nightly-2025120_09289f82cd8c8d475c1fa4da0115a0f6/node_modules/@capacitor/device"),
        .package(name: "CapacitorFilesystem", path: "../../../node_modules/.pnpm/@capacitor+filesystem@8.0.0-next.4_@capacitor+core@8.0.0-nightly-20251204T150751.0_91ec99f6e4ca7f18538e51affff2a7f7/node_modules/@capacitor/filesystem"),
        .package(name: "CapacitorSplashScreen", path: "../../../node_modules/.pnpm/@capacitor+splash-screen@8.0.0-nightly-20251204T150817.0_@capacitor+core@8.0.0-nightly-_7bbcb25b640af58dac2d1acac476cb09/node_modules/@capacitor/splash-screen"),
        .package(name: "CapacitorStatusBar", path: "../../../node_modules/.pnpm/@capacitor+status-bar@8.0.0-nightly-20251204T150817.0_@capacitor+core@8.0.0-nightly-202_2a1e8ef39aef319616b2ec0950de8cae/node_modules/@capacitor/status-bar")
    ],
    targets: [
        .target(
            name: "CapApp-SPM",
            dependencies: [
                .product(name: "Capacitor", package: "capacitor-swift-pm"),
                .product(name: "Cordova", package: "capacitor-swift-pm"),
                .product(name: "CapacitorApp", package: "CapacitorApp"),
                .product(name: "CapacitorBrowser", package: "CapacitorBrowser"),
                .product(name: "CapacitorCamera", package: "CapacitorCamera"),
                .product(name: "CapacitorDevice", package: "CapacitorDevice"),
                .product(name: "CapacitorFilesystem", package: "CapacitorFilesystem"),
                .product(name: "CapacitorSplashScreen", package: "CapacitorSplashScreen"),
                .product(name: "CapacitorStatusBar", package: "CapacitorStatusBar")
            ]
        )
    ]
)
