// components/AdventCalendar.tsx
"use client";

import { useMemo, useState } from "react";

const adventMessages: string[] = [
  "Day 1: The story of how I knew you were special.",
  "Day 2: One tiny thing about you I adore.",
  "Day 3: A favorite memory that still makes me smile.",
  "Day 4: A song that will always remind me of you.",
  "Day 5: A promise: I will always listen to you.",
  "Day 6: A moment where you made my whole week better.",
  "Day 7: Something about your laugh I love way too much.",
  "Day 8: A place I can’t wait to go with you.",
  "Day 9: A random detail I remember because I pay attention.",
  "Day 10: A reason I’m proud of you.",
  "Day 11: One way you’ve changed my life for the better.",
  "Day 12: A cozy future evening I imagine with you.",
  "Day 13: A little habit of yours I secretly find adorable.",
  "Day 14: A reminder: you’re doing better than you think.",
  "Day 15: My favorite photo of you (go pick one).",
  "Day 16: A goal I want us to chase together.",
  "Day 17: A time you made me feel really loved.",
  "Day 18: Something I’ll never get tired of hearing you say.",
  "Day 19: A silly memory that will never not be funny.",
  "Day 20: A promise to always hype you up.",
  "Day 21: A small way I’m going to show up for you.",
  "Day 22: A dream trip I want us to take one day.",
  "Day 23: One more reason I’m grateful for you this year.",
  "Day 24: The truth: you are my favorite gift, always.",
];

export default function AdventCalendar() {
  const today = useMemo(() => new Date(), []);
  const [modalTitle, setModalTitle] = useState<string | null>(null);
  const [modalBody, setModalBody] = useState<string | null>(null);

  const currentMonth = today.getMonth(); // 0-based, Dec = 11
  const currentDay = today.getDate();
  const isDecember = currentMonth === 11;

  function isAvailable(day: number) {
    return isDecember && currentDay >= day;
  }

  function openModal(title: string, body: string) {
    setModalTitle(title);
    setModalBody(body);
  }

  function closeModal() {
    setModalTitle(null);
    setModalBody(null);
  }

  return (
    <>
      <div className="advent-grid">
        {Array.from({ length: 24 }, (_, i) => i + 1).map((day) => {
          const available = isAvailable(day);
          return (
            <button
              key={day}
              type="button"
              className={`advent-door${available ? "" : " locked"}`}
              onClick={() => {
                if (!available) {
                  openModal(
                    "Too soon! 🎅",
                    "This one is for another day. No peeking! (Or you can change the code if you really can't wait.)"
                  );
                  return;
                }
                const message = adventMessages[day - 1] ?? "";
                openModal(`Day ${day}`, message);
              }}
            >
              {day}
              <span>{available ? "Open" : "Locked"}</span>
            </button>
          );
        })}
      </div>

      {modalTitle && (
        <div className="modal-backdrop" onClick={(e) => e.target === e.currentTarget && closeModal()}>
          <div className="modal">
            <h3>{modalTitle}</h3>
            <p>{modalBody}</p>
            <button className="modal-close" onClick={closeModal}>
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
}

