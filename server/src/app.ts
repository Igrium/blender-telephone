import dotenv from 'dotenv'
import express from 'express'

dotenv.config({
    path: '.env'
})

const app = express();
const port = process.env.APP_PORT || 5000;

app.listen(port, () => console.log(`Listening on port ${port}`));