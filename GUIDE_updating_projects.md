# 📁 How to Update Project Details

This guide explains how to add a new project or update an existing project's card and modal details on the **Projects** page (`projects.html`).

---

## Overview

All project content lives in **`projects.html`** in two places:

| What | Where in the file |
|---|---|
| **Project Cards** (grid on the page) | `<div class="projects-grid">` section, ~line 400 |
| **Project Modal Details** (popup content) | `const projects = { ... }` object inside the `<script>` tag |

---

## Part A – Add a Project Card

Find the `<div class="projects-grid">` section. Cards are ordered **newest first**.

Add a new card block:

```html
<!-- My New Project – Month Year -->
<div class="project-card reveal" data-category="academic" onclick="openModal('my-project-id')">
  <div class="project-card__image" style="background-image: url('./assets/images/projects/my-project-id/1.jpg');">
    <span class="project-card__badge">Category Label</span>
  </div>
  <div class="project-card__body">
    <h3 class="project-card__title">My Project Name</h3>
    <p class="project-card__desc">A short one or two sentence description of the project.</p>
    <div class="project-card__meta">
      <span>📅 Month Year</span>
      <span>📍 Location</span>
    </div>
  </div>
</div>
```

### `data-category` values (for the filter tabs):

| Value | Tab Label |
|---|---|
| `academic` | Academic |
| `community` | Community |
| `competition` | Competitions |
| `felicitation` | Felicitations |
| `workshop` | Workshops |

---

## Part B – Add Project Modal Details

Inside the `<script>` tag, find the `const projects = { ... }` object and add a new entry **matching the same ID** used in `onclick="openModal('my-project-id')"`:

```js
"my-project-id": {
    badge: "Category Label",
    title: "My Project Full Title",
    meta: [
        { icon: "calendar--v1", text: "Date of Event" },
        { icon: "marker", text: "Venue" },
        { icon: "crowd.png", text: "Target Audience" }
    ],
    sections: [
        {
            heading: "Overview",
            content: "<p>A detailed paragraph about what the project is and what it aimed to achieve.</p>"
        },
        {
            heading: "Highlights",
            content: "<ul><li><strong>Point 1:</strong> Description.</li><li><strong>Point 2:</strong> Description.</li></ul>"
        },
        {
            heading: "Impact",
            content: "<p>What was the outcome? How many students benefitted? What changed?</p>"
        }
    ]
},
```

> Keep `content` as an **HTML string** — you can use `<p>`, `<ul>`, `<li>`, `<strong>`, `<br>` tags freely.

---

## Part C – Add Project Photos

1. Create a folder for the project inside:
   ```
   public/assets/images/projects/my-project-id/
   ```
2. Name photos sequentially: `1.jpg`, `2.jpg`, `3.jpg`, ...
3. Register the image count in the `projectImageCounts` object (inside the `<script>` tag):
   ```js
   const projectImageCounts = {
       ...
       "my-project-id": 5,   // ← number of photos
       ...
   };
   ```
   The carousel in the modal will automatically load all images.

---

## Part D – Update the Homepage (Latest 3 Projects)

The homepage (`index.html`) always shows the **3 most recent projects**.

Find the `<div class="featured-grid">` section (~line 119) and update the first card to be the newest project:

```html
<a href="projects.html?project=my-project-id" class="project-card reveal" ...>
  <div class="project-card__image" style="background-image: url('./assets/images/projects/my-project-id/1.jpg');">
    <span class="project-card__badge">Category</span>
  </div>
  <div class="project-card__body">
    <h3>Project Title</h3>
    <p>Short description.</p>
    <div class="project-card__meta">
      <span>📅 Date</span>
      <span>📍 Location</span>
    </div>
  </div>
</a>
```

When a visitor clicks that card, it will navigate to the Projects page **and automatically open the correct modal**.

---

## Quick Checklist

- [ ] Photos placed in `public/assets/images/projects/my-project-id/`
- [ ] `projectImageCounts` updated with the correct count
- [ ] Project card added in the correct chronological position in `projects-grid`
- [ ] Modal data entry added to `const projects` with the **same ID**
- [ ] Homepage `featured-grid` updated if this is one of the 3 latest projects
- [ ] Dev server shows card and modal correctly
