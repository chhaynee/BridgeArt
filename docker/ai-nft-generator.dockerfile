FROM node:18-alpine

WORKDIR /app

# Copy package files
COPY ai-nft-generator/package*.json ./

# Install dependencies
RUN npm install

# Copy source code
COPY ai-nft-generator/ .

# Create healthcheck script
COPY --chmod=755 <<-"EOF" /usr/local/bin/healthcheck.sh
#!/bin/sh
wget -q --spider http://localhost:5000/health || exit 1
EOF

# Add healthcheck
HEALTHCHECK --interval=30s --timeout=10s --start-period=5s --retries=3 \
    CMD ["healthcheck.sh"]

EXPOSE 5000

CMD ["npm", "start"]
