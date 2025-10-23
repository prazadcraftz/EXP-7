const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 5000;
app.use(cors());
const products = [
  { id: 1, name: 'Laptop', price: 1200 },
  { id: 2, name: 'Smartphone', price: 800 },
  { id: 3, name: 'Headphones', price: 150 }
];
app.get('/api/products', (req, res) => res.json(products));
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
