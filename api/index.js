const express = require("express");
const morgan = require("morgan");
const cors = require("cors");

require("dotenv").config();

const apiRoutes = require("./src/routes/api");
const apiErrorHandler = require("./src/middleware/apiErrorHandler");

const app = express();
require("./src/database");

app.use(cors());
app.use(morgan("tiny"));
app.use(express.json());

app.use("/api/v1", apiRoutes);

app.use(apiErrorHandler);
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`🌀 Server started at http://localhost:${PORT}...`);
});
