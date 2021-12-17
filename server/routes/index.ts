import * as mongoDB from 'mongodb';
import * as dotenv from 'dotenv';
// import model(s) here

export async function connectDB() {
    dotenv.config();
    const client = new mongoDB.MongoClient(process.env.DB_CONN_STRING);
    await client.connect();
    const db = client.db(process.env.DB_NAME);
}