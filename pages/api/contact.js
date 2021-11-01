import { MongoClient } from 'mongodb'
async function handler(req, res) {
    if (req.method == 'POST') {
        console.log(req.body)
        const { email, name, message } = req.body;
        console.log(email, name, message)

        //Store it in a db
        const newMessage = { email, name, message };
        console.log(newMessage)
        let client;
        try {
            client = await MongoClient.connect("mongodb+srv://Roshi:hDHY1p5E7RkOqICg@cluster0.ybo3c.mongodb.net/myFirstDatabase?retryWrites=true&w=majority")
        }
        catch (error) {
            res.status(500).json({ message: "Error", message, newMessage })
            return;
        }
        const db = client.db('myFirstDatabase');
        try {
            const result = await db.collection('messages').insertOne(newMessage);
        }
        catch (error) {
            client.close();
            res.status(500).json({ message: "Error storing" })
            return;
        }

        res.status(201).json({ message: "Successful", message, newMessage })

    }
}
export default handler;