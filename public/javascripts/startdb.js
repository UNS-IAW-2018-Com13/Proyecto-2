var MongoClient = require('mongodb').MongoClient;
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
        "Trolden": [0,["Trolden1","Trolden2","Trolden3"]],
        "Amaz": [0, ["Amaz1","Amaz2","Amaz3"]],
        "Kripp": [0, ["Kripp1","Kripp2","Kripp3"]],
        "Savjz": [0,["Savjz1","Savjz2","Savjz3"]],
        "DayNine": [0,0],
        "Kibler": [0,0],
        "Firebat":[0,0],
        "Trump":[0,0],
        "Dog":[0,0],
        "Frodan":[0,0],
        "Toast":[0,0],
        "Noxious":[0,0],
        "Thijs":[0,0],
        "Kolento":[0,0],
        "Brode":[0,0],
        "Forsen":[0,0]
    } ;
  dbo.collection("Jugadores").save(myobj, function(err, res) {
    if (err) throw err;
    console.log("1 document inserted");
    db.close();
  });
}); 