---
title: Don't teach students to code with AI
subtitle: Teach them to direct, inspect, test, and improve software that AI helps produce
description: A curriculum for teaching software engineering when the code is cheap. Sixteen capabilities, one loop, and the rule I won't bend.
pubDate: 2026-08-21
readingTime: 14
tags: [teaching, ai, curriculum]
---

The big shift is this: **don't teach students to "code with AI." Teach them to
direct, inspect, test, and improve software that AI helps produce.** The examples below use Replit, which is unusually
good for that because the whole loop, from idea to deployed app, can happen in one
place. None of it is Replit-specific. Point a student at Claude or ChatGPT instead
and the work is the same: say what you want, read what comes back, decide whether it
ships.

## The most useful capabilities for teaching

### 1. Turn plain-language ideas into working software

Replit Agent can take a student from a natural-language brief through planning,
implementation, testing, and deployment. Students can describe an app, inspect the
plan, refine requirements, and watch the system evolve.

Useful classroom exercises:

- "Build a study planner for first-year students."
- "Create a multiplayer word game."
- "Turn this spreadsheet workflow into an app."
- "Make a dashboard for this dataset."
- "Interview your user, write a product brief, then have Agent implement only the agreed scope."

The learning objective is not prompt cleverness. It is **requirements
engineering**: being precise about users, constraints, edge cases, and success
criteria.

### 2. Make checkpoints and rollback part of engineering culture

Checkpoints create snapshots that let students experiment safely and recover from
bad changes.

Have students deliberately:

1. Create a working version.
2. Ask the model to make a risky architectural change.
3. Compare the result with the prior checkpoint.
4. Roll back if appropriate.
5. Explain what they learned.

That teaches version control, risk management, and reversible decision-making, not
just "undo."

### 3. The model writes most of the code. The student reviews it.

"Use AI as a code-review partner" has the roles the wrong way round. On many working teams the model is now the one producing the bulk of the code, and the engineer is
the reviewer: the person who decides what to ask for, reads what comes back,
and answers for what ships. That is the job this curriculum is training for, and
it is why the capability being taught is judgement rather than syntax.

None of which makes it an answer machine. Students can ask Agent to explain
unfamiliar code line by line, identify hidden assumptions, find duplicated logic,
propose smaller functions, review error handling, generate a threat model, compare
two architectural approaches, write tests before changing behavior, and explain
*why* a bug occurs rather than merely patching it. What changes is who is
accountable for the result.

Require a short engineering journal for every major AI change:

- What did I ask for?
- What did the model change?
- What did I verify myself?
- What could be wrong?
- Why did I accept or reject the change?

This creates an evidence trail of judgement.

### 4. Let the agent test apps in a real browser

App Testing allows Agent to navigate an application in a browser like a human user,
identify problems, and fix issues during development.

This is excellent for teaching the difference between:

- "The code runs."
- "The feature works."
- "The user experience is correct."
- "The system behaves safely under failure."

Assignments can require a happy-path test, an invalid-input test, an authorization
test, a mobile or responsive test, and a regression test for a previously fixed bug.

Students should still inspect and challenge AI-generated tests. Otherwise they learn
to create tests that merely confirm the implementation instead of testing the
requirement.

### 5. Build real, publishable artifacts, not toy snippets

Artifacts can include web apps, mobile apps, slide decks, animations, data
visualizations, and designs, with publishable outputs and shareable URLs.

That supports a progression like:

- **Week 1:** A command-line or small logic exercise.
- **Week 2:** A browser interface.
- **Week 3:** Persistent data.
- **Week 4:** Authentication and permissions.
- **Week 5:** External API integration.
- **Week 6:** Testing and observability.
- **Week 7:** Deployment and user feedback.
- **Week 8:** Refactoring and postmortem.

The final assessment becomes a real product with users, not a zip file that only
works on the instructor's computer.

### 6. Teach databases and file storage through real features

Managed SQL/PostgreSQL databases handle structured data; app storage handles files
such as images and videos.

Students can build a library checkout system, a group project tracker, a recipe or
lab-notebook app, an image-based plant identification journal, a student portfolio
with uploaded work, or a voting app with an audit trail.

More importantly, they learn data modeling, primary and foreign keys, migrations,
validation, transactions, privacy boundaries, and what should and should not be
stored.

Ask students to submit an entity-relationship diagram *before* asking Agent to
create the schema.

### 7. Teach authentication and authorization, not just login screens

Replit Auth supports authentication using Replit accounts; Clerk Auth supports
independent, branded user accounts.

This opens up serious assignments: students can see only their own records,
instructors can moderate submissions, team members have different roles, an
administrator can approve or reject content, users can share resources selectively.

The key lesson: **authentication answers "Who are you?" Authorization answers "What
are you allowed to do?"** Have students demonstrate both with tests.

### 8. Connect software to the systems people already use

Integrations can connect applications to services such as GitHub, Google Workspace,
Stripe, Shopify, and other external systems.

Project ideas: pull assignments from a spreadsheet into a student dashboard, create
a GitHub issue from a bug report, build a calendar-aware study planner, send an email
when a project review is ready, import data from an existing school workflow, build a
small CRM for a student-run organization.

This teaches API design, authentication boundaries, rate limits, webhooks, data
mapping, and failure handling: the "glue" work that dominates much professional
software engineering.

### 9. Build native mobile apps

React Native and Expo support native iOS and Android apps. Students can preview apps
in a simulator or on a physical device through Expo Go, while connecting them to
server-side services.

