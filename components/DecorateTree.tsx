// components/DecorateTree.tsx
"use client";

import { useState } from "react";

type Ornament = {
  id: number;
  emoji: string;
  x: number;
  y: number;
};

export default function DecorateTree() {
  const [ornaments, setOrnaments] = useState<Ornament[]>([]);
  const [hasStar, setHasStar] = useState(false);
  const [ornamentId, setOrnamentId] = useState(0);

  const [modalTitle, setModalTitle] = useState<string | null>(null);
  const [modalBody, setModalBody] = useState<string | null>(null);

  function openModal(title: string, body: string) {
    setModalTitle(title);
    setModalBody(body);
  }

  function closeModal() {
    setModalTitle(null);
    setModalBody(null);
  }

  function addOrnament(emoji: string) {
    // random-ish placement inside the tree area (percentage-based)
    const x = 20 + Math.random() * 60; // 20–80%
    const y = 15 + Math.random() * 65; // 15–80%
    const newOrnament: Ornament = { id: ornamentId, emoji, x, y };
    const next = [...ornaments, newOrnament];
    setOrnaments(next);
    setOrnamentId((id) => id + 1);

    if (next.length === 6) {
      openModal("So pretty ✨", "Okay but… this is actually so cute. Just like you.");
    }
  }

  function resetTree() {
    setOrnaments([]);
    setHasStar(false);
  }

  return (
    <>
      <div className="tree-layout">
        <div className="tree-area">
          {/* Tree triangles using simple divs and borders via pseudo in CSS? 
              Here we fake the tree by using a background & ornaments only + trunk. */}
          <div className="tree-trunk" />
          {hasStar && <div className="tree-star">★</div>}
          {ornaments.map((o) => (
            <div
              key={o.id}
              className="tree-ornament-placed"
              style={{
                left: `${o.x}%`,
                top: `${o.y}%`,
                transform: "translate(-50%, -50%)",
              }}
            >
              {o.emoji}
            </div>
          ))}
        </div>
        <div className="ornaments-panel">
          <p>
            Tap an ornament below, then watch it land somewhere cozy on the tree.
            Try adding a few, then add the star on top when you’re done.
          </p>
          <div className="ornament-buttons">
            {["❤️", "✨", "🎀", "🎁", "❄️"].map((emoji) => (
              <button
                key={emoji}
                type="button"
                className="ornament-btn"
                onClick={() => addOrnament(emoji)}
              >
                {emoji}
              </button>
            ))}
          </div>
          <div className="tree-actions">
            <button
              type="button"
              onClick={() => {
                setHasStar(true);
                openModal("Star is on ⭐", "Now it officially feels like our Christmas tree.");
              }}
            >
              Add the star on top ⭐
            </button>
            <button type="button" onClick={resetTree}>
              Reset tree
            </button>
          </div>
          <p style={{ marginTop: "0.7rem", fontSize: "0.8rem", opacity: 0.85 }}>
            (In the real version you can tweak which emojis show, or even change them to our
            initials.)
          </p>
        </div>
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

