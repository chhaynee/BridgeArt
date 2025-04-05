FROM node:18-alpine
WORKDIR /app
COPY frontend/package*.json ./
RUN npm install
COPY frontend/src ./src
RUN if [ ! -f "pages/index.js" ]; then \
    mkdir -p pages && \
    echo 'export default function Home() { return <div>BridgeArt Frontend</div> }' > pages/index.js; \
    fi
EXPOSE 3000
CMD ["npm", "run", "dev"]
