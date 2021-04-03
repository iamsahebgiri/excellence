const express = require("express");
const morgan = require("morgan");

require("dotenv").config();

const apiRoutes = require("./src/routes/api");
const errorHandler = require("./src/middleware/errorHandler");

const app = express();
require("./src/database");

app.use(morgan("tiny"));
app.use(express.json());

app.use("/api/v1", apiRoutes);

app.use(errorHandler);
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`🌀 Server started at http://localhost:${PORT}...`);
});
