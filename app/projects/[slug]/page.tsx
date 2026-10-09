import { notFound } from "next/navigation";

import Container from "../../../components/layout/Container";
import FieldNoteSection from "../../../components/field-notes/FieldNoteSection";
import { projects } from "../../../data/projects";

import "./page.css";

type ProjectPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function ProjectPage({
  params,
}: ProjectPageProps) {
  const { slug } = await params;

  const project = projects.find(
    (project) => project.slug === slug
  );

  if (!project) {
    notFound();
  }

  return (
    <main>
      <section className="project-hero">
        <Container>
          <div className="project-hero__meta">
            <span>{project.id}</span>

            <span className="project-hero__type">
              {project.type}
            </span>

            <span className="project-hero__status">
              {project.version && `V${project.version} · `}
              {project.status} / {project.year}
            </span>
          </div>

          <h1 className="project-hero__title">
            {project.title}
          </h1>

          <p className="project-hero__description">
            {project.description}
          </p>

          <div className="project-hero__details">
            {project.stack.length > 0 && (
              <div className="project-hero__detail-row">
                <p className="project-hero__details-label">
                  Technology
                </p>

                <ul className="project-hero__stack">
                  {project.stack.map((technology) => (
                    <li key={technology}>{technology}</li>
                  ))}
                </ul>
              </div>
            )}

            {project.links && project.links.length > 0 && (
              <div className="project-hero__detail-row">
                <p className="project-hero__details-label">
                  Project
                </p>

                <div className="project-hero__links">
                 {project.links.map((link) => (
                    <a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    >
                    {link.label}
                    <span aria-hidden="true">
                        {link.type === "download" ? " ↓" : " ↗"}
                    </span>
                    </a>
))}
                </div>
              </div>
            )}
          </div>
        </Container>
      </section>

      {project.sections.length > 0 && (
        <Container>
          <div className="project-sections">
            {project.sections.map((section, index) => (
              <FieldNoteSection
                key={section.title}
                section={section}
                index={index}
              />
            ))}
          </div>
        </Container>
      )}
      <div className="project-end">
  <Container>
    <div className="project-end__inner">
      <span>End of note</span>
      <span>{project.id}</span>
    </div>
  </Container>
</div>
    </main>
  );
}