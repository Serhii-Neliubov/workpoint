const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3001;

mongoose.connect(
  "mongodb+srv://warlog:80506067874@cluster0.bmcl0ax.mongodb.net/",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

app.use(cors());

// Определение схемы и модели MongoDB (пример)
const userSchema = new mongoose.Schema({
  name: String,
  surname: String,
  email: String,
  phone: String,
  description: String,
  file: String, // Здесь предполагается, что файл будет храниться как строка (путь к файлу или другая информация)
});

const User = mongoose.model("User", userSchema);
app.use(express.json());
app.get("/users", (req, res) => {
  // Ваша логика для обработки GET-запроса на /users
  res.status(200).json({ message: "GET request to /users received" });
});

// Обработка POST-запроса на /users
app.post("/users", async (req, res) => {
  try {
    const newUser = new User(req.body);
    await newUser.save();
    res.status(201).json({ message: "User added successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error adding user" });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
