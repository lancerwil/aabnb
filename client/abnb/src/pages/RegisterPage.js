import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default function RegisterPage() {
  const [name, setName] = useState("");
  const [owner, setOwner] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function registerUser(event) {
    event.preventDefault();
    try {
      await axios.post("http://localhost:4000/register", {
        name,
        owner,
        email,
        password,
      });
      alert("Registration successful. You can now log in");
    } catch (e) {
      alert("Registration failed. Please try again later");
    }
  }

  return (
    <div className="mt-4 grow flex items-center justify-around">
      <div className="mb-32">
        <h1 className="text-4xl text-center mb-4">Register</h1>
        <form className="max-w-md mx-auto" onSubmit={registerUser}>
          <input
            type="text"
            placeholder="Lassie"
            value={name}
            onChange={(ev) => setName(ev.target.value)}
          />
          <input
            type="text"
            placeholder="Owner's Name"
            value={owner}
            onChange={(ev) => setOwner(ev.target.value)}
          />
          <input
            type="email"
            placeholder="your@email.com"
            value={email}
            onChange={(ev) => setEmail(ev.target.value)}
          />
          <input
            type="password"
            placeholder="password"
            value={password}
            onChange={(ev) => setPassword(ev.target.value)}
          />

          <button className="primary">Register</button>
          <div className="text-center py-2 text-gray-500">
            Already a Member?{" "}
            <Link className="underline text-black" to={"/login"}>
              Login
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
