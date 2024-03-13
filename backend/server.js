const express = require('express');
const cors=require("cors");

const app = express();

app.use(cors())
const routes = require('./routes');
const user_routes=require('./User_Login_Routes');
app.use(express.json());
app.use('/crude-api', routes);
app.use('/',user_routes)

const port = 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
