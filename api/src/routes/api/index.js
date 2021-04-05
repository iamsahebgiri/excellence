const express = require("express");
const authRoutes = require("./auth");
const courseRoutes = require("./course");
const classRoutes = require("./class");
const subjectRoutes = require("./subject");

const router = express.Router();

router.get("/", (req, res) => {
  res.json({
    message: "Excellence API",
  });
});

router.use("/auth", authRoutes);
router.use("/course", courseRoutes);
router.use("/class", classRoutes);
router.use("/subject", subjectRoutes);

module.exports = router;
