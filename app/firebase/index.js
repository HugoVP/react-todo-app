import firebase from 'firebase';
import config   from 'app/firebase/.config';
try {
  firebase.initializeApp(config);
} catch (err) {
  console.log(err);
}
export const firebaseRef = firebase.database().ref();
export default firebase;