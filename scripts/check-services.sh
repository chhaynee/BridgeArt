#!/bin/bash

# Colors for output
GREEN='\033[0;32m'
RED='\033[0;31m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Function to check if a port is open
check_port() {
    local port="$1"
    local service="$2"
    if nc -z localhost "$port"; then
        echo -e "${GREEN}✓${NC} $service is running on port $port"
    else
        echo -e "${RED}✗${NC} $service is not running on port $port"
    fi
}

# Function to check Solana validator
check_solana() {
    echo -e "\n${BLUE}Checking Solana Validator...${NC}"
    if curl -s http://localhost:8899 -X POST -H "Content-Type: application/json" -d '
        {"jsonrpc":"2.0","id":1, "method":"getVersion"}
    ' | grep -q "result"; then
        echo -e "${GREEN}✓${NC} Solana validator is responding"
    else
        echo -e "${RED}✗${NC} Solana validator is not responding"
    fi
}

# Function to check Ethereum node
check_ethereum() {
    echo -e "\n${BLUE}Checking Ethereum Node...${NC}"
    if curl -s http://localhost:8545 -X POST -H "Content-Type: application/json" -d '
        {"jsonrpc":"2.0","method":"eth_blockNumber","params":[],"id":1}
    ' | grep -q "result"; then
        echo -e "${GREEN}✓${NC} Ethereum node is responding"
    else
        echo -e "${RED}✗${NC} Ethereum node is not responding"
    fi
}

# Main checks
echo -e "${BLUE}Checking all services...${NC}"
check_port "3000" "Frontend"
check_port "4000" "Backend"
check_port "5432" "Database"
check_port "5001" "AI NFT Generator"
check_solana
check_ethereum

# Check Docker container status
echo -e "\n${BLUE}Docker Container Status:${NC}"
docker-compose ps 