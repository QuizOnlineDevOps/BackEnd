const mongoose = require("mongoose");

const quizSchema = new mongoose.Schema({
    namaQuiz : {
        type: String,
        required: true,
    },
    daftarSoal : [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "BankSoal",
            required: true,
        }
    ],
})

module.exports = mongoose.model("Quiz", quizSchema, "Quiz");