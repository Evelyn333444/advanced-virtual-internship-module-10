import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

// Your web app's Firebase configuration
// IMPORTANT: Replace with your own Firebase project details
const firebaseConfig = {
  apiKey: "AIzaSyDAsLI17iTTFLuD_B59XhwwmlyuxAzZ0Y4",
  authDomain: "summarist-clone-f8875.firebaseapp.com",
  projectId: "summarist-clone-f8875",
  storageBucket: "summarist-clone-f8875.firebasestorage.app",
  messagingSenderId: "277073466194",
  appId: "1:277073466194:web:4f236544fc0d4ca714608b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export const signInWithGoogle = () => {
  return signInWithPopup(auth, provider);
};

export default auth;