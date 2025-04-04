#!/bin/bash

# Array of branches to create
branches=(
    # Frontend
    "feature/frontend-setup"
    "feature/frontend-ui"
    "feature/frontend-integration"
    "feature/frontend-auth"
    
    # Backend
    "feature/backend-setup"
    "feature/backend-api"
    "feature/backend-auth"
    "feature/backend-database"
    
    # AI NFT Generator
    "feature/ai-nft-setup"
    "feature/ai-nft-generation"
    "feature/ai-nft-integration"
    
    # Blockchain
    "feature/solana-integration"
    "feature/ethereum-integration"
    "feature/bridge-contracts"
    "feature/wallet-integration"
    
    # Database
    "feature/database-setup"
    "feature/database-migrations"
    "feature/database-optimization"
    
    # DevOps
    "feature/docker-setup"
    "feature/ci-cd"
    "feature/deployment"
    
    # Testing
    "test/frontend"
    "test/backend"
    "test/integration"
    "test/e2e"
)

# Create each branch
for branch in "${branches[@]}"; do
    git checkout -b "$branch"
    echo "Created branch: $branch"
    git checkout main
done

echo "All branches created successfully!" 