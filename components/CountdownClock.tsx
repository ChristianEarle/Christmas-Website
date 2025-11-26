// components/CountdownClock.tsx
"use client";

import { useEffect, useState } from "react";

type Countdown = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

export default function CountdownClock() {
  const [timeLeft, setTimeLeft] = useState<Countdown>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const target = new Date("December 25, 2025 00:00:00").getTime();

    function update() {
      const now = Date.now();
      const diff = target - now;

      const days = Math.max(0, Math.floor(diff / (1000 * 60 * 60 * 24)));
      const hours = Math.max(0, Math.floor((diff / (1000 * 60 * 60)) % 24));
      const minutes = Math.max(0, Math.floor((diff / (1000 * 60)) % 60));
      const seconds = Math.max(0, Math.floor((diff / 1000) % 60));

      setTimeLeft({ days, hours, minutes, seconds });
    }

    update();
    const id = setInterval(update, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="countdown-wrap">
      <div className="count-box">
        <div className="count-number">{timeLeft.days}</div>
        <div className="count-label">Days</div>
      </div>
      <div className="count-box">
        <div className="count-number">{timeLeft.hours.toString().padStart(2, "0")}</div>
        <div className="count-label">Hours</div>
      </div>
      <div className="count-box">
        <div className="count-number">
          {timeLeft.minutes.toString().padStart(2, "0")}
        </div>
        <div className="count-label">Minutes</div>
      </div>
      <div className="count-box">
        <div className="count-number">
          {timeLeft.seconds.toString().padStart(2, "0")}
        </div>
        <div className="count-label">Seconds</div>
      </div>
    </div>
  );
}


