// app/advent/page.tsx
import AdventCalendar from "../../components/AdventCalendar";

export default function AdventPage() {
 // 🔧 For testing: uncomment one of these and save
  // const testDate = new Date(2025, 10, 30); // Nov 30, 2025 (all locked)
  // const testDate = new Date(2025, 11, 1);  // Dec 1, 2025 (only Day 1 open)
  //const testDate = new Date(2025, 11, 5);  // Dec 5, 2025 (1–5 open)
  // const testDate = new Date(2025, 11, 24); // Dec 24, 2025 (all open)

  const testDate = undefined; // ⬅️ set back to undefined for real behavior
  return (
    <section className="page-section active">
      <h2 className="section-heading">🎁 Our Advent Calendar</h2>
      <p className="section-sub">
        Every door holds a tiny gift. One for each day
        leading up to Christmas.
      </p>
      <AdventCalendar testDate={testDate} />
    </section>
  );
}

