import FieldNoteImageGroup from "./FieldNoteImageGroup";
import type { ProjectSection } from "../../data/projects";
import FieldNoteImage from "./FieldNoteImage";

import "./FieldNoteSection.css";

type FieldNoteSectionProps = {
  section: ProjectSection;
  index: number;
};

export default function FieldNoteSection({
  section,
  index,
}: FieldNoteSectionProps) {
  const sectionNumber = String(index + 1).padStart(2, "0");

  return (
    <section className="field-note-section">
      <div className="field-note-section__meta">
        <span>{sectionNumber}</span>
        <span>{section.title}</span>
      </div>

      <div className="field-note-section__content">
        {section.content.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}

        {section.image && (
          <FieldNoteImage image={section.image} />
        )}

        {section.imageGroup && (
            <FieldNoteImageGroup group={section.imageGroup} />
        )}
      </div>
    </section>
  );
}