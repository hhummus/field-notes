import Link from "next/link";
import type { Project } from "../../data/projects";
import "./FieldNoteCard.css";

type FieldNoteCardProps = {
  project: Project;
};

export default function FieldNoteCard({
  project,
}: FieldNoteCardProps) {
  return (
    <article className="field-note">
      <Link
        href={`/projects/${project.slug}`}
        className="field-note__link"
      >
        <div className="field-note__meta">
          <span>{project.id}</span>
          <span>{project.status}</span>
        </div>

        <div className="field-note__content">
          <p className="field-note__type">{project.type}</p>

          <h2 className="field-note__title">
            {project.title}
          </h2>

          <p className="field-note__description">
            {project.description}
          </p>

          {project.stack.length > 0 && (
            <ul className="field-note__stack">
              {project.stack.map((technology) => (
                <li key={technology}>{technology}</li>
              ))}
            </ul>
          )}
        </div>

        <span
          className="field-note__arrow"
          aria-hidden="true"
        >
          ↗
        </span>
      </Link>
    </article>
  );
}