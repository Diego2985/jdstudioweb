import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyA4KtdSS5laHNReJSPievtB-QiOCEilzbU",
  authDomain: "jdstudioweb-d34ce.firebaseapp.com",
  projectId: "jdstudioweb-d34ce",
  storageBucket: "jdstudioweb-d34ce.firebasestorage.app",
  messagingSenderId: "1075398546403",
  appId: "1:1075398546403:web:12973f34c140ff336506d6",
  measurementId: "G-5EY8LQY487"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export { db };
