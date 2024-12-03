import express  from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import router from './routes/user_Route.js';
//mongodb+srv://kareemlero:Karmost64@cluster0.9h43o.mongodb.net/?
const port = 4000
const app = express();
app.use(cors());
app.use(express.json());

app.use(router);
app.get('/',(req,res)=>{
    res.send('Welcome World!');
})

// Connect to local MongoDB
//  const connect = mongoose.connect("mongodb://localhost:27017/tropidiadb");
//  if(connect){
//      console.log('MongoDB Connected...');
//  }else{
//      console.log('Connection failed...');
//  }

//connect to atlas MongoDB
 mongoose.connect('mongodb+srv://kareemlero:Karmost64@cluster0.9h43o.mongodb.net/?')
    .then(()=> console.log('MongoDB Connected...'))
   .catch(err=>console.log(err));
app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
})
