const express = require('express');
const app = express();

// Enable JSON parsing
app.use(express.json());

// Basic health check endpoint
app.get('/health', (req, res) => {
    res.json({ status: 'healthy' });
});

// Root endpoint
app.get('/', (req, res) => {
    res.json({ 
        message: 'AI NFT Generator API is running',
        version: '1.0.0'
    });
});

// Generate NFT endpoint (placeholder)
app.post('/generate', (req, res) => {
    res.json({
        message: 'NFT generation endpoint',
        status: 'working'
    });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, '0.0.0.0', () => {
    console.log(`AI NFT Generator running on port ${PORT}`);
}); 