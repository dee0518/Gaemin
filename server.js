const express = require("express");

const app = express();
const PORT = 5500;

app.use(express.static("public"));
app.use(express.json());

app.listen(PORT, () => console.log(`server is running ${PORT}`));
