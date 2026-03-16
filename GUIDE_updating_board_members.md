# 👥 How to Update Executive Board Members

This guide explains how to add or update the executive board details displayed on the **Board** page (`board.html`).

---

## Overview

All board data is stored in a single file:

**`js/boardData.js`**

The data is grouped by year (term). Each year holds an array of member objects. The Board page automatically reads and renders this data.

---

## Step 1 – Prepare the Photo

1. Get the member's headshot photo (PNG recommended, square crop, min 300×300px).
2. Name the file with **just the person's first/common name**, e.g., `Ahsaan.png`, `Roshen.png`.
3. Place it in:
   ```
   public/assets/images/exco/
   ```
   > ⚠️ Do NOT put photos in `assets/` — it must be inside `public/` for the site to serve them correctly.

---

## Step 2 – Update `js/boardData.js`

Open `js/boardData.js`. The file looks like this:

```js
export const boardData = {
  "2025": [ ... ],
  "2024": [ ... ],
  "2023": [ ... ],
  ...
};
```

### Adding a New Term

Add a new key at the top (newest first):

```js
"2026": [
  {
    "no": "1",
    "position": "President",
    "name": "A.B. Firstname",
    "nic": "200XXXXXXXXX",
    "phonenumberwhatsapp": "07XXXXXXXX",
    "address": "Street, Kinniya",
    "university": "University of XYZ",
    "course": "Course Name",
    "email": "email@example.com",
    "photo": "/assets/images/exco/Firstname.png"
  },
  ...
],
```

> ⚠️ Make sure every term's array ends with a **comma** after the closing `]`, except for the very last term.

### Updating an Existing Member

Find the matching term and member by `"no"` or `"name"`, then edit the relevant field.

### Removing a Member

Simply delete the entire `{ ... }` object for that member. Make sure there's no trailing comma after the last member in the array.

---

## Step 3 – Field Reference

| Field | Description | Example |
|---|---|---|
| `no` | Order number in the list | `"1"` |
| `position` | Official role title | `"President"` |
| `name` | Name with initials | `"M. Karlavi Maharoof"` |
| `nic` | NIC number | `"970064176v"` |
| `phonenumberwhatsapp` | WhatsApp number | `"778334459"` |
| `address` | Home address | `"Kinniya 02"` |
| `university` | University name | `"University of Colombo"` |
| `course` | Degree/Programme | `"Medicine"` |
| `email` | Contact email | `"email@gmail.com"` |
| `photo` | Image path (see Step 1) | `"/assets/images/exco/Name.png"` |

> If any field is unknown, set it to `null` — e.g. `"nic": null`

---

## Step 4 – Verify

1. Run the dev server: `npm run dev`
2. Visit `http://localhost:5174/FOCUS_KUSA_Web/board.html`
3. Switch to the correct year tab and confirm the member details and photo appear correctly.

---

## Quick Checklist

- [ ] Photo placed in `public/assets/images/exco/`
- [ ] Photo path in `boardData.js` matches the filename exactly (case-sensitive)
- [ ] Member object is inside the correct year's array
- [ ] No trailing comma on the last item in any array
- [ ] Dev server shows the correct data
