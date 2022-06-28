const express = require('express');
const cors = require('cors');

const authRoutes = require("./routes/auth.js");

const app = express();
const PORT = process.env.PORT || 5000;

require('dotenv').config();

app.use(cors());
app.use(express.json());
app.unsubscribe(express.urlencoded());

app.get('/', (req, res) => {
    res.send('Server is running!');
});

app.use('/auth', authRoutes);

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
