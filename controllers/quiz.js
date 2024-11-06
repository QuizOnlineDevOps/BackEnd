const quizModel = require('../models/quizModel')

// exports.getAllSoal = (req, res) => {
//     banksoal.find({})
//         .then(soal => {
//             res.status(200).json({message : "Success", data : soal});
//         })
//         .catch(err => {
//             res.status(500).send(err);
//         });
// }

exports.getAllQuiz = (req, res) => {
    quizModel.find({})
        .then(quiz => {
            res.status(200).json({ message: "Success", data: quiz });
        })
        .catch(err => {
            res.status(500).json({ message: "Error", data: err });
        });
}

exports.getQuiz = (req, res) => {
    quizModel.findById(req.params.id)
    .populate('daftarSoal')
        .then(quiz => {
            res.status(200).json({ message: "Success", data: quiz });
        })
        .catch(err => {
            res.status(500).json({ message: "Error", data: err });
        });
}