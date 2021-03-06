import dotenv from 'dotenv'
import {Pool} from 'pg'


dotenv.config()


const {
    POSTGRES_HOST,
    POSTGRES_DB,
    POSTGRES_TEST_DB,
    POSTGRES_USER,
    POSTGRES_PASSWORD
} = process.env
console.log(POSTGRES_TEST_DB);

let client : Pool;

if (process.env.ENV == 'dev') {
    client = new Pool({
        host: POSTGRES_HOST,
        database: POSTGRES_DB,
        user: POSTGRES_USER,
        password: POSTGRES_PASSWORD,
    })
} else {
    client = new Pool({
        host: POSTGRES_HOST,
        database: POSTGRES_TEST_DB,
        user: POSTGRES_USER,
        password: POSTGRES_PASSWORD,
    })
}


export default client