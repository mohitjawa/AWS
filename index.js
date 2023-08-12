const express = require('express');
const router = require("./src/routes/routes");
const app = express();
const port = 3000;
const authenticateToken=require('./helper/authentication/auth')
require('./config/database')

app.use(express.json());

 // Protected routes
 app.use("/",router);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
}); 