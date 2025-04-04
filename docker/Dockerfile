# Base Node.js stage
FROM node:18-alpine AS node-base
WORKDIR /app

# Frontend build stage
FROM node-base AS frontend-builder
COPY frontend/package.json ./
RUN npm install
COPY frontend/ .
EXPOSE 3000
CMD ["npm", "run", "dev"]

# Backend build stage
FROM node-base AS backend-builder
COPY backend/package.json ./
RUN npm install
COPY backend/ .
EXPOSE 4000
CMD ["npm", "start"]

# AI NFT Generator build stage
FROM node-base AS ai-nft-generator-builder
COPY ai-nft-generator/package.json ./
RUN npm install
COPY ai-nft-generator/ .
EXPOSE 5001
CMD ["npm", "start"]

# Database stage
FROM postgres:15 AS database
ENV LANG en_US.utf8
COPY database/init.sql /docker-entrypoint-initdb.d/
COPY database/postgresql.conf /etc/postgresql/postgresql.conf

# Create healthcheck script for database
COPY --chmod=755 <<-"EOF" /usr/local/bin/healthcheck.sh
#!/bin/sh
pg_isready -U user -d mydb || exit 1
EOF

HEALTHCHECK --interval=30s --timeout=3s \
    CMD ["healthcheck.sh"]

EXPOSE 5432

# Ethereum node stage
FROM trufflesuite/ganache-cli:v6.12.2 AS ethereum-node

# Create healthcheck script for ethereum
COPY --chmod=755 <<-"EOF" /usr/local/bin/healthcheck.sh
#!/bin/sh
nc -z localhost 8545 || exit 1
EOF

# Create start script for ethereum
COPY --chmod=755 <<-"EOF" /usr/local/bin/start.sh
#!/bin/sh
ganache-cli \
    --port 8545 \
    --networkId 1337 \
    --chainId 1337 \
    --gasLimit 12000000 \
    --defaultBalanceEther 100 \
    --accounts 10 \
    --mnemonic "test test test test test test test test test test test junk" \
    --host 0.0.0.0
EOF

HEALTHCHECK --interval=30s --timeout=3s \
    CMD ["healthcheck.sh"]

EXPOSE 8545
CMD ["/usr/local/bin/start.sh"] 