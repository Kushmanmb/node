#!/bin/sh
# Script to install Foundry - a toolkit for Ethereum application development
# This script downloads and installs Foundry using the official installer

set -e

echo "Installing Foundry..."

# Download and run the Foundry installer
curl -L https://foundry.paradigm.xyz | bash

# Source the environment to make foundryup available
# shellcheck disable=SC1091
if [ -f "$HOME/.foundry/bin/foundryup" ]; then
  export PATH="$HOME/.foundry/bin:$PATH"
fi

# Run foundryup to complete the installation
if command -v foundryup >/dev/null 2>&1; then
  foundryup
  echo "Foundry installation completed successfully"
else
  echo "Warning: foundryup command not found. Please restart your shell or add ~/.foundry/bin to your PATH"
  exit 1
fi
