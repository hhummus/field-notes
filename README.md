# Field Notes

**A portfolio system for people who make things.**

Field Notes is my personal portfolio and an ongoing frontend project exploring how creative and technical work can be documented as a collection of field notes rather than a conventional project grid.

The visual system takes inspiration from natural history archives, field journals and editorial publishing, combining structured metadata with long-form project documentation.

## About

Rather than treating projects as isolated portfolio cards, Field Notes presents each project as a documented case study.

Each field note can contain information such as:

- project status and year
- technologies used
- project links
- observations and context
- approach
- implementation
- findings
- images and supporting material

The project is also an experiment in building a reusable portfolio system where the underlying components and content remain separate.

## Selected field notes

### FN-001 — Hasla Løkkeberg

A production website built from the ground up, from frontend development and API integration to DNS, hosting and deployment.

### FN-002 — Sortly

A native macOS application for organizing files, detecting duplicates and automating repetitive file-management tasks.

### FN-003 — MyLocker

A digital subscription manager currently in development.

## Built with

- Next.js
- React
- TypeScript
- JavaScript
- CSS

The interface is built without a UI framework or component library. Layout, typography, responsive behaviour and the visual system are implemented with custom CSS.

## Project structure

```text
app/
├── projects/
│   └── [slug]/
├── globals.css
└── page.tsx

components/
├── field-notes/
└── layout/

data/
└── projects.ts

public/
└── projects/