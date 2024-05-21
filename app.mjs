import express from "express";
import cors from "cors";
import eventsRouter from "./routes/events.mjs";
const PORT = 3000
const app = express()

app.use(cors())
app.use(express.json())
app.use("/events", eventsRouter)

app.listen(PORT)