import firebase from 'firebase'

if (!firebase.apps.length) {
  firebase.initializeApp(
    {
      apiKey: "AIzaSyBq9dTi3va26XKYG2FRX5w_rjZ_b4Y1ss4",
      authDomain: "coachsnspj.firebaseapp.com",
      projectId: "coachsnspj",
      storageBucket: "coachsnspj.appspot.com",
      messagingSenderId: "855469922694",
      appId: "1:855469922694:web:bd141c552b39f85a6d7407",
      measurementId: "G-GY3GTYKX3H"
    }
  )
}

export default firebase
