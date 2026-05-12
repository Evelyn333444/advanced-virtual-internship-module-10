import { auth, createUserWithEmailAndPassword } from "./firebase";
import { useState } from "react";

const [email, setEmail] = useState("");
const [password, setPassword] = useState("");

const handleSignUp = async (e) => {
  e.preventDefault();
  try {
    const result = await createUserWithEmailAndPassword(auth, email, password);
    console.log("New user:", result.user);
    // Update your app state or redirect here
  } catch (error) {
    console.error("Sign up error:", error.message);
  }
};