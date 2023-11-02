const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();


const vehicleRoute = require('./routes/vehicle.route');

global.__basedir = __dirname;

app.use(cors());
app.use(bodyParser.json({
    limit: '50mb',
    extended: true
}));
app.use(bodyParser.urlencoded({
    limit: '10mb',
    extended: false
}));

app.use('/vehicle', vehicleRoute);

const PORT = 3003;
app.listen(PORT, () => {
    console.log(`Server ready at port ${PORT}`);
});