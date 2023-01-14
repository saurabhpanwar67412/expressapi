import express from "express";
import routes from './src/routes/crmroutes'
// import mongoose from "mongoose";
import bodyParser from "body-parser";

const app = express();

const PORT = 80;

//mongoose connection
// mongoose.Promise = global.Promise;
// mongoose.connect('mongodb:////localhost/CRMdb'),{
//     useNewUrlParser  : true
// }

//bodyparser setup 
app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());

routes(app);

app.get('/', (req, res) =>{
    res.send(`Node and express server is runnning on port ${PORT}`);
});


app.listen(PORT, () =>{
    console.log(`Node and express server is runnning on port ${PORT}`);
})