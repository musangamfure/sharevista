import { initializeApp } from 'firebase/app';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyAjSTJEOlTZS765qJP_sQh13GZVHuIAqQw',
  authDomain: 'bookestate-31215.firebaseapp.com',
  projectId: 'bookestate-31215',
  storageBucket: 'bookestate-31215.appspot.com',
  messagingSenderId: '607999557593',
  appId: '1:607999557593:web:3973aeb2d410be5828e3c8',
  measurementId: 'G-042MMNN0RS',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
