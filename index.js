const express = require("express");
const initAndConnectDB = require("./config/db");
const app = express();
const router = require("./api/routes");
const PORT = process.env.PORT || 5000;
const cors = require("cors");

app.use(cors())

// db
initAndConnectDB();

//middleware
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// app.use(allowCrossDomain);

app.get('/', async (req, res)=> {
  res.send('Hello Customer');
})
app.use('/api', router);

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));