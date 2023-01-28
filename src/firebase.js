// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyAg7HhC0iip0jmx9idHT3drW58Ot4B0sNs',
  authDomain: 'loginp-eef2d.firebaseapp.com',
  projectId: 'loginp-eef2d',
  storageBucket: 'loginp-eef2d.appspot.com',
  messagingSenderId: '490452358411',
  appId: '1:490452358411:web:34cd2a728bb091ddc2be0e',
  measurementId: 'G-3DQW3E0HZN',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
import { getStorage } from 'firebase/storage';
const storage = getStorage(app);
export { storage };
