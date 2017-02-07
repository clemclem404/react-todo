import firebase from 'firebase';

var config = {
    apiKey: "AIzaSyD_7umDIERkcki_5Wix7V7aJ9avgNP3BvM",
    authDomain: "pau-todo-app.firebaseapp.com",
    databaseURL: "https://pau-todo-app.firebaseio.com",
    storageBucket: "pau-todo-app.appspot.com",
  };
  firebase.initializeApp(config);

  var firebaseRef = firebase.database().ref();

firebaseRef.set({
  app: {
      name: 'Todo App',
      version: '1.0.0'
  },
  isRunning: true,
  user: {
      name:'Pauline',
      age: 38
  }
});

// firebaseRef.update({
//   'app/name': 'Todo Application',
//   'user/name': 'Clem'
// });

// firebaseRef.child('app').update({
//   name: 'Todo Application'
// });
//
// firebaseRef.child('user').update({
//   name:'Clementine'
// });


// firebaseRef.remove();
//
// firebaseRef.child('app/name').remove();

// firebaseRef.child('app').update({
//   version: '2.0',
//   name: null
// });

// firebaseRef.update({
//   isRunning : null
// });
//
// firebaseRef.child('user/age').remove();



// fetch data

// firebaseRef.once('value').then((snapshot) => {
//   console.log('Got entire database', snapshot.val());
// }, (e) => {
//     console.log('unable to fetch value', e);
// });

// //fetch one data
// firebaseRef.child('app').once('value').then((snapshot) => {
//   console.log('Got entire database',snapshot.key, snapshot.val());
// }, (e) => {
//     console.log('unable to fetch value', e);
// });

//listen to changes

// firebaseRef.on('value', (snapshot)=>{
//   console.log('Got value',snapshot.val());
// });
//
// firebaseRef.update({isRunning: false})

//=> will print twice, once as it is and then another time once the running status is changed
// to turn it off and have only the last change : firebaseRef.off();


// listen for changes to user object.
//update data in user to a diff name and app's name

// firebaseRef.child('user').on('value', (snapshot)=>{
//   console.log('User ref changed', snapshot.val());
// });
//
// firebaseRef.child('user').update({name:'Mike'});
// firebaseRef.child('app').update({name:'Todo Application'});


var notesRef = firebaseRef.child('notes');

notesRef.on('child_added', (snapshot)=> {
    console.log('child_added', snapshot.key,snapshot.val());
})

notesRef.on('child_changed', (snapshot)=> {
    console.log('child_changed', snapshot.key,snapshot.val());
})

notesRef.on('child_removed', (snapshot)=> {
    console.log('child_removed', snapshot.key,snapshot.val());
})

var newNoteRef = notesRef.push();
newNoteRef.set({
    text: 'Walk the dog'
});

// or shorter
//var notesRef = firebaseRef.child('notes');

//var newNoteRef = notesRef.push({
    //text: 'Walk the dog'
//});
//console.log('Todo id', newNoteRef.key);

// create new variable todos array, child added to listen to changes, print out key, add two todos to the array, push to pass the property
var todosRef = firebaseRef.child('todos');

todosRef.on('child_added', (snapshot)=>{
  console.log('New todo added',snapshot.key,snapshot.val());
});

todosRef.push({
    text: 'Todo 1'
  });

todosRef.push({
    text: 'Todo 2'
  });
