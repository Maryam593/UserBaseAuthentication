import 'dotenv/config'
import express from'express';
import { connectDB } from './db/config.js';
import syncDB from './db/init.js';
import AllRoutes from './Routes/index.js';
const myApp = express();
const port = 3000;
myApp.use(express.json());
myApp.use(AllRoutes);
connectDB;
syncDB;
syncDB().then(()=>{
    console.log("Db Added")
})
//listen server 

myApp.listen(port,()=> {
    console.log(`server is running fine on port ${port}`);
})