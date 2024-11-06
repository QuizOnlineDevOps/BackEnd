const mongoose = require("mongoose");

const bankSoalSchema = new mongoose.Schema({
  soal: {
    type: mongoose.Schema.Types.String,
    required: true,
  },
  pilihan: [{type: mongoose.Schema.Types.String, required: true}],
  jawaban: {
    type: mongoose.Schema.Types.String,
    required: true,
  },
});

module.exports = mongoose.model("BankSoal", bankSoalSchema, "BankSoal");