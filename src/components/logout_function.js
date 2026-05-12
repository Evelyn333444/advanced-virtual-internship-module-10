import { signOut } from "firebase/auth";
import { auth } from "./firebase";

const handleLogout = () => signOut(auth);