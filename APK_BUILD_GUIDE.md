# PartySpot Android APK Build Guide

This guide will help you generate an APK file from the PartySpot app that you can install on your Android device.

## Prerequisites

You'll need the following tools installed on your computer:
- [Node.js](https://nodejs.org/) (v16 or newer)
- [Android Studio](https://developer.android.com/studio)
- [Java Development Kit (JDK)](https://www.oracle.com/java/technologies/downloads/) (version 11 or newer)

## Step 1: Download the Project Files

Download the PartySpot project files from Replit to your local machine.

## Step 2: Install Dependencies

Open a terminal/command prompt in the project directory and run:

```bash
npm install
```

## Step 3: Build the Web Application

Build the web application that will be wrapped in the Android app:

```bash
npm run build
```

## Step 4: Initialize Capacitor for Android

If this is your first time setting up the Android build:

```bash
npx cap init PartySpot com.partyspot.app
npx cap add android
```

## Step 5: Copy and Sync Web Assets

```bash
npx cap copy android
npx cap sync android
```

## Step 6: Open the Project in Android Studio

```bash
npx cap open android
```

This will open the Android project in Android Studio.

## Step 7: Build the APK from Android Studio

1. In Android Studio, wait for the project to load and sync
2. Go to Build > Build Bundle(s) / APK(s) > Build APK(s)
3. Wait for the build to complete
4. Android Studio will show a notification that the APK was built. Click "locate" to find it.

## Step 8: Install the APK on Your Android Device

1. Transfer the APK file to your Android device
2. On your Android device, navigate to the APK file
3. Tap on it to install (you might need to enable "Install from unknown sources" in your device settings)

## Alternative: Install Using ADB

If you have ADB (Android Debug Bridge) set up:

1. Connect your Android device to your computer via USB
2. Enable USB debugging on your device
3. Run the following command:

```bash
adb install path/to/app-debug.apk
```

## Troubleshooting

- **Issue**: Build fails with Gradle errors
  **Solution**: Make sure you have the latest Android Studio and Gradle versions

- **Issue**: App crashes on startup
  **Solution**: Check that your Capacitor configuration points to the correct web assets directory

- **Issue**: "Install blocked" when trying to install the APK
  **Solution**: Go to Settings > Security > Install unknown apps and allow installation from the source you're using

## Notes

- The debug APK is larger than the release version. For a smaller APK, you'd need to create a release build with ProGuard enabled.
- The app might need additional permissions based on the features you implement.