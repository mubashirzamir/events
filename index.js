const express = require('express');
const app = express();
const cors = require('cors')

const errorHandler = require('./api/middleware/ErrorHandler')

const db = require('./api/models')
const eventRouter = require('./api/routes/EventRoutes.js')

app.use(cors());
app.use(express.json());

app.use("/getPrograms", eventRouter)

app.use(errorHandler)

db.sequelize.sync().then(() => {
    app.listen(3001, () => console.log('Server is running on port 3001'));
})
