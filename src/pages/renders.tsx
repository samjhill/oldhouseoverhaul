import React, { useMemo, useState } from "react";
import "./renders.css";

type RenderImage = {
  src: string;
  filename: string;
  label: string;
};

const renderImages = import.meta.glob("../assets/images/renders/*.{png,PNG,jpg,jpeg,JPEG}", {
  eager: true,
  import: "default",
}) as Record<string, string>;

const getImageLabel = (filename: string) => {
  const parts = filename.split("/");
  const name = parts[parts.length - 1];
  const label = name.replace(/\.[^.]+$/, "");
  return label
    .replace(/-/g, " ")
    .replace(/\b\w/g, (char) => char.toUpperCase());
};

const isLegacyFilename = (filename: string) => {
  const parts = filename.split("/");
  const name = parts[parts.length - 1];
  const base = name.replace(/\.[^.]+$/, "");
  return /^[0-9A-F-]+$/i.test(base);
};

const RendersPage: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<RenderImage | null>(null);

  const images = useMemo<RenderImage[]>(() => {
    return Object.entries(renderImages)
      .filter(([path]) => !isLegacyFilename(path))
      .map(([path, src]) => ({
        src,
        filename: path,
        label: getImageLabel(path),
      }))
      .sort((a, b) => a.label.localeCompare(b.label));
  }, []);

  return (
    <div className="renders-page">
      <div className="renders-hero">
        <p className="renders-eyebrow">25 Thomas St</p>
        <h1>Design Renders Gallery</h1>
        <p>
          Explore the latest concept imagery for the renovation. Click any render to view it in
          detail. These boards will evolve as we make material and layout decisions.
        </p>
      </div>

      <div className="renders-grid">
        {images.map((image) => (
          <button
            type="button"
            key={image.filename}
            className="render-card"
            onClick={() => setSelectedImage(image)}
          >
            <img src={image.src} alt={image.label} loading="lazy" />
            <span>{image.label}</span>
          </button>
        ))}
      </div>

      {selectedImage && (
        <div className="render-modal" role="dialog" aria-modal="true" aria-label="Render preview">
          <div className="render-modal__backdrop" onClick={() => setSelectedImage(null)} />
          <div className="render-modal__content">
            <button
              className="render-modal__close"
              type="button"
              onClick={() => setSelectedImage(null)}
              aria-label="Close preview"
            >
              ×
            </button>
            <img src={selectedImage.src} alt={selectedImage.label} />
            <p>{selectedImage.label}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default RendersPage;


