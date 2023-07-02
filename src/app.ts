import express, { Application, Request, Response } from "express";

const app:Application = express();

app.get('/hello',(req:Request,res:Response)=>{
    res.send('Testing Task Manager App');
})

const port:number = 3000;

app.listen(port,()=>{
    console.log(`Task Manager Application is Listening at Port ${port}...`);
});