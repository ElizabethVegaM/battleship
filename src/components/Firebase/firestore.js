import firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyC4GlY2mQdbSzqyZoONj0HUWdfbc-PhuNY',
  authDomain: 'battleship-prototype.firebaseapp.com',
  databaseURL: 'https://battleship-prototype.firebaseio.com',
  projectId: 'battleship-prototype',
  storageBucket: 'battleship-prototype.appspot.com',
  messagingSenderId: '565732928971',
  appId: '1:565732928971:web:db92c248b033a22f',
};

firebase.initializeApp(config);

export default firebase;
