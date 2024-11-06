require('dotenv').config();

const express = require("express");
const mongoose = require("mongoose");
const http = require("http");
const socketIo = require("socket.io");
const cors = require("cors");
const bankSoalRouter = require("./routes/bankSoal");
const quizRouter = require("./routes/quiz");
const quizModel = require("./models/quizModel");
const bankSoalModel = require('./models/bankSoalModel');

const app = express();
const port = 3000;

const server = http.createServer(app, );

const io = socketIo(server);

app.use(express.json());
app.use(cors());

//socket
io.on("connection", (socket) => {
  console.log("A user connected");

  socket.on("disconnect", () => {
    console.log("User disconnected");
  });
});
//backend
app.get("/", (req, res) => {
  res.send("Welcome to QuizOnline Backend!");
});
app.listen(port, () => {
  console.log(`QuizOnline Backend is running at http://localhost:${port}`);
});
//database
mongoose
  .connect(process.env.DATABASE_URL, {})
  .then(() => {
    initialData();
    console.log("MongoDB connected...")
  })
  .catch((err) => console.log(err));

const initialData = () => {
  bankSoalModel.estimatedDocumentCount()
  .then((count) => {
    if(count === 0){
      const soal1 = new bankSoalModel({
        soal: "Apa warna langit?",
        pilihan : [
          "Hitam",
          "Biru",
          "Hijau",
        ],
        jawaban: "Biru",
      })
      const soal2 = new bankSoalModel({
        soal: "Apa warna rumput?",
        pilihan : [
          "Hitam",
          "Biru",
          "Hijau",
        ],
        jawaban: "Hijau",
      })
      const soal3 = new bankSoalModel({
        soal : "Apakah kucing makhluk hidup ?",
        pilihan : [
          "Ya",
          "Tidak"
        ],
        jawaban : "Ya"
      })

      Promise.all([soal1.save(), soal2.save(), soal3.save()]).then((res) => {
        const quiz = new quizModel({
          namaQuiz: "Quiz Percobaan",
          daftarSoal: res.map((item) => item._id),
        })
        quiz.save()
        console.log("Complete initial data");

      })
      ;
    }
  })
}


//route
app.use("/bankSoal", bankSoalRouter);
app.use("/quiz", quizRouter);
