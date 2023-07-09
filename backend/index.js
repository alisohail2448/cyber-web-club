const express = require("express");
const dbConnect = require("./config/dbConnect.js");
const app = express();
const dotenv = require("dotenv").config();
const PORT = process.env.PORT || 4000;
const cyberRouter = require("./routes/cyberRoutes.js");
const bodyParser = require("body-parser");
const { notFound, errorHandler } = require("./middlewares/errorHandler.js");
const cookieParser = require("cookie-parser");
const cors = require('cors');

dbConnect();


app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

// app.use('/', (req, res) =>{
//     res.send('Hello from server side');
// });

app.use("/api", cyberRouter);
// app.use("/api/user", authRouter);

app.use(notFound);
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server is running at PORT ${PORT}`);
});
