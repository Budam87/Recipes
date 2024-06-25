const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());
app.use(express.json());


const { MongoClient, ObjectId } = require('mongodb');
const dbString ='mongodb+srv://budamindaugas:budulis87@cluster0.jphecra.mongodb.net';
const client = new MongoClient(dbString);

let conn;
let db;

async function connect() {
  try {
    conn = await client.connect();
    db = conn.db("Exam"); 
    app.listen(8080, () => console.log("serveris veikia"));
  } catch (e) {
    console.error(e);
  }
}
connect();

app.get("/recipes", async (req, res) => {
  try {
    let collection = db.collection("Recipes");
    let results = await collection.find({}).toArray();
    res.status(200).send(results);
  } catch (e) {
    console.error(e);
    res.status(500).send({ error: 'Klaida gaudant receptus' });
  }
});

app.get("/recipes/:id", async (req, res) => {
  try {
    let collection = db.collection("Recipes");
    let recipe = await collection.findOne({ _id: new ObjectId(req.params.id) });
    if (recipe) {
      res.status(200).send(recipe);
    } else {
      res.status(404).send({ error: 'Receptas nerastas' });
    }
  } catch (e) {
    console.error(e);
    res.status(500).send({ error: 'Klaida gaudant receptą' });
  }
});

app.get("/comments", async (req, res) => {
  try {
    let collection = db.collection("Comments");
    let results = await collection.find({}).toArray();
    res.status(200).send(results);
  } catch (e) {
    console.error(e);
    res.status(500).send({ error: 'Klaida gaudant komentus' });
  }
});

app.post('/comments', async (req, res) => {
  const {comment, name, email} = req.body;

  if(!comment || !name || !email) {
    return res.status(400).send({error: 'All fields are required'});
  }

  try {
    const collection = db.collection('Comments');
    const newComment = {comment, name, email, createdAt: new Date()};
    await collection.insertOne(newComment);
    res.status(201).send('Comment posted');
  } catch (e) {
    console.error(e);
    res.status(500).send('Posting failed');
  }
})

app.delete('/comments/:id', async (req, res) => {
  try {
    const collection = db.collection('Comments');
    const result = await collection.deleteOne({ _id: new ObjectId(req.params.id) });
    
    if (result.deletedCount === 1) {
      res.status(200).send({ message: 'Comment deleted successfully' });
    } else {
      res.status(404).send({ error: 'Comment not found' });
    }
  } catch (e) {
    console.error(e);
    res.status(500).send('Failed to delete comment');
  }
});