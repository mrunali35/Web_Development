const functions = require('firebase-functions');

// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });

//This is HTTP on trigger realtime cloud function
  exports.helloWorld = functions.https.onRequest((request, response) => {
   response.send("Hello from Firebase!");
  });

exports.writeDB = functions.database
    .ref('/some/path/{user}')
    .onWrite(event => {
        var data = event.data.val();
        var dataTitle = "TITLE";
        data.title = dataTitle;
        var dataMsg = "MSG";
        data.msg = dataMsg;
        event.data.ref.set(data);
    });




