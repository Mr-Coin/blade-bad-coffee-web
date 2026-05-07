# Website Update Plan

This plan captures requested changes to the website. Each task is scoped with exact file paths, current state, and acceptance criteria.

**Tech stack:** React 18 + TypeScript + Vite + Tailwind CSS + shadcn/ui
**Deploy:** GitHub Pages from `docs/` folder on `main` branch
**Custom domain:** www.dalethomas.com
**Dev server:** `npm run dev` (port 8080)
**Build:** `npm run build` → outputs to `docs/`
**Deploy flow:** `make deploy` (builds, copies CNAME/.nojekyll, commits, pushes)

## How to execute

1. Work top-to-bottom. Tasks within a section are independent unless noted.
2. For each task:
   - Make the change in the specified file(s).
   - Verify locally with `npm run dev`.
   - Commit with a message matching the task heading.
3. After all changes: `npm run build` and verify the `docs/` output, then `make deploy`.

---

## 1. Home page (`src/pages/Home.tsx`)

### 1.1 Rename newsletter CTA
- **Current state (line 42):** `placeholder="Join the adventure newsletter"`
- **Change:** Replace with `placeholder="Sign up for Dale\u2019s Posts"`
- **Also check:** Footer (`src/components/Footer.tsx` line 23) has "Stay Caffeinated" heading — consider renaming to "Sign up for Dale\u2019s Posts" for consistency.
- **Acceptance:** No remaining occurrences of "Join the Adventure" anywhere in the repo. Curly apostrophe in "Dale\u2019s".

### 1.2 Add "Independent Publishing for Self-Publishing" callout
- **Current state:** There is already a "Why Self-Publishing?" card (lines 161-177) with `BookOpen` icon. This is close but doesn't match the requested heading.
- **Change:** Update the heading from "Why Self-Publishing?" to "Independent Publishing for Self-Publishing" (or add a new dedicated section — confirm with stakeholder).
- **Recommendation:** Rename the existing card's `<h3>` at line 165 and update body copy to emphasize the independent publishing angle. Keep the existing `bg-gradient-plantation` card style.
- **Acceptance:** A clearly visible block on the home page with the heading "Independent Publishing for Self-Publishing".

### 1.3 "Buy" button already exists
- **Current state:** A "Buy Now" button already exists in the hero (line 37), linking to `/books`. The nav bar also has a "Buy Now" CTA (Navigation.tsx line 58).
- **Status: DONE** — no action needed unless a different destination URL is required (e.g., direct Amazon link instead of `/books`).
- **Open question:** Should the Buy button link directly to an Amazon product page instead of `/books`? If so, provide the URL.

### 1.4 Replace placeholder testimonials (lines 184-202)
- **Current state:** Three identical placeholder cards rendering `"A thrilling coffee-fueled adventure..."` with "Review coming soon..." attribution. Uses `{[1, 2, 3].map(...)`.
- **Change:** Replace the map loop with an array of specific testimonial objects:

```typescript
// TODO: These are placeholder reviews. Replace with real reader reviews when received.
const testimonials = [
  {
    quote: "\u201CNicky Blade\u2019s wild adventures are pure adrenaline-fueled joy!\u201D",
    reviewer: "Susie R"
  },
  {
    quote: "\u201CAdventure, terrorism, and baseball \u2014 this book has it all, and I couldn\u2019t stop turning pages. Nicky Blade is unforgettable!\u201D",
    reviewer: "Daniel D"
  },
  {
    quote: "\u201CNicky Blade\u2019s obsession with coffee had me hooked \u2014 the fun facts, the caffeine-fueled chaos, and the wild action. Pure fun from start to finish.\u201D",
    reviewer: "Neal M"
  }
];
```

- **Acceptance:** Three testimonials render with unique quotes, reviewer names, 5-star ratings, curly quotes, and em-dashes. TODO comment present in code.

---

## 2. Books page (`src/pages/Books.tsx`)

### 2.1 Update digital pricing
- **Current state (line 43):** `digital: { price: "$9.99", format: "Kindle Edition" }`
- **Change:** Update to `price: "$7.50"`
- **Other prices already correct:** Paperback $16.99 (line 44), Hardback $24.99 (line 45).
- **Acceptance:** Digital shows $7.50, Paperback $16.99, Hardback $24.99.

### 2.2 Book description for The Thirteenth Cave
- **Current state (lines 62):** Description already present: "The hero, Alexandro St. Claire, believed that the Essenes stored their writings..."
- **Plan requested:** "The hero, Alexandro St. Claire, believed that the Essenes, **in addition to the previously discovered Dead Sea Scrolls**, stored writings in an **undiscovered** cave that could impact the world\u2019s view of religion."
- **Change:** Update the description to include the bolded additions. Ensure curly apostrophe in "world\u2019s".
- **Acceptance:** Description matches the requested copy exactly.

### 2.3 Add second book cover image
- **Current state:** `public/BookCover1.jpeg` exists as an untracked file. Book 2 (`The Thirteenth Cave`) currently shows `cover: null` (line 60), rendering a "Cover Coming Soon" placeholder.
- **Open question:** Is `BookCover1.jpeg` the cover for The Thirteenth Cave, or a replacement cover for Dangerously Overcaffinated? Clarify before assigning.

---

## 3. Navigation rename: "Blog" → "Posts"

### 3.1 Navigation component (`src/components/Navigation.tsx`)
- **Current state (line 13):** `{ name: "Blog", path: "/blog" }`
- **Change:** Update to `{ name: "Posts", path: "/blog" }` (keep route slug `/blog` to avoid breaking links).

