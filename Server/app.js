const path = require("path");
const express = require("express");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const createError = require("http-errors");
const mongoose = require('mongoose')
const cors = require('cors')

const models =require('./Models')
const services =require('./Services')

const app = express();


const indexRouter = require("./routes/index");
const usersRouter = require("./routes/users");
const productRouter = require("./routes/product")

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.use("/uploads",express.static("uploads"))
app.use(cors({
  origin:"*"
}))


app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/product",productRouter)

app.models = {
product: models.product
}
app.services = {
product: new services.product(app.models)
}

const url = ''

mongoose.connect(url)
.then(()=> console.log('connected!'))
.catch((err)=>console.log(err))


// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
