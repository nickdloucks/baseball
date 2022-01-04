import express from "express";

const app = express();
const port = 3333;

app.use(express.static('public'));
app.listen(port, () => {});