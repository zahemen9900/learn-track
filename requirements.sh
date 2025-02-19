#!/bin/bash

# Exit on error
set -e

echo "🚀 Starting LearnTrack setup process in WSL..."

# Check if running in WSL
if ! grep -q Microsoft /proc/version; then
    echo "❌ This script is designed to run in WSL (Windows Subsystem for Linux)"
    exit 1
fi

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js using:"
    echo "curl -fsSL https://deb.nodesource.com/setup_lts.x | sudo -E bash -"
    echo "sudo apt-get install -y nodejs"
    exit 1
fi

echo "✅ Node.js $(node --version) is installed"

# Install dependencies
echo "📦 Installing dependencies..."
npm install || {
    echo "❌ Failed to install dependencies"
    exit 1
}

# Create environment file if it doesn't exist
if [ ! -f ".env" ]; then
    echo "🔧 Creating .env file..."
    # Ensure proper line endings for WSL
    echo -e "MONGODB_URI=your_mongodb_uri\nFIREBASE_API_KEY=your_firebase_api_key" > .env
    echo "✅ Created .env file. Please update with your actual credentials."
fi

# Ensure proper file permissions
chmod +x requirements.sh
chmod 600 .env 2>/dev/null || true

# Run linting
echo "🔍 Running linter..."
npm run lint || {
    echo "⚠️ Linting found some issues"
    # Don't exit as this might be expected for a fresh setup
}

# Format code
echo "💅 Formatting code..."
npm run format || {
    echo "⚠️ Code formatting had some issues"
    # Don't exit as this might be expected for a fresh setup
}

# Run tests
echo "🧪 Running tests..."
npm run test -- --watchAll=false || {
    echo "⚠️ Some tests might have failed"
    # Don't exit as this might be expected for a fresh setup
}

echo -e "\n🎉 Setup completed! You can now start the development server with: npm start"
echo "📝 Remember to update the .env file with your actual credentials"
echo "💡 Tip: Access your project folder in WSL using: cd /mnt/c/Users/jnopa/Documents/learn-track"