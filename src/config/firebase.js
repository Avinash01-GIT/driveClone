import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA7HxCvT1cDXt5sFLHlyLXBB4j2-Vpcmn8",
  authDomain: "driveclone-b988a.firebaseapp.com",
  projectId: "driveclone-b988a",
  storageBucket: "driveclone-b988a.appspot.com",
  messagingSenderId: "387690352628",
  appId: "1:387690352628:web:4e8ee64e631ddfa06af3a1",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

export { db, storage, auth, googleProvider };
