const e = require("express");
const { getAllSoal, addSoal } = require("../controllers/bankSoal");

const router = e.Router();

router.get("/getAllSoal", getAllSoal);
router.post("/addSoal", addSoal); // menambahkan dalam jumlah banyak by default

module.exports = router;