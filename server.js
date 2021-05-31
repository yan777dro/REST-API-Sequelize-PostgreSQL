const express = require("express");
const cors = require("cors");

const app = express();

var corsOptions = {
  origin: "http://localhost:3000"
};

app.use(cors(corsOptions));

app.use(express.json()); 


const db = require("./app/models");
db.sequelize.sync();


app.get("/", (req, res) => {
  res.json({ message: "REST API is working !" });
});

require("./app/routes/routes")(app);

// listen @ port 3000
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running @ port ${PORT}.`);
});