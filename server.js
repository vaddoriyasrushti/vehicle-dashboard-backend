const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();


const vehicleRoute = require('./routes/vehicle.route');

global.__basedir = __dirname;

const corsOptions ={
    origin:'http://localhost:3000', 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200
}

app.use(cors(corsOptions));
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