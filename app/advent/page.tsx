// app/advent/page.tsx
import AdventCalendar from "../../components/AdventCalendar";

export default function AdventPage() {
  return (
    <section className="page-section active">
      <h2 className="section-heading">🎁 Our Advent Calendar</h2>
      <p className="section-sub">
        Every door holds a tiny note, memory, or promise. One for each day
        leading up to Christmas.
      </p>
      <AdventCalendar />
      <div className="advent-note">
        Tip: You can make this extra special by editing each day’s message in the
        code to match your real memories, inside jokes, or future plans together.
      </div>
    </section>
  );
}

