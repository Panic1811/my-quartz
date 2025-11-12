---
{"publish":true,"cssclasses":""}
---

> **Version:** Updated  
> **Purpose:** YC interview prep  
> **Focus:** Offline meeting intelligence, Morphik graph-RAG, task graph, optional voice layer  
> **Tone:** Premium, minimal, Apple-style clarity

---
### 1️⃣ First Interview Questions

**What are you building?**  

_Short_: "Aurys is premium offline meeting intelligence — transcription, searchable memory, and an optional voice agent that can act on tasks."  

_Long_: "We capture in-room meetings with state-of-the-art diarization, turn the audio into a graph-based knowledge store, and let anyone ask 'What did we decide about X?' with cited answers. The system extracts action items, explains why tasks are stuck, and can create or update them through tool-calling. Voice is an optional premium layer that works with any speakerphone."

---

**Why don’t Otter or Fireflies solve this?**  

_Short_: "They’re built for online calls. We’re built for real rooms — with diarization and data models that handle messy, multi-speaker audio."  

_Long_: "Otter and Fireflies thrive on online calls where bots can auto-join. But 80% of executive decisions happen in rooms with overlapping voices and no bot present. We built Aurys for that environment: room-grade capture with WhisperX-level diarization, a meeting graph linking transcripts to decisions, and local processing for privacy. Their online architecture would need a full rebuild to support this use case."

---

**Go-to-market strategy?**  

_Short_: "Product-led trials → paid pilots → channel partners with speakerphone OEMs and integrations like Jira or Slack."  

_Long_: "We start with free trials where teams upload a few meetings. Once usage passes three queries per user per week and measurable prep-time savings, we convert them to a two-to-four-week paid pilot. After that, we expand seats and add voice as an upsell. Hardware bundles with Jabra or Anker and integrations with work tools make it a natural channel product."

---

**Would this replace Otter or work alongside it?**  

_Short_: "Replace it for teams that meet offline — we’re the only solution designed for that environment."  

_Long_: "Consulting, legal, and field sales teams rely heavily on in-room meetings. For them, Aurys replaces Otter entirely. We integrate with existing tools by pushing action items and updates, but our main value lies in offline intelligence — not just transcription."

---

**You’re a solo founder. How are you thinking about a cofounder?**  

_Short_: "I’m already talking to strong technical candidates but can keep shipping solo if needed."  

_Long_: "I built the MVP myself using a no-code stack and Supabase functions. I’m now talking with senior full-stack engineers who can scale the backend and handle enterprise security. If the right fit takes time, I’ll continue iterating product and traction independently."

---

**What profile are you looking for in a cofounder?**  

_Short_: "A senior full-stack engineer with AI-SaaS experience who’s comfortable leading backend and security."  

_Long_: "Someone who has built and scaled SaaS systems, understands tool-calling and compliance, and can lead engineering as we move toward enterprise pilots. Hardware-software integration experience is a plus."

---

**What if the idea doesn’t work?**  

_Short_: "Then I’ll focus on the core meeting-memory engine and build it as a standalone search product."  

_Long_: "If the voice or task layers don’t find traction, the underlying meeting-memory stack — diarization, graph-RAG, and cited Q&A — is still valuable. I can repackage it as a standalone ‘meeting recall’ SaaS tool with the same backend."

---

### 2️⃣ Second Interview Questions

**Do you have a prototype? What progress have you made?**  

_Short_: "Live demo: offline upload → transcript → cited Q&A. Voice beta works on a Jabra speakerphone."  

_Long_: "We’ve processed over 50 meetings through the pipeline: WhisperX diarization, Morphik graph indexing, and cited Q&A. The voice beta uses push-to-talk, streaming to ElevenLabs, and tool-calling via Supabase edge functions. We’ve added privacy controls (RLS, audit logs, DPA templates) and integrated Stripe for pilots."

---

**Why is it different?**  

_Short_: "Offline-first, transcript-grounded Q&A, and actionable task analysis — no one else combines those."  

_Long_: "Competitors handle online calls or generic document Q&A. Aurys handles real rooms: diarization tuned for overlapping speech, graph-RAG for cited recall, and a task graph that connects meeting context to follow-up actions. The voice mode makes it the first room-aware assistant, not just a note-taker."

---

**How will you acquire users?**  

