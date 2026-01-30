# Foundry Installation Script

This directory contains a script to install Foundry, a toolkit for Ethereum application development.

## Usage

To install Foundry, run:

```bash
./tools/install-foundry.sh
```

This script will:
1. Download the official Foundry installer from https://foundry.paradigm.xyz
2. Execute the installer
3. Run `foundryup` to complete the installation

## What is Foundry?

Foundry is a blazing fast, portable and modular toolkit for Ethereum application development written in Rust. It consists of:

- **Forge**: Ethereum testing framework (like Truffle, Hardhat and DappTools)
- **Cast**: Swiss army knife for interacting with EVM smart contracts
- **Anvil**: Local Ethereum node, akin to Ganache
- **Chisel**: Fast, utilitarian, and verbose solidity REPL

## Requirements

- Unix-like operating system (Linux, macOS)
- `curl` command-line tool
- Internet connection

## After Installation

After running the installation script, Foundry tools will be available in your PATH:
- `forge`
- `cast`
- `anvil`
- `chisel`

You may need to restart your shell or run:
```bash
export PATH="$HOME/.foundry/bin:$PATH"
```

## More Information

For more details about Foundry, visit:
- Official documentation: https://book.getfoundry.sh/
- GitHub repository: https://github.com/foundry-rs/foundry
