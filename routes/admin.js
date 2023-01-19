const express = require("express");

const router = express.Router();

const { addAdmin, allAdmin } = require("../controllers/admin");

router.route("/").post(addAdmin);
router.route("/all").get(allAdmin);

module.exports = router;
