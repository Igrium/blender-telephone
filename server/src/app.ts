import dotenv from 'dotenv'
import express from 'express'

import TestClass from '../../common/src/test'

dotenv.config({
    path: '.env'
})

const app = express();
TestClass.sayHello();

const port = process.env.APP_PORT || 5000;



app.listen(port, () => console.log(`Listening on port ${port}`));