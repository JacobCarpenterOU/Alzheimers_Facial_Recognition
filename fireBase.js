//app_firebase ={} holds the private function

var app_fireBase = {}; //global variable
(function() {
  var config = {
    apiKey: "AIzaSyDF7yL332wRhf-w_ekgZaNlIG1vN5qlIw0",
    authDomain: "friendly-flashback.firebaseapp.com",
    databaseURL: "https://friendly-flashback.firebaseio.com",
    projectId: "friendly-flashback",
    storageBucket: "friendly-flashback.appspot.com",
    messagingSenderId: "1017351650572"
  };
  firebase.initializeApp(config);

  app_fireBase = firebase;
})();
const db = firebase.firestore();
db.settings({ timestampsInSnapshots: true });

// ==================================================THIS IS FOR UPLOADING IMAGES=====================================================
// Get a reference to the storage service, which is used to create references in your storage bucket
var storage = firebase.storage();

// Create a storage reference from our storage service
var storageRef = storage.ref();

// ======================================================================================================
