const functions = require('firebase-functions');

// The Firebase Admin SDK to access the Firebase Realtime Database.
const firebase = require('firebase-admin');
firebase.initializeApp();


// Create and Deploy Your First Cloud Functions
// https://firebase.google.com/docs/functions/write-firebase-functions


exports.helloWorld = functions.https.onRequest((request, response) => {
 response.send(request.protocol);
});

//exports.testWrite = functions.https.onRequest((req, resp) => {});
/*
function writeUserData(userId, name, email, imageUrl) {
  firebase.database().ref('users/' + userId).set({
    username: name,
    email: email,
    profile_picture : imageUrl
  });
}
*/

exports.addMessage = functions.https.onRequest(async (req, res) => {
  // Grab the text parameter.
  const original = req.query.text;
  var firestore = firebase.firestore();
  // Push the new message into the Realtime Database using the Firebase Admin SDK.
  const snapshot = await firestore.doc("/messages/main").set({original: original});
  // Redirect with 303 SEE OTHER to the URL of the pushed object in the Firebase console.
  res.redirect(303, snapshot.ref.toString());
});
