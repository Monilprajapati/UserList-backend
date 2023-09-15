import express from "express";
import dotenv from "dotenv";
import connectDB from "./database/db.js";
import routes from "./routes/route.js";
import cors from "cors";
import bodyParser from "body-parser";

const app = express();
dotenv.config();
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.use('/', routes);
const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;
const port = process.env.PORT || 5000;
connectDB(username, password);
app.listen(port, () => {
  console.log(`server is running on ${port}`);
});
