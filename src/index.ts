import express from "express";
import cors from "cors";
import router from "./routes";
import dotenv from "dotenv";
import connectDB from "./utils/connectDB";
import bodyParser from "body-parser";
import xmlParser from "body-parser-xml";

dotenv.config();

const PORT = process.env.PORT || 4000;

const app = express();
connectDB();
app.use(cors());
app.use(express.json());
xmlParser(bodyParser);
app.use(bodyParser.xml());
router(app);

app.listen(PORT, () =>
  console.log(
    `Server is running on PORT: ${PORT}\nSwagger URL: http://localhost:${PORT}/api-docs/`
  )
);