_Short_: "Product-led trials, targeted outreach to consulting and legal firms, and co-marketing with hardware partners."  

_Long_: "We attract users via free trials (content SEO, Product Hunt, LinkedIn). Teams that reach three queries per user per week enter paid pilots. Case studies from these pilots drive the next outreach wave. Bundling with Jabra/Anker hardware gives us an organic channel to hybrid teams."

---

**Have you worked on a growth team before? What did you learn?**  

_Short_: "Yes — I learned activation starts when users get real insight, not when they sign up."  

_Long_: "I ran growth at a SaaS analytics startup. I found that retention happens after a user’s first meaningful query. We tied sharing to insight discovery, not account creation, and it drove 15% organic growth. I’ll replicate that in Aurys by making the first cited answer instantly shareable."

---

### 3️⃣ Core YC Questions

**Who are your users?**  

_Short_: "Hybrid teams that run high-value in-person meetings — consulting, legal, sales, and ops." 

_Long_: "Buyers are team leads or operations owners; users are meeting hosts and participants. Our first segment is 50-500-employee hybrid companies that need to recall and act on decisions made offline."

---

**How do you get them?**  

_Short_: "Product-led trials → paid pilots → hardware channels."  

_Long_: "We begin with a free trial to upload a few meetings. If usage and recall queries grow, we move to a pilot and expand seats. Hardware bundles and Jira exports make expansion easy."

---

**What are your key metrics?**  

_Short_: "North star: queries per active user per week."  

_Long_: "≥3 queries per active user per week signals stickiness. Other KPIs: meeting uploads per user (≥1/week), pilot-to-paid conversion (20–40%), retention, answer satisfaction (>60%), and time-to-first-answer (<24h)."

---

**Why isn’t this solved yet?**  

_Short_: "Offline meetings need a full new stack — from capture to reasoning — not just transcription."  

_Long_: "In-room audio requires new diarization models, transcript-linked graphs, and privacy-safe tool-calling. Building that plus enterprise-grade controls is a multi-layer problem that incumbents haven’t tackled."

---

### 4️⃣ Defensibility & LLM Wrapper Concerns

**What’s stopping Otter or Fireflies from catching up?**  

_Short_: "Their architecture is online-first; we’re built offline-first with a meeting-native graph."  

_Long_: "They’d need to rebuild their stack for offline processing, graph-based storage, and transcript-level citations — then validate across room acoustics. That’s years of iteration. Meanwhile our accuracy and data graphs compound with every meeting."

---

**Are you just an LLM wrapper?**  

_Short_: "No — we’re a full meeting stack with proprietary data and structure, not just prompts."  

_Long_: "Aurys uses LLMs for reasoning, but the defensibility lies in our data model — diarization tuned for rooms, Morphik graph-RAG for transcript hierarchies, and a task schema for holdup analysis. Over time, each team’s meeting graph becomes unique IP."

---

**What about generic AI tools like Notion AI or ClickUp AI?**  

_Short_: "They do document Q&A; we do meeting intelligence."  
_Long_: "Notion and ClickUp handle static content. We handle live, multi-speaker audio — turning decisions into structured, actionable memory. Our offline pipeline and task graph make it a completely different product class."

---

### 5️⃣ Growth, Security & Scale

**How will you handle enterprise security?**  

_Short_: "SOC-2 path via Vanta, audit logs, SSO, and customer-managed keys."  

_Long_: "We’re implementing RLS at every layer, enterprise LLM endpoints with no-training guarantees, audit logs, and configurable retention. Larger clients get SSO and managed encryption. Privacy and compliance are treated as core features."

---

**How do you view AI/meeting tool consolidation?**  

_Short_: "It creates space for focused specialists — we plug into platforms instead of competing with them."  

_Long_: "As big suites absorb generic tools, users still need depth. Aurys stays narrow and deep — the definitive offline intelligence layer that integrates cleanly with Slack, Jira, and others."

---

**How will you scale the tech?**  

_Short_: "Supabase edge functions, Morphik graphs, modular architecture — scales horizontally from day one."  

_Long_: "Edge functions handle compute-heavy tool-calls, Morphik manages transcript graphs, and RLS/audit layers make it enterprise-ready. WhisperX processing can scale to dedicated GPU workers while the data model stays consistent."