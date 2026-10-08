I want to re-do my CV (`notes/2026/10-October/OLD_CV`), the "SKILLS" section will cause problems, due all projects demands different tech, so that will clotter. The profile pictrue is not needed anymore. "VIRTUES" and the quote below "PERSONAL PROFILE" should go aswell.
In general, the CV should be more like a text-to-read, rather than a "good-looking" design. Someone in "RRHH" told me that today, most enterprises receive the CV's info from AI summary.
So lets "refactor" my CV.


Check these current projects:

# 911 for Argentina, Rio Negro - CAD System (Computer-Aided Dispatch)
> Enterprise: Colmena29
> time: 2 years
doc: `/Users/ricardoflores/Documents/GitHub/SGG-911-Front/src/docs/project-stack-tech-complete.md`
> responsability: all besides "calls" infrastrcture and deploy to prod.

# SaaS multi-tenant for Restaurants 
> Enterprise: N/A (Freelance project)
> time: 3 months
doc: `/Users/ricardoflores/Documents/GitHub/jadespark/docs/project-tech-summary.md`
> responsability: refactor and assurement to deploy on prod.

---


# Then with the available from the OLD_CV, write a good CV with these instructions:


# AI-Optimized Full-Stack CV Strategy Guide

Optimizing your CV for an **AI-driven recruitment pipeline** requires a fundamentally different strategy than writing for a human. Automated parsing systems and AI screeners (like Workday, Greenhouse, or internal LLMs) prioritize **semantic density, unambiguous technical taxonomies, and clear hierarchical relationships** over design flair. 

Because recruiters will primarily see an AI-generated summary and extracted highlights, your document must be structured to feed the algorithm clean, high-impact data.

---

## 1. Structure for the Parser (The Foundation)
AI parsers read linearly or block by block. If your layout confuses the DOM or PDF text extractor, your skills and history will get scrambled.

* **Avoid Multi-Column Layouts:** Stick to a clean, single-column vertical flow. Multi-column designs cause AI parsers to read horizontally across the page instead of vertically down, mixing job titles with unrelated tech stacks.
* **Use Standard Section Headings:** Stick to predictable headers like **"Professional Experience," "Technical Skills," "Education,"** and **"Projects."** Avoid creative headers like "Where I’ve Built Magic" or "My Coding Journey"—the AI may ignore them entirely.
* **File Format:** Submit as a clean, text-based PDF generated from a word processor or Markdown (never a scanned image or heavy graphic design template).

---

## 2. Optimize the "Summary & Stuff" (The AI Hook)
Since recruiters rely heavily on AI-generated summaries and candidate snapshots, this section is your highest-leverage asset. It needs to read like a high-density executive brief that an LLM can easily compress and highlight.

* **The Core Formula:** 
  $$\text{[Years]} \text{ Full-Stack Developer specializing in } \text{[Core Stack]} \text{ with deep expertise in } \text{[Backend/Frontend focus]} \text{. Proven track record of scaling } \text{[System Types]} \text{ and optimizing } \text{[Performance Metrics]}\text{.}$$
* **Inject Domain Keywords Early:** Front-load your primary stack (e.g., PHP, TypeScript, React, PostgreSQL) in the first three sentences. AI summarizers heavily weight the top 20% of the document.
* **Keyword Density Over Fluff:** Instead of saying *"Passionate coder who loves building cool apps,"* write *"Architecting high-performance web applications with modern backend frameworks and component-driven frontends, focusing on resilient database structures and real-time data flows."*

---

## 3. Bullet-Proof Technical Skills Section
AI screeners match candidate skills directly against job description vector embeddings. Group your tech stack logically so the AI can build an accurate capability vector.

* **Categorize Explicitly:** Don't dump a comma-separated list of 50 tools. Group them clearly by function:
  * **Languages & Core:** TypeScript, JavaScript, SQL, PHP
  * **Frameworks & Libraries:** React, Next.js, Symfony, Node.js
  * **Databases & Infrastructure:** PostgreSQL, MySQL, Redis, Docker, AWS
* **Contextualize Tools:** Never list a tool in isolation if you can tie it to a pattern or version. (e.g., *“Symfony (Doctrine ORM, API Platform)”* scores better for semantic matching than just *“Symfony”*).

---

## 4. Write Action-and-Impact Experience Bullets
When an AI summarizes your experience for a recruiter, it looks for action verbs, system scale, and technical depth.

* **Use the Context-Action-Result (CAR) Pattern:**
  * *Bad:* "Worked on backend APIs and frontend components."
  * *AI-Optimized:* "Refactored legacy database entity mapping and query execution in backend services, reducing object creation overhead and optimizing emergency dispatch latency in staging environments."
* **Include Quantifiable Metrics:** Even if estimated, use numbers (e.g., *“optimized database queries by 40%,” “managed state with Optimistic UI updates to eliminate perceived latency”*). AI algorithms weight numbers as strong indicators of high-impact engineering experience.

---

## 5. Standardize Naming Conventions
* **Job Titles:** Use industry-standard titles (**Full-Stack Software Engineer** or **Senior Full-Stack Developer**). Avoid internal company titles that mean nothing to external parsers (e.g., "Code Ninja" or "Full-Stack Wizard").
* **Date Formats:** Ensure your date formats are uniform (e.g., `MM/YYYY – Present`), as parsers use these to automatically calculate your total years of professional experience.