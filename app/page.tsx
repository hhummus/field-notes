import "./page.css";
import Container from "../components/layout/Container";
import FieldNoteCard from "../components/field-notes/FieldNoteCard";
import { projects } from "../data/projects";

export default function Home() {
  return (
    <main>
      <section className="hero">
        <Container>
          <div className="hero__meta">
            <span>Portfolio / 2026</span>
            <span>Norway</span>
          </div>

          <h1 className="hero__title">
            Frontend development,
            <br />
            interfaces & digital experiments.
          </h1>

          <p className="hero__intro">
            A working archive of products, interfaces and things I build.
          </p>
        </Container>
      </section>

      <section className="notes" id="notes">
        <Container>
          <header className="section-header">
            <p>Selected Field Notes</p>
            <p>{projects.length.toString().padStart(2, "0")} entries</p>
          </header>

          <div className="notes__list">
            {projects.map((project) => (
              <FieldNoteCard key={project.id} project={project} />
            ))}
          </div>
        </Container>
      </section>
    </main>
  );
}