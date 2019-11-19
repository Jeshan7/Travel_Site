import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyC7qG3qhKc9cedszq40irMF90sMlz3ySQI",
    authDomain: "travel-site-6094a.firebaseapp.com",
    databaseURL: "https://travel-site-6094a.firebaseio.com",
    projectId: "travel-site-6094a",
    storageBucket: "travel-site-6094a.appspot.com",
    messagingSenderId: "148386089025",
    appId: "1:148386089025:web:127abf335dfa2a51629ec0",
    measurementId: "G-B0HDMPQCZT"
  };

  const fire = firebase.initializeApp(firebaseConfig);

  export default fire;
