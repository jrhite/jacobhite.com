# Content inventory — migration from Google Sites

**Source:** `https://sites.google.com/moreland.edu/jacobhite/`
**Site title:** "E-Portfolio" · **Header:** "Jacob Hite"
**Access:** Google Workspace, restricted to `moreland.edu`
**Crawled:** 2026-08-21 — 17 pages, 3 unique images, 2 linked Google Docs, 2 embedded Drive files

This file is the parity contract. Every row below has a home on the new site.

---

## Pages

| # | Original page | Original URL | Content | New location |
| --- | --- | --- | --- | --- |
| 1 | Home | `/home` | H1 + 5 bio paragraphs + 2 photos | `/` and `/about` |
| 2 | Literacy | `/literacy` | H1 "Literacy Guide" + link to cohort Doc | `/portfolio/literacy` |
| 3 | Module 1 (ED 501) | `/module/module-1-ed-501` | H1 + orientation write-up (7 points + InTASC para) | `/portfolio/module-1` |
| 4 | Module 2 (ED 502) | `/module/module-2-ed-502` | H1 + link to "IDEA Categories" Doc. Since extended here with a recording and the digital citizenship activity | `/portfolio/module-2` |
| 5 | Module 3 (ED 503) | `/module/module-3-ed-503` | **Placeholder** — H1 only. Since written up here, with three recordings | `/portfolio/module-3` |
| 6 | Module 4 (ED 504) | `/module/module-4-ed-504` | **Placeholder** — H1 only | `/portfolio/module-4` |
| 7 | Module 5 (ED 505) | `/module/module-5-ed-505` | **Placeholder** — H1 only | `/portfolio/module-5` |
| 8 | Module 6 (ED 506) | `/module/module-6-ed-506` | **Placeholder** — H1 only | `/portfolio/module-6` |
| 9 | Clincal Practice | `/clincal-practice` | H1 "Clinical Practice" + Merrill framework + 2 refs | `/portfolio/clinical-practice` |
| 10 | InTASC Standards | `/intasc-standards` | H1 + **broken** Drive embed. Since written up here | `/portfolio/intasc-standards` |

"Module" itself is a nav folder on the original, not a page. On the new site it gets a real index at `/portfolio`.

---

## Defects found in the original (carried over as *fixed*, listed here so nothing is lost silently)

| Where | Problem | What the new site does |
| --- | --- | --- |
| Nav | "Clincal Practice" — misspelled | Spelled "Clinical Practice" |
| Literacy | Link text "Cohort Literaracy Guide" — misspelled | Spelled "Literacy" |
| Home | "have been working as a software ever since" — word missing | "as a software engineer ever since" |
| InTASC Standards | Embedded Drive file 404s: *"Sorry, the file you have requested does not exist."* | Page kept, embed removed, replaced with the ten standards written out from the CCSSO source |

---

## Assets

| File | Original size | Where it appeared | Notes |
| --- | --- | --- | --- |
| `src/assets/original/office-selfie.png` | 1280×1280 PNG | Home | Group selfie, office/coworking space |
| `src/assets/original/teaching-se-asia.jpg` | 900×432 JPEG | Home | Volunteer teaching, wooden classroom in SE Asia |
| `src/assets/original/moreland-logo.png` | 195×235 PNG | Every page | **Moreland University logo** — their mark, not ours. Not reused as site branding. |
| `public/media/supporting-ell-mll-students.mp4` | 4:19, 1792×992 H.264 | Module 3 — **new here**, not on the original | Recorded slide presentation. Transcoded from a 1920×996 HEVC `.mov`; HEVC only plays in Safari. |
| `public/media/supporting-ell-mll-students-poster.jpg` | 1280×709 JPEG | Module 3 | First frame of the recording, used as the video poster. |
| `public/media/licensed-to-teach-thailand.mp4` | 4:56, 1920×1080 H.264 | Module 2 — **new here**, not on the original | Narrated research presentation on Thai teacher licensing law. Transcoded from a 3024×1964 60fps `.mov` screen recording; the letterbox was cropped off, leaving a true 16:9. |
| `public/media/licensed-to-teach-thailand-poster.jpg` | 1280×720 JPEG | Module 2 | Title slide of the recording, used as the video poster. |
| `public/media/evidence-based-instruction.mp4` | 5:40, 1920×1080 H.264 | Module 3 — **new here**, not on the original | Narrated deck on evidence-based instructional practices. Transcoded from a 3024×1898 60fps `.mov`; letterbox cropped off, leaving a true 16:9. |
| `public/media/evidence-based-instruction-poster.jpg` | 1280×720 JPEG | Module 3 | Opening slide, used as the video poster. |
| `public/media/cs-literacy-tools.mp4` | 4:34, 1920×1080 H.264 | Module 3 — **new here**, not on the original | Screen tutorial on the CS toolchain as literacy tooling. Shipped as delivered — already H.264/AAC with the moov atom up front, so no re-encode. |
| `public/media/cs-literacy-tools-poster.jpg` | 1280×720 JPEG | Module 3 | Title slide, used as the video poster. |

The page-header background (dark diagonal beams) is a Google Sites stock theme image, not owned content. Not carried over.

---

## Linked / embedded documents — needs a decision

Two of these are **cohort collaborative documents containing other students' names and work**. Republishing them on a public personal site would expose classmates' contributions and names. The new site links to them rather than copying them.

| Item | Where | Type | Status |
| --- | --- | --- | --- |
| "Literacy Guide_M1-6" | Literacy | Google Doc, ~40k chars, multi-author cohort table | Linked, not copied — contains classmates' names |
| "M2U3A2_IDEACategories_24" | Module 2 | Google Doc, ~20k chars, multi-author cohort table | Linked, not copied — contains classmates' names |
| InTASC embed | InTASC Standards | Drive file | **Dead link.** File does not exist. Replaced by written content citing CCSSO (2011, 2013) directly — no embed. |

---

## Parity checklist

- [x] Every page from the original has a home here (10/17) — the seven M.Ed. pathway pages were dropped on purpose, not missed
- [x] Every placeholder carried over, and still visibly a placeholder — except Module 3, which has since been written up and is marked complete
- [x] Every image downloaded and committed to `src/assets/original/`
- [x] Every outbound link recorded
- [ ] Decide what to do about the two cohort Google Docs (see above)
- [x] Replace the dead InTASC file — written out on the page instead of re-embedded, sourced to CCSSO
