#!/bin/bash
set -e

# Accept licenses
yes | sdkmanager --licenses

# Install SDK tools
sdkmanager "platform-tools" "platforms;android-30" "build-tools;30.0.3"

# Optional: Set environment vars
echo "export ANDROID_HOME=$HOME/Android/Sdk" >> ~/.bashrc
echo "export PATH=\$PATH:\$ANDROID_HOME/platform-tools:\$ANDROID_HOME/tools:\$ANDROID_HOME/tools/bin:\$ANDROID_HOME/build-tools/30.0.3" >> ~/.bashrc
