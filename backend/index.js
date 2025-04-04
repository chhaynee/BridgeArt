const express = require('express');
const app = express();
const port = 4000;

app.use(express.json());

app.get('/', (req, res) => {
  res.json({ message: 'Backend is running!' });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
}); 