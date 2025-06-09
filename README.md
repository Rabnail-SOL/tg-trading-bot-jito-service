# Solana Trading Bot

This project is a TypeScript-based trading bot designed for the Solana blockchain. It automates trading strategies, interacts with Solana DeFi protocols, and can be customized for various trading needs. This bot is not for real use case, but I have uploaded it for demo of how current bots work nowadays, so use it carefully.

## Features

- Automated trading on Solana
- Integration with DeFi protocols
- Configurable trading strategies
- Written in TypeScript for type safety and maintainability

## Prerequisites

- Node.js (v14 or higher)
- Yarn or npm
- Solana CLI tools
- A funded Solana wallet

## Installation

```bash
git clone https://github.com/Rabnail-SOL/tg-trading-bot-jito-service.git
cd Solana-trading-bot
npm install
```

## Configuration

1. Copy `.env.example` to `.env` and fill in your Solana wallet credentials and API keys.
2. Adjust `config.ts` to set your trading parameters and strategies.

## Usage

```bash
npm start
```

The bot will connect to the Solana network and begin executing trades based on your configuration.

## Folder Structure

- `src/` - Main source code for the trading bot
- `config/` - Configuration files
- `scripts/` - Utility scripts for setup and maintenance

## Disclaimer

This software is for educational purposes only. Use at your own risk.

## License

MIT License
