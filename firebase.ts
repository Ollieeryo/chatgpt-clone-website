import { getApp, getApps, initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyADONsQupKcnWojk1CNL2IphHOgv-v8MNs",
  authDomain: "chatgpt-messager-next.firebaseapp.com",
  projectId: "chatgpt-messager-next",
  storageBucket: "chatgpt-messager-next.appspot.com",
  messagingSenderId: "874766116834",
  appId: "1:874766116834:web:7060be178a614792b67bbb"
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
