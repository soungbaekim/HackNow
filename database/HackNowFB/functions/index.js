const functions = require('firebase-functions');

// The Firebase Admin SDK to access the Firebase Realtime Database.
const firebase = require('firebase-admin');
firebase.initializeApp();
var firestore = firebase.firestore();


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
  // Push the new message into the Realtime Database using the Firebase Admin SDK.
  const snapshot = await firestore.doc("/messages/main").set({original: original});
  // Redirect with 303 SEE OTHER to the URL of the pushed object in the Firebase console.
  res.json({original: original});
});




/* Login Functions */
exports.signIn = functions.https.onRequest(async (req, res) => {
  const user_id = req.query.user_id;
  const password = req.query.password;

  const docRef = firestore.collection("users").doc(user_id);

  docRef.get().then(function(doc) {
    if (doc.exists) {
        if (password === doc.data().password) {
          console.log("Verification Successful");
          res.json({status: true});
        }
    } else {
        console.log("No such document!");
    }
    res.json({status: false});
    return;
  }).catch(function(error) {
    console.log(error);
    res.json({status: false});
    return;
  });

  // add an update user race(s) function

});


/* User Functions */
/*
exports.addUser = functions.https.onRequest(async (req, res) => {
  const user_name= req.query.user_name;
  const user_id = req.query.user_id;
  const user_age = req.query.user_age;
  const user_bio = req.query.user_bio;


  const docRef = firestone.colleciton("users").doc(user_id)
  await docRef.set({
    user_age = user_age,
    user_bio = user_bio,
    user_name = user_name,
  });

  const docRef = firestone.colleciton("users").doc(user_id).collection("races").doc(race_id)
  // add an update user race(s) function




});
*/


/* Race Functions */

/* Initializes Race
  Input: user_id (username)
*/
/*
exports.raceInit = functions.https.onRequest(async (req, res) => {

  const user_id = req.query.user_id;
  const race_id = req.query.race_id;
  const race_dist = req.query.race_dist;

  const docRef = firestore.collection("races").doc(race_id);
  await docRef.set({
    race_id: race_id,
    race_dist: race_dist,
    race_state: 0,
    runners: [
      {
        runner_id: user_id,
        runner_dist: 0
      },
    ],
  });
});
*/
