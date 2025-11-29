// app/gallery/page.tsx
import PhotoCarousel from "../../components/PhotoCarousel";

export default function GalleryPage() {
  return (
    <section className="page-section active">
      <h2 className="section-heading">📸 Our Little Photo Reel</h2>
      <p className="section-sub">
        A slideshow of some of our Christmas moments.
      </p>
      <PhotoCarousel />
    </section>
  );
}

