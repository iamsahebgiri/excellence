const express = require("express");
const authRoutes = require("./auth");

const router = express.Router();

router.get("/", (req, res) => {
  res.json({
    message: "Excellence API",
  });
});

router.use("/auth", authRoutes);

module.exports = router;
