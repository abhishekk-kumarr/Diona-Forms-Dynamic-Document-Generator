# Diona Forms & AI Internship Assignment

**Live demo:** https://<your-github-username>.github.io/<your-repo-name>/

## Exercises

This repository contains two HTML/CSS/JavaScript recreations based on the supplied reference PDFs:

1. **Medical & Travel Expense Request**
2. **Worker Progress Report**

The implementation uses only:
- HTML
- CSS
- Vanilla JavaScript

No external framework is required.

## Run locally

Open `index.html` directly in a browser, or use VS Code Live Server.

## Dynamic behavior

Use the top demo controls to:
- Switch between the two exercises.
- Switch between three datasets, including an intentionally empty dataset (Dataset 3) that demonstrates the empty-state handling for every table (e.g. "No entries submitted in this category").
- Add sample rows across three different tables (Prescription Drugs, Over-the-Counter Drugs, Mileage) in a single click, to show the same rendering pattern generalizes across tables rather than being hardcoded to one.
- Print/save the rendered document as PDF.

The data is stored separately from the rendering functions in `script.js`. All six expense tables and the checkbox groups in the Worker Progress Report are rendered from a single reusable `table()` function and shared checkbox helper, so changing the underlying data automatically changes the generated document without touching HTML.

## PDF fidelity

The pages reproduce the major visual structure of the supplied PDFs:
- WCB logo
- Contact information
- Titles and claim numbers
- Tables and section headings
- Dynamic values
- Checkboxes
- Footer information
- Page numbers
- Multi-page layout
- A4 print styling

The supplied WCB logo assets were extracted from the reference PDFs for the recreation.

## Video submission

The assignment requires one narrated ~2-minute video for each exercise. Record the browser and your face using picture-in-picture. The videos should be placed in this repository or linked from here.

Suggested names:
- `videos/medical-expense-demo.mp4`
- `videos/worker-progress-demo.mp4`

If using a hosted video instead, replace the placeholders in this README with the repository-visible links.

## AI disclosure

AI assistance was used during development. The development prompt history is documented in `AI_PROMPTS.md`, as requested by the assignment.

## Assumptions to mention in the videos

- The reference PDFs were treated as the visual source of truth.
- Data values were separated from the presentation so the same template can render different datasets.
- Where the PDF shows a blank field, the recreation keeps it blank instead of inventing user information.
- The supplied reference logo was reused as an image asset.
- The implementation focuses on browser rendering and print-to-PDF fidelity rather than creating a backend.
