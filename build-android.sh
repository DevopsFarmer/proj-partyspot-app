#!/bin/bash

# Build the web app
echo "Building web application..."
npm run build

# Remove Android platform if it exists
echo "Removing existing Android platform if it exists..."
rm -rf android/

# Initialize Capacitor project
echo "Initializing Capacitor project..."
# Skip init since we have capacitor.config.ts

# Add Android platform
echo "Adding Android platform..."
npx cap add android

# Copy web assets
echo "Copying web assets to Android platform..."
npx cap copy android

# Sync plugins and dependencies
echo "Syncing plugins and dependencies..."
npx cap sync android

echo "Build process completed!"
echo "The Android project has been created in the 'android' directory."
echo "To generate an APK, you would typically:"
echo "1. Open the Android project in Android Studio: npx cap open android"
echo "2. Use Android Studio to build the APK: Build > Build Bundle(s) / APK(s) > Build APK(s)"
echo ""
echo "For an immediate test APK, we can build it with Gradle directly:"
echo "cd android && ./gradlew assembleDebug"
echo ""
echo "The APK will be located at: android/app/build/outputs/apk/debug/app-debug.apk"