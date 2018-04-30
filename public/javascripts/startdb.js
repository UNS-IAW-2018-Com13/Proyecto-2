var MongoClient = require('mongodb').MongoClient;
const mongoose = require('mongoose');
var url = "mongodb://localhost:27017/Torneos";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  console.log("Database created!");  
  db.close();  
});
//var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("Torneos");
  dbo.createCollection("Jugadores", function(err, res) {
    if (err) throw err;
    console.log("Collection created!");
    db.close();
  });
});

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("Torneos");
  var myobj = {
        "nombre": "Trolden",
        "puntaje": 0,
        "mazos": ["Trolden1","Trolden2","Trolden3"]
    } ;
  dbo.collection("Jugadores").save(myobj, function(err, res) {
    if (err) throw err;
    console.log("1 document inserted");
    db.close();
  });
}); 

const jugadorSchema = new mongoose.Schema({
  nombre: {
    type: String,
    required: true
  },
  puntaje: {
    type: Number,
    required: true
  },
  mazos: [String]
});

mongoose.model('Jugador', jugadorSchema);