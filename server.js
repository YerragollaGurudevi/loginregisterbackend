const express = require('express');
const app = express();
const cors = require('cors');
const logger = require('./utility/logger')
require("./db/conn")
const bodyParser = require("body-parser");
require("dotenv").config();
const userRoute = require("./routes/userRoute");
const addPost = require('./routes/addpost');
const bookingRoute = require('./routes/bookRoute');
app.use(bodyParser.json());

// app.use(cors());
app.use("/uploads",express.static('uploads'));

// Routes
app.use("/api/user", userRoute);
app.use("/api/addpost", addPost);
app.use("/api/booking", bookingRoute);


app.post("/",(req,res)=>{
  res.send("hello")
})



const PORT = process.env.PORT || 5050;
app.listen(PORT, () => {
  logger.info(`Server running on port ${PORT}`);
});