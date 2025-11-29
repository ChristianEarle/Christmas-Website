// components/AdventCalendar.tsx
"use client";

import { useMemo, useState } from "react";

const adventMessages: string[] = [
  "Day 1: $20 gift card to Anthropologie",
  "Day 2: Reedemable lifetime pilates",
  "Day 3: Chick-Fil-A breakfast",
  "Day 4: Bath bombs",
  "Day 5: Cozy socks",
  "Day 6: Prince toys",
  "Day 7: Reedemable Massage",
  "Day 8: Dinner of choice",
  "Day 9: $20 Ulta gift card",
  "Day 10: Reedemable apartment cleaning",
  "Day 11: Sweet treats",
  "Day 12: $25 Shein gift card",
  "Day 13: Lunch of choice",
  "Day 14: Chocolates",
  "Day 15: Sink caddy",
  "Day 16: $20 Chick-fila gift card",
  "Day 17: Energy drinks",
  "Day 18: $20 Uber Eats gift card",
  "Day 19: Reedemable coffee",
  "Day 20: Movie night",
  "Day 21: $20 Ulta gift card",
  "Day 22: Classic snacks",
  "Day 23: Christmas trinket",
  "Day 24: A book",
];

type AdventCalendarProps = {
  /**
   * Optional override for testing:
   * - If provided, the calendar will pretend "today" is this date.
   * - If omitted, it uses the real current date.
   */
  testDate?: Date;
};

export default function AdventCalendar({ testDate }: AdventCalendarProps) {
  // Use testDate if passed in, otherwise the real current date
  const today = useMemo(() => testDate ?? new Date(), [testDate]);

  const [modalTitle, setModalTitle] = useState<string | null>(null);
  const [modalBody, setModalBody] = useState<string | null>(null);

  const currentMonth = today.getMonth(); // 0-based, Dec = 11
  const currentDay = today.getDate();
  const isDecember = currentMonth === 11;

  function isAvailable(day: number) {
    // Only available on or after that day in December
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
                  openModal("Too soon! 🎅", "This one is for another day.");
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
        <div
          className="modal-backdrop"
          onClick={(e) => e.target === e.currentTarget && closeModal()}
        >
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

