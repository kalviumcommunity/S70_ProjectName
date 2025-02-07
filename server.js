const express = require("express");
const connectDatabase = require("./db/Database"); 
const itemRoutes = require("./routes/dataItem");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;

connectDatabase(); 
app.use(express.json()); 

app.use("/item", itemRoutes); 

app.listen(PORT, () => console.log(`Server running on port http://localhost:${PORT}`));