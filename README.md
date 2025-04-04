# BridgeArt

Cross-chain NFT Bridge Platform

## Project Structure

- `frontend/`: Next.js web application
- `backend/`: Express.js API server
- `ai-nft-generator/`: AI NFT generation service
- `blockchain/`: Smart contracts and blockchain integration
- `database/`: PostgreSQL database setup and migrations
- `shared/`: Shared utilities and types
- `scripts/`: Deployment and utility scripts
- `docs/`: Project documentation

## Setup

1. Install dependencies:

```bash
npm install
```

1. Start the development environment:

```bash
docker-compose up --build
```

1. Access the services:

- Frontend: [http://localhost:3000](http://localhost:3000)
- Backend API: [http://localhost:4000](http://localhost:4000)
- AI NFT Generator: [http://localhost:5001](http://localhost:5001)
- Solana Validator: [http://localhost:8899](http://localhost:8899)
- Ethereum Node: [http://localhost:8545](http://localhost:8545)

## Development

### Prerequisites

- Node.js 18+
- Docker
- Docker Compose

### Local Development

1. Clone the repository:

```bash
git clone https://github.com/yourusername/bridgeart.git
cd bridgeart
```

1. Set up environment variables:

```bash
cp .env.example .env
```

1. Start the development environment:

```bash
docker-compose up --build
```

## Testing

```bash
# Run all tests
npm test

# Run specific service tests
npm run test:frontend
npm run test:backend
npm run test:blockchain
```

## Contributing

1. Fork the repository
1. Create your feature branch
1. Commit your changes
1. Push to the branch
1. Create a new Pull Request

## License

MIT License - see [LICENSE.md](LICENSE.md) for details
