import express from "express";
import router from "./router"; // import routernya

const app = express();

app.use(express.json());

// check endpoint
app.get("/", (_, response) => {
  response.status(200).send("Server is up and running 💫");
});

app.use(router); // tambahkan baris ini untuk menggunakan router

const PORT = 4000;
app.listen(PORT, () => {
  console.log(`Express is running on Port ${PORT}`);
});