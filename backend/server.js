const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const routes = require("./routes/ToDoRoutes");

require("dotenv").config();

const app = express();

const PORT = process.env.port || 5001;

app.use(express.json());
app.use(cors());

mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => console.log(`Connected to MongoDB `))
  .catch((err) => console.log(err));

app.use(routes);
app.listen(PORT, () => console.log(`Listening on Port ${PORT}`));

// sankalpdhama11
// password hAtSUHmVNrP1DWde

//mongodb+srv://sankalpdhama11:<password>@cluster0.spzu3rm.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
