// app/gallery/page.tsx
import PhotoCarousel from "../../components/PhotoCarousel";

export default function GalleryPage() {
  return (
    <section className="page-section active">
      <h2 className="section-heading">📸 Our Little Photo Reel</h2>
      <p className="section-sub">
        A tiny slideshow of some of my favorite moments with you.
      </p>
      <PhotoCarousel />
    </section>
  );
}

