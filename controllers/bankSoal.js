const banksoal = require('../models/bankSoalModel')

const quizModel = require('../models/quizModel')

exports.getAllSoal = (req, res) => {
    banksoal.find({})
        .then(soal => {
            res.status(200).json({message : "Success", data : soal});
        })
        .catch(err => {
            res.status(500).send(err);
        });
}

exports.addSoal = (req, res) => {
    banksoal.insertMany(req.body.questions)
    .then(soal => {
        const quiz = new quizModel({
            namaQuiz : req.body.quizTitle,
            daftarSoal : soal.map(s => s._id),
        })
        quiz.save()
        .then(() => {
            res.status(200).json({message : "Success"});
        })
        .catch(err => {
            res.status(500).send(err);
        });
    })
    .catch(err => {
        res.status(500).send(err);
    });
}