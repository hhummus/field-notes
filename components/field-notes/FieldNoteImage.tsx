import Image from "next/image";

import type { ProjectImage } from "../../data/projects";

import "./FieldNoteImage.css";

type FieldNoteImageProps = {
  image: ProjectImage;
};

export default function FieldNoteImage({
  image,
}: FieldNoteImageProps) {
  const imageSize = image.size ?? "content";

  return (
    <figure
      className={`field-note-image field-note-image--${imageSize}`}
    >
      <Image
        className="field-note-image__image"
        src={image.src}
        alt={image.alt}
        width={1400}
        height={900}
      />

      {image.caption && (
        <figcaption className="field-note-image__caption">
          {image.caption}
        </figcaption>
      )}
    </figure>
  );
}