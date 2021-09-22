const { MongoClient } = require('mongodb');
const uri =
  'mongodb+srv://technical-assessment-user:TechnicalAssessment123@cluster0.z1y8c.mongodb.net/mongo-test?retryWrites=true&w=majority';

(async function () {
  try {
    const client = new MongoClient(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    await client.connect();
    // console.log('Connected successfully to server');
    // const db = client.db(dbName);
    // const collection = db.collection('documents');
    // client.connect((err) => {
    //   // const collection = client.db('test').collection('devices');
    //   // perform actions on the collection object
    //   client.close();
    // });
  } catch (e) {
    console.error(e.message);
  }
})();
