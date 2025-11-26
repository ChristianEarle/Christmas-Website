// app/countdown/page.tsx
import CountdownClock from "../../components/CountdownClock";

export default function CountdownPage() {
  return (
    <section className="page-section active">
      <h2 className="section-heading">⏳ Christmas Countdown</h2>
      <p className="section-sub">
        Watching the seconds tick down until Christmas with you.
      </p>
      <CountdownClock />
      <p className="section-sub" style={{ marginTop: "1.2rem" }}>
        When that timer hits zero, just remember: my favorite part of Christmas
        isn’t the day on the calendar, it’s you.
      </p>
    </section>
  );
}

