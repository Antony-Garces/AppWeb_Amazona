/* eslint-disable no-undef */
import express from "express";
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import productRouter from "./routers/productRouter.js";
import useRouter from "./routers/userRauter.js";

dotenv.config(); 

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true}));

mongoose.connect(process.env.MONGODB_URL || 'mongodb://localhost/amazona', {
 userNewUrlParser: true,
 useUnifiedTopology: true,
 useCreateIndex: true,
});

app.use('/api/users', useRouter);
app.use('/api/products', productRouter);
app.get('/', (req, res) => {
 res.send('Server as ready');
});

// eslint-disable-next-line no-unused-vars
app.use((err, req, res, next) => {
 res.status(500).send({message: err.message});
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
 console.log(`Server at http://localhost:${port}`);
});
