const e = require("express");
const {getAllQuiz, getQuiz} = require("../controllers/quiz");

const router = e.Router();

router.get("/getAllQuiz", getAllQuiz);

router.get("/getQuiz/:id", getQuiz);

module.exports = router;