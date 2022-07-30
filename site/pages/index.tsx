import React from "react";
import axios from "axios";
export default function HomePage() {
  const [email, setEmailState] = React.useState("");
  const [zip, setZipState] = React.useState("");

  function handleSubmit(e) {
    e.preventDefault();
    axios.get(`/api/contact?zip=${zip}&email=${email}`);
  }
  function setEmail(e) {
    setEmailState(e.currentTarget.value);
  }
  function setZip(e) {
    setZipState(e.currentTarget.value);
  }
  return (
    <div id="main">
      <hgroup>
        <h1>Community Streets</h1>
        <h2>For Alameda County</h2>
      </hgroup>
      <main>
        <p>
          Safer streets for people. Vision zero means vision zero. End traffic
          violence.
        </p>
        <p>If you're looking to learn more, please get in touch with us.</p>
        <form onSubmit={handleSubmit}>
          <label>
            Your email
            <input
              type="email"
              required
              placeholder="jane@smith.com"
              onChange={setEmail}
            />
          </label>
          <label>
            Your zipcode
            <input type="zipcode" placeholder="94607" onChange={setZip} />
          </label>
          <input type="submit" value="Connect with us" />
        </form>
      </main>
    </div>
  );
}
