import express from "express";
import db from "../db/connection.mjs";
import { ObjectId } from "mongodb";

const eventsRouter = express.Router()

eventsRouter.get("/", async (req, res) => {
    let collection = await db.collection("events")
    let results = await collection.find({}).toArray()
    res.send(results).status(200);
});

eventsRouter.post("/", async (req, res) => {
    try {
        let newDocument = {
            title: req.body.title,
            description: req.body.description,
            event_date: req.body.event_date,
            organizer: req.body.organizer
        };
        let collection = await db.collection("events")
        let result = await collection.insertOne(newDocument)
        res.send(result).status(200);
    } catch (err) {
        console.error(err);
    }
});

eventsRouter.get("/:id", async (req, res) => {
    let collection = await db.collection("events")
    let query = { _id: new ObjectId(req.params.id) }
    let result = await collection.findOne(query)
    if (!result) {
        res.send("Not found").status(404);
    } else {
        res.send(result).status(200);
    }
});

eventsRouter.patch("/:id", async (req, res) => {
    try {
        let query = { _id: new ObjectId(req.params.id) }
        let newParticipant = {
            full_name: req.body.full_name,
            email: req.body.email,
            date_of_birth: req.body.date_of_birth,
            source: req.body.source
        };

        let collection = await db.collection("events")
        let result = await collection.updateOne(
            query,
            { $push: { participants: newParticipant } }
        );
        res.send(result).status(200);
    } catch (err) {
        console.error(err);
    }
});


export default eventsRouter