### 3.2 Footer quick links (`src/components/Footer.tsx`)
- **Current state (line 53):** `Blog` link text
- **Change:** Update link text to `Posts` (keep `to="/blog"`).

### 3.3 Blog page header (`src/pages/Blog.tsx`)
- **Current state (line 41):** `<Badge>Blog</Badge>`
- **Change:** Update badge text to `Posts`.
- **Note:** The page title "Things That Make You Go Hmmm" (line 43) is fine — no change needed.

### 3.4 Page title / metadata
- **Current state:** No `<title>` or `<Helmet>` usage in Blog.tsx. The app doesn't set per-page titles.
- **Optional enhancement:** Add `document.title` updates via `useEffect` in each page component, or add `react-helmet-async`. Low priority.

### 3.5 Fix Blog 404 issues
- **Current state:** Blog.tsx links to external WordPress at `dalethomas3.wordpress.com`. The category filter buttons (line 87-98) are non-functional — they don't actually filter, they're decorative. The only real link is to the one WordPress post.
- **Likely 404 cause:** GitHub Pages SPA routing. The `docs/404.html` should be a copy of `index.html` (the Makefile handles this via `cp docs/index.html docs/404.html`). If `/blog` returns 404, the 404.html fallback isn't working — verify `docs/404.html` exists after build.
- **Action items:**
  1. Verify `make deploy` correctly copies 404.html.
  2. Remove or clearly mark non-functional category filter buttons.
  3. If internal blog post links exist that 404, either remove them or ensure they're external WordPress links.
- **Acceptance:** No 404s when navigating to `/blog` or clicking any link on the Posts page.

---

## 4. Contact page (`src/pages/Contact.tsx`)

### 4.1 Update the closing quote
- **Current state (line 235):** `"If I don't remember you, I'll make something nice up."`
- **Also in Footer.tsx (line 112):** `"If I don't remember you, I'll make something nice up."`
- **Change both to:** `"If I don\u2019t remember you, I\u2019ll make up something nice."`
- **Details:**
  - Italicize (already italic via `font-lora italic` class on Contact, needs check on Footer).
  - Curly apostrophes in `don\u2019t` and `I\u2019ll`.
  - Word order fix: "make up something nice" not "make something nice up".
  - Period inside the closing quote.
- **Acceptance:** Both Contact page and Footer match the corrected quote exactly.

---

## 5. Footer (`src/components/Footer.tsx`)

### 5.1 Update copyright year
- **Current state (line 109):** `© 2024 Dale Thomas. All rights reserved.`
- **Change:** Replace `2024` with `{new Date().getFullYear()}` so it auto-updates:
  ```tsx
  © {new Date().getFullYear()} Dale Thomas. All rights reserved.
  ```
- **Acceptance:** Footer reads `© 2026 ...` (or current year, dynamically).

---

## 6. Additional findings (not in original plan)

These are issues discovered while reviewing the codebase that may warrant attention:

### 6.1 Buy buttons link to `#`
- **All three "Buy" buttons on the Books page** (lines 154, 166, 178) link to `href="#"` — they don't go to Amazon.
- **The "Available exclusively on Amazon" link** (line 189) also points to `href="#"`.
- **Action:** Replace `#` with actual Amazon product URLs when available. Flag to stakeholder.

### 6.2 Newsletter signup is non-functional
- **Home page hero** (lines 39-47): Email input + Subscribe button have no `onSubmit` handler or integration.
- **Footer** (lines 27-35): Same — email input + button with no handler.
- **Action:** Either connect to a mailing list service (Mailchimp, ConvertKit, etc.) or remove the inputs and replace with a simple "Contact Dale" CTA to avoid user frustration. Flag to stakeholder.

### 6.3 Large image assets
- `public/marg.jpeg` — 1.1 MB (margarita image on home page)
- `public/dale.jpg` — 670 KB (author photo)
- `src/assets/hawaii-coffee-field.jpeg` — hero background
- **Recommendation:** Compress images or convert to WebP to improve page load time. These get served from GitHub Pages without a CDN.

### 6.4 "Coffee Culture Corner" duplicated
- The exact same "Macchiato" coffee fact appears on both the Home page (lines 206-222) and Books page (lines 237-253).
- **Recommendation:** Either vary the content between pages or remove the duplicate.

### 6.5 Untracked file: `public/BookCover1.jpeg`
- This file exists but isn't referenced anywhere in the code.
- **Action:** Determine its purpose (see task 2.3) and either integrate or remove it.

### 6.6 Last deployed 8 months ago
- Per the GitHub Pages screenshot, the site was last deployed 8 months ago. After completing these changes, run `make deploy` to push the updated build.

---

## Verification checklist

Before deploying:

- [ ] Home: Newsletter CTA reads "Sign up for Dale\u2019s Posts"
- [ ] Home: "Independent Publishing for Self-Publishing" section present
- [ ] Home: "Buy Now" button visible and links correctly (confirm destination)
- [ ] Home: Three unique testimonials render with correct attribution
- [ ] Books: Digital price updated to $7.50
- [ ] Books: Thirteenth Cave description updated with requested additions
- [ ] Nav: "Blog" relabeled to "Posts" (nav, footer, blog page badge)
- [ ] No 404s from any Posts links
- [ ] Contact + Footer: closing quote corrected (word order, curly apostrophes)
- [ ] Footer: year shows dynamically via `new Date().getFullYear()`
- [ ] Buy buttons on Books page have real Amazon URLs (or flagged as TODO)
- [ ] `npm run build` succeeds
- [ ] `make deploy` pushes updated `docs/` folder
- [ ] Manual click-through of all nav links from Home, Books, Contact, and Posts
