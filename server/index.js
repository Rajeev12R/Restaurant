import express from 'express';
import mongoose from 'mongoose';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config();


// Database Connection
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log("Connected to MongoDB");
    })
    .catch((err) => {
        console.error('Failed to connect to MongoDB', err);
    });


const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(
    cors({
        origin: 'http://localhost:5173/',
        method: ['GET', 'POST', 'DELETE', 'PUT'],
        allowedHeaders: [
            'Content-Type',
            'Authorization',
            'Cache-Control',
            'Expires',
            'Pragma',
        ],
        credentials : true
}));

app.use(cookieParser());

app.listen(port, (err) => {
    if (err) {
        console.log('App not listening');
    }else{
        console.log(`App listening on port ${port}`);
    }
})


