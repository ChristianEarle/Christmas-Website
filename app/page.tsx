// app/page.tsx
export default function HomePage() {
  return (
    <section className="page-section active">
      <div className="hero">
        <h1 className="hero-title">
          Hi, Mary Ellen! Welcome to your Christmas page. ❄️
        </h1>
        <p className="hero-text">
          This little site is just for you.
        </p>
        <div className="hero-actions">
          <a className="primary-btn" href="/advent">
            Open our Advent calendar 🎁
          </a>
          <a className="ghost-btn" href="/countdown">
            Check the Christmas countdown ⏳
          </a>
        </div>
      </div>

      <div className="home-grid">
        <div className="home-card">
          <h3>What you can do here ✨</h3>
          <ul>
            <li>Open a new little surprise every day on the Advent calendar.</li>
            <li>Watch the countdown tick down to Christmas with me.</li>
            <li>Flip through some of my favorite holiday photos of us.</li>
          </ul>
        </div>
        <div className="home-card">
          <h3>How to use it 🎄</h3>
          <ul>
            <li>Tap <strong>Advent Calendar</strong> to see all 24 days.</li>
            <li>Tap <strong>Photo Memories</strong> to scroll through us.</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