Good assignments: a campus navigation app, a field-data collection tool, a habit or
practice tracker, a local community reporting app, a flashcard app using the phone
camera, a collaborative event check-in app.

Students learn that mobile software introduces new concerns: unreliable networks,
permissions, touch interfaces, device sizes, offline behavior, and privacy.

### 10. Teach AI engineering by building AI products

AI Integrations provide managed access to models from Anthropic, OpenAI, Google and
OpenRouter without students having to manage separate API keys and infrastructure.
Building *on* Claude or the OpenAI API is a different skill from building *with*
ChatGPT, and this is where students meet it.

Students can build a retrieval-based study assistant, a feedback tool for writing or
code, a document question-answering system, a classifier for support requests, a
role-play interview coach, a multimodal lab notebook, or an AI feature inside a
conventional CRUD app.

But the curriculum should cover the engineering *around* the model: prompt and
context design, structured outputs, evaluation datasets, hallucination handling, cost
and latency, data privacy, prompt injection, human review, fallback behavior, and
model substitution.

A strong assignment: **build the same feature with two models, create an evaluation
set, and defend which model you would ship.**

### 11. Design before implementation

Replit Design provides an infinite canvas for generating interface frames, exploring
visual variants, and turning selected designs into interactive artifacts.

This lets you teach a professional product workflow: understand the user, sketch
multiple directions, test the flow with classmates, choose one, implement it, compare
the implementation with the original intent, iterate on feedback.

Students learn that software engineering begins before code, and that interface
decisions are technical decisions too.

### 12. Have teams build in parallel

Simultaneous collaboration and parallel task execution let teammates work on
different parts of a project.

Use roles that rotate each sprint: product owner, technical lead, AI operator, test
engineer, security reviewer, UX researcher, release manager.

The point is to expose students to coordination costs: conflicting assumptions,
interface contracts, incomplete work, unclear ownership, and integration failures.

A particularly good exercise is to give each team member a separate task with an
explicit contract:

```text
Input: userId and date range
Output: JSON list of study sessions
Failure behavior: return an empty list for no sessions;
return a clear error for invalid dates.
```

That teaches modularity and collaboration more effectively than simply telling
students to "work in groups."

### 13. Create reusable teaching workflows

Agent Skills are reusable instruction-and-file packages for specialized workflows.
Custom Instructions apply workspace-wide guidance to the agent.

An instructor could create a course-specific skill that tells Agent to follow the
course's code style, prefer readable beginner-friendly abstractions, explain changes
before implementing them, never silently change the database schema, add tests for
every new behavior, flag security risks, ask students to make design decisions
themselves, and give hints instead of complete solutions.

This is powerful because you can standardize the learning environment without making
every student use exactly the same project.

### 14. Teach deployment as part of "done"

Deployments support publishing apps through Autoscale, Static, Reserved VM, and
Scheduled options, with managed domains, SSL, and monitoring.

Students should have to answer: Who is the app for? What happens if traffic
increases? What data persists? How do we roll back? What logs would we inspect? What
is the expected cost? What should happen when an external service is unavailable?

That turns deployment from a mysterious final button into an engineering
responsibility.

### 15. Make security visible

Security tooling such as a Project Security Center and Package Firewall makes this
concrete.

Build security into every project: never put secrets in source code, review
dependencies, test authorization directly, validate user input, avoid exposing
private data in logs, explain what data the AI model receives, threat-model a feature
before shipping it, and perform a "malicious user" demo at the end of each sprint.

Students should experience security as a design constraint, not a separate lecture at
the end.

### 16. Use team workspaces for a course or cohort

Team Workspaces support centralized management for groups working across multiple
projects.

That makes it practical to run a shared course starter template, team-based projects,
instructor reference implementations, peer review, a common set of Agent
instructions, separate beginner and advanced tracks, and a public demo day with
deployed projects.

## A strong course structure

I would organize the course around the **AI-assisted engineering loop**:

```text
Observe a problem
      ↓
Write a precise specification
      ↓
Design the data and user flow
      ↓
Ask AI to implement a small slice
      ↓
Read and explain the code
      ↓
Test the behavior
      ↓
Review security and maintainability
      ↓
Deploy and observe
      ↓
Learn from real users
```

Students should be graded less on how much code they produce and more on the quality
of their requirements, their ability to explain generated code, test coverage and
test quality, debugging method, architectural trade-offs, security awareness,
git/checkpoint discipline, quality of user feedback, and their final engineering
postmortem.

## Projects that work especially well

- **Campus companion:** authentication, maps, events, notifications, mobile UX.
- **AI study coach:** model integration, evaluation, privacy, prompt design.
- **Community issue tracker:** roles, moderation, file uploads, dashboards.
- **Student startup MVP:** product discovery, design, database, deployment, analytics.
- **Open-source maintenance simulation:** inherit a messy codebase, use the model to understand it, fix bugs, add tests, and write a release note.
- **AI pair-programming experiment:** one team uses AI freely, another uses constrained AI workflows, then compare quality, speed, defects, and understanding.
- **Software audit challenge:** students receive an AI-generated app and must find correctness, security, UX, and maintainability problems.

The most important rule I'd establish is:

> **AI may write code, but students must own the specification, verification,
> explanation, and release decision.**

That produces graduates who are not merely faster typists. It produces people who can
turn ambiguous problems into reliable systems: the part of software engineering that
becomes more valuable, not less, in the age of AI.
