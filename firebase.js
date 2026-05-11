import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

// Your web app's Firebase configuration
// IMPORTANT: Replace with your own Firebase project details
const firebaseConfig = {
apiKey: "AIzaSyDiCCAT9keirOzZ59GmHJEY5HkvdEAfQEc",
  authDomain: "advanced-virtual-interns-aee75.firebaseapp.com",
  projectId: "advanced-virtual-interns-aee75",
  storageBucket: "advanced-virtual-interns-aee75.firebasestorage.app",
  messagingSenderId: "252353104950",
  appId: "1:252353104950:web:a0b1e3d5105c072a861c97"
}

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export const signInWithGoogle = () => {
  return signInWithPopup(auth, provider);
};

export default auth;