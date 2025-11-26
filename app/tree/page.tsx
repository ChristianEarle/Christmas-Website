// app/tree/page.tsx
import DecorateTree from "../../components/DecorateTree";

export default function TreePage() {
  return (
    <section className="page-section active">
      <h2 className="section-heading">🎄 Decorate Our Tree</h2>
      <p className="section-sub">
        Place ornaments anywhere on the tree. When it looks perfect to you, it’s
        perfect to me.
      </p>
      <DecorateTree />
    </section>
  );
}

