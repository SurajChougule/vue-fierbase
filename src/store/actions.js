import firebase from 'firebase';
import * as types from './mutation-types';
var config = {
  apiKey: "AIzaSyBPilc0C5-mhPRdIU7sq9axVT1nNz5qj-w",
  authDomain: "vue-fire-ce925.firebaseapp.com",
  databaseURL: "https://vue-fire-ce925.firebaseio.com",
  projectId: "vue-fire-ce925",
  storageBucket: "vue-fire-ce925.appspot.com",
  messagingSenderId: "884857955738"
};
firebase.initializeApp(config);

let database = firebase.database();

const actions = {
  getNotesData: function (context) {
    database.ref('notes').on("child_added", (item) => {
      let note = item.val()
      context.commit(types.GET_DATA, note);
    });
  },
  addNote: function (context, data) {
    database.ref('notes').push(data, (err) => {
      if (err) {
        throw err
      }
    });
  }
};

export default actions;
