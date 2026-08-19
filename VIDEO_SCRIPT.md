# 2-Minute Video Narration Guide

## Exercise 1 — Medical & Travel Expense Request

### 0:00–0:20 — Requirement
"Hi, this is my implementation of the Medical & Travel Expense Request. I understood the requirement as recreating the supplied PDF in HTML, CSS and JavaScript, including its header, WCB logo, claim information, tables, footer and page numbering. I also treated the values in the tables as dynamic data."

### 0:20–0:55 — Browser demonstration
"Here is the rendered document in the browser. I can switch between datasets. Dataset 1 contains the original-style single-row sections, while Dataset 2 contains multiple rows. I can also add another prescription row dynamically. This demonstrates that the layout is generated from data rather than hard-coded for only one record."

### 0:55–1:35 — Code walkthrough
"In JavaScript, the data is stored separately from the rendering functions. The table function receives headers and row data and generates the table dynamically. The page rendering functions build the two A4 pages. CSS handles the borders, typography, spacing, print layout, page breaks and footer positioning. The same data model can therefore render different values without changing the HTML structure."

### 1:35–2:00 — Challenges
"The main challenge was matching the multi-section PDF layout while keeping the content dynamic. I addressed this by separating data from presentation and using reusable table and header/footer functions. I also added print CSS so the browser output can be saved as an A4 PDF."

---

## Exercise 2 — Worker Progress Report

### 0:00–0:20 — Requirement
"For the Worker Progress Report, I recreated the three-page PDF structure with the WCB header, claim information, return-to-work section, recovery section, medical information, certification and page numbers."

### 0:20–0:55 — Browser demonstration
"I can switch between two datasets. The selected checkboxes, pain score, treatment status, medication status, exercise status and text fields change according to the data."

### 0:55–1:35 — Code walkthrough
"The JavaScript data object stores the dynamic values. Helper functions generate checkboxes and document sections. The CSS provides the boxed sections, grid layouts, spacing and A4 print behavior. This keeps the document reusable for different worker progress records."

### 1:35–2:00 — Challenges
"The main challenge was reproducing the form-like layout across three pages while keeping the values dynamic. I solved this with reusable components in JavaScript, CSS grid for structured fields, and explicit print page breaks."
