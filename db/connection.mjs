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

// async function main() {

//     try {
//         let collection = await db.collection("events")

//         const events = [
//             {
//                 title: "Annual Tech Innovators Conference",
//                 description: "A gathering of the brightest minds in technology to discuss the latest innovations and trends in the tech industry. Join us for keynote speeches, panel discussions, and networking opportunities.",
//                 event_date: "2024-05-21",
//                 organizer: "Tech Innovators Network",
//                 participants: [
//                     {
//                         full_name: "John Doe",
//                         email: "john.doe@example.com",
//                         date_of_birth: "1990-01-15",
//                         source: "social media"
//                     },
//                     {
//                         full_name: "Jane Smith",
//                         email: "jane.smith@example.com",
//                         date_of_birth: "1985-06-25",
//                         source: "friends"
//                     }
//                 ]
//             },
//             {
//                 title: "Global Health Summit",
//                 description: "A conference focused on the latest advancements in global health, featuring expert talks on healthcare innovation, policy, and research.",
//                 event_date: "2024-06-15",
//                 organizer: "World Health Organization",
//                 participants: [
//                     {
//                         full_name: "Alice Johnson",
//                         email: "alice.johnson@example.com",
//                         date_of_birth: "1982-03-30",
//                         source: "social media"
//                     },
//                     {
//                         full_name: "Robert Brown",
//                         email: "robert.brown@example.com",
//                         date_of_birth: "1978-12-11",
//                         source: "found myself"
//                     }
//                 ]
//             },
//             {
//                 title: "Sustainable Living Expo",
//                 description: "An expo showcasing sustainable products and practices, with workshops, exhibits, and talks aimed at promoting an eco-friendly lifestyle.",
//                 event_date: "2024-07-10",
//                 organizer: "Green Future Alliance",
//                 participants: [
//                     {
//                         full_name: "Emily Davis",
//                         email: "emily.davis@example.com",
//                         date_of_birth: "1995-08-21",
//                         source: "friends"
//                     },
//                     {
//                         full_name: "Michael Wilson",
//                         email: "michael.wilson@example.com",
//                         date_of_birth: "1983-05-16",
//                         source: "social media"
//                     }
//                 ]
//             },
//             {
//                 title: "International Music Festival",
//                 description: "A celebration of music from around the world, featuring live performances, cultural exhibits, and interactive workshops.",
//                 event_date: "2024-08-05",
//                 organizer: "Global Music Association",
//                 participants: [
//                     {
//                         full_name: "Laura Martinez",
//                         email: "laura.martinez@example.com",
//                         date_of_birth: "1992-04-05",
//                         source: "found myself"
//                     },
//                     {
//                         full_name: "David Lee",
//                         email: "david.lee@example.com",
//                         date_of_birth: "1987-07-19",
//                         source: "friends"
//                     }
//                 ]
//             },
//             {
//                 title: "Artificial Intelligence Symposium",
//                 description: "An in-depth symposium on the latest developments in AI, with sessions covering machine learning, ethics, and future applications.",
//                 event_date: "2024-09-20",
//                 organizer: "AI Research Institute",
//                 participants: [
//                     {
//                         full_name: "Sophia Wright",
//                         email: "sophia.wright@example.com",
//                         date_of_birth: "1989-10-22",
//                         source: "social media"
//                     },
//                     {
//                         full_name: "James Miller",
//                         email: "james.miller@example.com",
//                         date_of_birth: "1975-09-03",
//                         source: "found myself"
//                     }
//                 ]
//             }
//         ];

//         // Insert the events into the collection
//         const result = await collection.insertMany(events);

//     } finally {
//         // Close the connection to the database server

//     }
// }

// main()

export default db