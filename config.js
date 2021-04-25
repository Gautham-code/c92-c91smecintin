import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyD7k0yYEvOMElIm3wovptxUqjiSnoT4C5k",
  authDomain: "c91database.firebaseapp.com",
  databaseURL: "https://c91database-default-rtdb.firebaseio.com",
  projectId: "c91database",
  storageBucket: "c91database.appspot.com",
  messagingSenderId: "285674278396",
  appId: "1:285674278396:web:d1683e5b4a6f140532b679"
}
  
  firebase.initializeApp(firebaseConfig);  

  export default firebase.firestore();