import { initializeApp, getApps } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCY0BlWgli_toiaNkdmXAHmYh2JSs0Afeo",
  authDomain: "sports-managment-system.firebaseapp.com",
  projectId: "sports-managment-system",
  storageBucket: "sports-managment-system.firebasestorage.app",
  messagingSenderId: "932957184348",
  appId: "1:932957184348:web:38d0adb5b267fc89ea2199",
  measurementId: "G-DXN6VCLG44"
};

// Initialize Firebase
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];
const auth = getAuth(app);
const db = getFirestore(app);

export { app, auth, db };