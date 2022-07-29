export default function HomePage() {
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
        <form>
          <label>
            Your email
            <input type="email" required placeholder="jane@smith.com" />
          </label>
          <label>
            Your zipcode
            <input type="zipcode" placeholder="94607" />
          </label>
          <input type="submit" value="Connect with us" />
        </form>
      </main>
    </div>
  );
}
