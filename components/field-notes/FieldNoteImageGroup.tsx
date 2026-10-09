import type { ProjectImageGroup } from "../../data/projects";
import FieldNoteImage from "./FieldNoteImage";

import "./FieldNoteImageGroup.css";

type FieldNoteImageGroupProps = {
  group: ProjectImageGroup;
};

export default function FieldNoteImageGroup({
  group,
}: FieldNoteImageGroupProps) {
  return (
    <div
      className={`field-note-image-group field-note-image-group--${group.layout}`}
    >
      <div className="field-note-image-group__images">
        {group.images.map((image) => (
          <FieldNoteImage
            key={image.src}
            image={image}
          />
        ))}
      </div>

      {group.caption && (
        <p className="field-note-image-group__caption">
          {group.caption}
        </p>
      )}
    </div>
  );
}