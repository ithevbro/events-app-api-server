import { MongoClient } from "mongodb";
const uri = "mongodb+srv://ithevbro:Vova1993@cluster0.ukafwtk.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
const client = new MongoClient(uri)

let conn;

try {
    conn = await client.connect()
} catch (e) {
    console.error(e)
}

let db = conn.db("eventsApp")

export default db