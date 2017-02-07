import firebase from 'firebase';

try {
  var config = {
      apiKey: "AIzaSyD_7umDIERkcki_5Wix7V7aJ9avgNP3BvM",
      authDomain: "pau-todo-app.firebaseapp.com",
      databaseURL: "https://pau-todo-app.firebaseio.com",
      storageBucket: "pau-todo-app.appspot.com",
    };

    firebase.initializeApp(config);

} catch(e) {

}
export  var firebaseRef = firebase.database().ref();
export default firebase;
