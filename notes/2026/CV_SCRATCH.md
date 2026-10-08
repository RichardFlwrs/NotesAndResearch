# Ricardo Flores

Full-Stack Software Engineer

Monterrey, Nuevo León, México  
[ricardo.alberto096@gmail.com](mailto:ricardo.alberto096@gmail.com) · +52 81 2399 5671 · linkedin.com/in/ricardo-a-flores

## Summary

Full-Stack Software Engineer with 7 years of experience specializing in PHP (Symfony, Laravel) and TypeScript (React). Builds REST APIs, relational data models, and component-driven frontends for operational systems, including real-time updates and offline continuity. Delivered the application layer of a 911 computer-aided dispatch platform for Río Negro, Argentina, and refactored a multi-tenant restaurant SaaS through to production readiness.

## Technical Skills

**Languages:** TypeScript, JavaScript, PHP, SQL

**Backend:** Symfony 7 (Doctrine ORM, Lexik JWT, Symfony Security, Symfony Messenger), Laravel, Node.js

**Frontend:** React 18 (Vite, React Router, TanStack Query, Zod), Vue, Angular

**Databases:** SQL Server, PostgreSQL, MySQL, MongoDB, Cloud Firestore

**Infrastructure:** Docker, Mercure (Server-Sent Events), Firebase, Netlify Functions, PWA (Workbox), Git

## Professional Experience



### Full-Stack Software Engineer — Colmena29

07/2024 – Present

911 computer-aided dispatch (CAD) for Río Negro, Argentina. Responsible for the API and the operator application.

Stack: PHP 8.2, Symfony 7, Doctrine ORM, SQL Server, TypeScript, React 18, Mercure, Docker.

- Built the Symfony 7 REST API for emergency records, operators, agencies, resources, and internal chat, persisted with Doctrine ORM on SQL Server and protected with JWT (Lexik) and role-based access.
- Built the React 18 / TypeScript operator interface (Vite, TanStack Query, Zod, MUI) used to open, update, and close emergency records and to review operator metrics.
- Delivered real-time updates over Mercure (SSE) for records, active operators, and chat, and moved notification publishing onto Symfony Messenger so the save request does not wait on the broker.
- Added geospatial dispatch: shapefile jurisdictions with point-in-polygon assignment, Google Maps, and deck.gl heatmaps of incident density, plus phone-number geolocation through Soflex.
- Shipped an offline PWA (Workbox, Cache Storage, local queue) so operators can load cached records and file emergencies without connectivity, then retry the upload when the network returns.
- Generated operational reports (PhpSpreadsheet on the server; Excel and PDF on the client) and covered behavior with PHPUnit and Vitest.



### Full-Stack Software Engineer (Freelance) — Jade Spark

07/2026 – Present

Multi-tenant SaaS for restaurants. One deployment serves many restaurants. Scope: refactor and production readiness. Concurrent with Colmena29.

Stack: React 18, Vite, Firebase Auth, Cloud Firestore, Netlify Functions, Stripe, Zod, PWA.

- Refactored the tenant model so each restaurant’s data stays isolated under its own Firestore path, covering point of sale, table map, kitchen, cash register, and the public QR menu.
- Moved privileged writes (orders, tables, payments, membership) to Netlify Functions with Firebase Admin, with Firebase Auth on the client.
- Connected Stripe for restaurant subscription checkout and renewal, and shipped an installable PWA for floor staff.
- Introduced Zod validation on the public order path and IndexedDB caching so staff screens reuse local data instead of re-reading full collections.
- Added Upstash Redis rate limits on public functions and Vitest coverage for UI flows and business rules ahead of production.



### Frontend Software Engineer — Apex Systems

01/2022 – 01/2023

Client: Deloitte. Internal web platform for staff management.

- Delivered a new staff-management section on the platform.
- Improved existing screens for accessibility.
- Implemented the platform translation service.
- Wrote unit tests for the majority of the project.



### Full-Stack Software Engineer — Socialhero

10/2019 – 01/2022

Donation platform linking social organizations, sales-company affiliates, and donors. Donors receive tokens for each donation.

Stack: Vue, Laravel, Xamarin.

- Developed the full-stack web platform (Vue, Laravel), including the donation flow and the token reward.
- Led code quality for developers in the area, including database query optimization and page performance.
- Updated the Xamarin hybrid app and published Android and iOS releases to the stores.



### Full-Stack Software Engineer — Intracomputers

03/2018 – 10/2019

Survey platform for business clients to measure product and service quality.

Stack: Angular 7, Laravel.

- Developed the full-stack survey platform (Angular 7, Laravel).
- Kept the codebase current across Angular upgrades.
- Trained new employees and turned client business rules into software requirements.



## Education

Licenciatura en Multimedia Digital — Universidad Autónoma de Nuevo León (UANL)

JavaScript Advance — Zero To Mastery (ZTM)

MIT IDSS - Data Science Course

## Languages

Spanish, English, French

---



## Scratch notes (not part of the CV)

- Photo, Virtues, and the personal-profile quote are omitted.
- Skills are the recurring stack only. Project-specific tools (deck.gl, Soflex, Xamarin, Stripe, Mercure) sit on the job that used them.
- 911 telephony (Janus, WebRTC, HiperMe) and production deployment are not listed as your work.
- Colmena29 is dated 07/2024 – Present from your notes (interview 04/2024, project work from 07/2024). That is about 2 years.
- Jade Spark is dated 07/2026 – Present from the stated 3 months. Confirm the start month.
- “7 years” counts employment only and leaves out the gap from 01/2023 to 07/2024.
- Apex has no stack in the old CV, so none is invented.
- Zod on Jade Spark is described as started on the public order only, matching the current code.

