import * as express from 'express';
import * as mongoose from 'mongoose';

let app: express.Application = express();

app.listen(8080, function(req,res){
    console.log("running....")
});

mongoose.connect(uris:'mongodb+srv://vasu:Thapar12@cluster0.ua87g.mongodb.net/test?retryWrites=true&w=majority')
.then(()=>{
console.log('connected')
});

app.use(function(req,res,next){
    console.log('hello')
    next();
});



app.get('/login', function(req: any,res,next){
    const data ={fist_name: 'vasu', last_name: 'kataria'};
    // res.status(200).send(data);
    req.user =data;
    next();
},(req:any,res,next)=>{
    console.log('call another middleware')
    res.status(200).send(req.user)
});