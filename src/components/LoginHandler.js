import { auth, signInWithEmailAndPassword } from "./firebase";

const handleLogin = async (e) => {
  e.preventDefault();
  try {
    const result = await signInWithEmailAndPassword(auth, email, password);
    console.log("Logged in user:", result.user);
    // Update your app state here
  } catch (error) {
    console.error("Login error:", error.message);
  }
};

<form onSubmit={handleLogin}>
  <input
    type="email"
    value={email}
    onChange={(e) => setEmail(e.target.value)}
    placeholder="Email"
    required
  />
  <input
    type="password"
    value={password}
    onChange={(e) => setPassword(e.target.value)}
    placeholder="Password"
    required
  />
  <button type="submit">Log In</button>
</form>