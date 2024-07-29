"use strict";
/* -------------------------------------------------------
    EXPRESSJS - LIBRARY Project with Sequelize
------------------------------------------------------- */

const express = require("express");
const cors = require("cors");
const app = express();

require("dotenv").config();
const PORT = process.env.PORT || 8000;

app.use(
  cors({
    //origin: "http://localhost:3000",
  })
);

/* ------------------------------------------------------- */
// Accept json data and convert to object:
app.use(express.json());

// AsyncErrors to errorHandler:
require("express-async-errors");

/* ------------------------------------------------------- */

/* ------------------------------------------------------- */

app.use(require("./routes/bookRouter"));
/* ------------------------------------------------------- */
// ErrorHandler:
app.use(require("./middlewares/errorHandler"));
/* ------------------------------------------------------- */
app.listen(PORT, () => console.log("Running: http://127.0.0.1:" + PORT));
