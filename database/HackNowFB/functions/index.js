const functions = require('firebase-functions');

// The Firebase Admin SDK to access the Firebase Realtime Database.
const firebase = require('firebase-admin');
firebase.initializeApp();
var firestore = firebase.firestore();


// Create and Deploy Your First Cloud Functions
// https://firebase.google.com/docs/functions/write-firebase-functions

/* Example Functions */
exports.helloWorld = functions.https.onRequest((request, response) => {
 response.send(request.protocol);
});

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
});


/* User Functions */

/*
exports.addUser = functions.https.onRequest(async (req, res) => {
  const user_name= req.query.user_name;
  const user_id = req.query.user_id;
  const user_age = req.query.user_age;
  const user_bio = req.query.user_bio;


  const docRef = firestore.collection("users").doc(user_id)
  await docRef.set({
    user_age = user_age,
    user_bio = user_bio,
    user_name = user_name,
  });

  const docRef = firestone.colleciton("users").doc(user_id).collection("races").doc(race_id)


});
*/


exports.getUser = functions.https.onRequest(async (req, res) => {
  const user_id = req.query.user_id;
  const docRef = firestore.collection("users").doc(user_id);

  console.log(user_id);

  docRef.get().then(function(doc) {
    if (doc.exists) {
      res.json({status: true, data: doc.data()});
    } else {
      res.json({status: false, data: null});
    }
    return;
  }).catch(function(error) {
    console.log(error);
    res.json({status: false, data: null});
    return;
  });
});




/* Race Functions */

// Initializes Race
exports.raceInit = functions.https.onRequest(async (req, res) => {

  const user_id = req.query.user_id;
  const race_id = req.query.race_id;
  const race_dist = req.query.race_dist;

  const docRef = firestore.collection("races").doc(race_id);
  docRef.set({
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

exports.raceGetInvites = functions.https.onRequest(async (req, res) => {

  const user_id = req.query.user_id;

  const docRef = firestore.collection("invites").doc(username);

  docRef.get().then(function(doc) {
    if (doc.exists) {
      res.json({status: true, data: doc.data()});
    } else {
      res.json({status: false, data: null});
    }
    return;
  }).catch(function(error) {
    console.log(error);
    res.json({status: false, data: null});
    return;
  });
});

/*
exports.raceSendInvites = functions.https.onRequest(async (req, res) => {
  const user_id = req.query.user_id;
  const invited_id = req.query.invited_id;
  const race_id = req.query.race_id;

  const docRef = firestore.collection("invites").doc(username);
  docRef.set({
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

// Get RaceData
exports.getRace = functions.https.onRequest(async (req, res) => {
  const race_id = req.query.race_id;
  const docRef = firestore.collection("races").doc(race_id);

  console.log(race_id);

  docRef.get().then(function(doc) {
    if (doc.exists) {
      res.json({status: true, data: doc.data()});
    } else {
      res.json({status: false, data: null});
    }
    return;
  }).catch(function(error) {
    console.log(error);
    res.json({status: false, data: null});
    return;
  });
});
