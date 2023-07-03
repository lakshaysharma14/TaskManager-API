import express, { Application, Request, Response } from "express";
import router from './routes/tasks-router'

const app:Application = express();
app.use(express.json())


//===============================================================================

app.get('/hello',(req:Request,res:Response)=>{
    res.send('Testing Task Manager App');
})

app.use('/api/v1/tasks/',router);


//================================================================================
const port:number = 3000;

app.listen(port,()=>{
    console.log(`Task Manager Application is Listening at Port ${port}...`);
});