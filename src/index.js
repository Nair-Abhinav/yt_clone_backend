import dotenv from 'dotenv'

import connection_DB from "./db/index.js";

// dot env needs to be configured..

dotenv.config({
    path:'./env'
})

connection_DB()