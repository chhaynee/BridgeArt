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