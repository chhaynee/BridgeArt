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

# BridgeArt - Local Development Setup

## Prerequisites

- Docker Desktop
- Node.js 18+ (LTS)
- Git

## Setup Instructions

1. Clone the repository:

```bash
git clone https://github.com/yourusername/bridgeart.git
cd bridgeart
```

2. Create environment files:

```bash
# Copy example env file
cp .env.example .env
```

3. Start Docker services:

```bash
# Build and start all services
docker-compose up --build -d

# Check service status
./scripts/check-services.sh

# View logs
docker-compose logs -f
```

4. Access the services:

- Frontend: [http://localhost:3000](http://localhost:3000)
- Backend API: [http://localhost:4000](http://localhost:4000)
- AI NFT Generator: [http://localhost:5001](http://localhost:5001)
- Solana Validator: [http://localhost:8899](http://localhost:8899)
- Ethereum Node: [http://localhost:8545](http://localhost:8545)

## Useful Commands

```bash
# Stop all services
docker-compose down

# Rebuild specific service
docker-compose up -d --build <service_name>

# View logs of specific service
docker-compose logs -f <service_name>

# Remove all containers and volumes (fresh start)
docker-compose down -v
docker system prune -f
```

## Troubleshooting

1. Port conflicts:
   - Change ports in docker-compose.yml if you have conflicts
   - Common conflicts: 3000 (frontend), 5432 (database)

2. Database connection issues:
   - Check if database is healthy: `docker-compose ps`
   - View database logs: `docker-compose logs database`

3. Permission issues:
   - Run `chmod +x scripts/check-services.sh`
   - Ensure Docker has necessary permissions

## Development Workflow

1. Pull latest changes:
```bash
git pull origin main
```

2. Rebuild services:
```bash
docker-compose down
docker-compose up --build -d
```

3. Check logs for errors:
```bash
docker-compose logs -f
```
```

Also, create a `.env.example` file:

```env:.env.example
# Frontend
NEXT_PUBLIC_API_URL=http://localhost:4000

# Backend
PORT=4000
DATABASE_URL=postgres://user:password@database:5432/mydb

# Database
POSTGRES_USER=user
POSTGRES_PASSWORD=password
POSTGRES_DB=mydb

# AI NFT Generator
AI_SERVICE_PORT=5000

# Blockchain
SOLANA_RPC_URL=http://localhost:8899
ETH_RPC_URL=http://localhost:8545
```

Create a quick-start script `scripts/setup.sh`:

```bash:scripts/setup.sh
#!/bin/bash

# Colors for output
GREEN='\033[0;32m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

echo -e "${BLUE}Setting up BridgeArt development environment...${NC}"

# Check if Docker is installed
if ! command -v docker &> /dev/null; then
    echo "Docker is not installed. Please install Docker first."
    exit 1
fi

# Check if Docker Compose is installed
if ! command -v docker-compose &> /dev/null; then
    echo "Docker Compose is not installed. Please install Docker Compose first."
    exit 1
fi

# Create .env file if it doesn't exist
if [ ! -f .env ]; then
    echo -e "${BLUE}Creating .env file...${NC}"
    cp .env.example .env
fi

# Make scripts executable
chmod +x scripts/check-services.sh

# Start services
echo -e "${BLUE}Starting Docker services...${NC}"
docker-compose down
docker system prune -f
docker-compose up --build -d

# Wait for services to start
echo -e "${BLUE}Waiting for services to start...${NC}"
sleep 15

# Check services
echo -e "${BLUE}Checking service status...${NC}"
./scripts/check-services.sh

echo -e "${GREEN}Setup complete! Access the services at:${NC}"
echo "Frontend: http://localhost:3000"
echo "Backend API: http://localhost:4000"
echo "AI NFT Generator: http://localhost:5001"
echo "Solana Validator: http://localhost:8899"
echo "Ethereum Node: http://localhost:8545"
```

Make the script executable:
```bash
chmod +x scripts/setup.sh
```

Now your teammates can simply:

1. Clone the repository:
```bash
git clone https://github.com/yourusername/bridgeart.git
cd bridgeart
```

2. Run the setup script:
```bash
./scripts/setup.sh
```

This will:
- Check for required dependencies
- Create necessary environment files
- Start all Docker services
- Verify everything is running correctly

For troubleshooting, they can:

1. Check service status:
```bash
docker-compose ps
```

2. View logs:
```bash
docker-compose logs -f
```

3. Restart specific service:
```bash
docker-compose restart <service_name>
```

4. Clean start:
```bash
docker-compose down -v
docker system prune -f
docker-compose up --build -d
```

Let me know if you need any clarification or additional setup instructions!
