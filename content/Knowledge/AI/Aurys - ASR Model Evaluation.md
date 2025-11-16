---
{"publish":true,"tags":["Aurys"],"cssclasses":""}
---

---
# ASR & Diarization: Architectural Decision for an Offline-First Product

## 1.0 Executive Summary

This document presents a revised analysis and strategic recommendation for our product's core transcription and speaker identification engine. New information regarding our **offline-first meeting context** and a more detailed understanding of our potential tech stacks have fundamentally reshaped the decision. The previous reliance on automated metadata (e.g., calendar invites) is not viable.

Our choice is no longer between individual models, but between three distinct architectural **stacks**.

-   **Primary Recommendation (The Control & Feature Stack):** We recommend building our product around the **WhisperX + Pyannote.ai stack**. This open-source pipeline gives us best-in-class transcription precision (via manual prompts) and true speaker **identification** by name using voiceprints—a critical feature for user experience. While it requires the most engineering effort, it provides maximum control, the best feature set, and the lowest long-term operational cost.

-   **Viable Alternative (The Speed & Simplicity Stack):** The **AssemblyAI-only stack** is the fastest path to market. Its massive "Word Boost" limit is a major advantage for our offline context, allowing for a large, persistent glossary. However, this path is contingent on a critical unknown: **we must verify if AssemblyAI offers speaker identification via voiceprints.** If it only offers generic diarization (`Speaker A`, `Speaker B`), it is a functionally inferior solution for our needs.

-   **Core Finding:** For an offline product without digital metadata, our ability to provide context to the ASR model must be built into the UI (e.g., a "Meeting Attendees" field). The key decision is whether to invest in an open-source pipeline that offers superior features (voiceprints) or a commercial API that offers superior convenience (large context limit).

---

## 2.0 The "Offline-First" Challenge & The Solution

Our focus on offline meetings means we cannot automatically pull metadata like attendee lists or agendas from digital calendars. This invalidates the "Dynamic Prompt Builder" strategy.

**The Solution:** Our product's UI must include a manual "Pre-Meeting Context" step. Before a recording is processed, the user must be prompted to enter:
1.  **Meeting Attendees:** `e.g., Vedant, Dhruv, Mihir`
2.  **Key Topics/Jargon:** `e.g., Project Aurys, Almezan`

This manually entered information will serve as the `initial_prompt` for WhisperX or the "Word Boost" for AssemblyAI. This is a prerequisite for achieving high accuracy with *any* chosen stack.

---

## 3.0 Architectural Stacks Under Review

We are evaluating three distinct end-to-end pipelines.

### Stack A: The Open-Source Control Stack
-   **Transcription:** **WhisperX** (with manual `initial_prompt`)
-   **Diarization & Identification:** **Pyannote.ai** (or similar voiceprint library)
-   **How it Works:** WhisperX transcribes the audio with high precision on key terms. Pyannote analyzes the audio, separates the speakers, and—using pre-enrolled voiceprints—assigns the correct name to each speaker segment.
-   **End Result:** A highly accurate transcript with identified speakers (`Vedant said...`, `Dhruv said...`).

### Stack B: The All-in-One Commercial Stack
-   **Transcription & Diarization:** **AssemblyAI** (with "Word Boost")
-   **Identification:** **CRITICAL UNKNOWN.** We must verify if AssemblyAI's API supports identification by name via voiceprints.
-   **How it Works:** A single API call to AssemblyAI processes the audio, transcribes it using a large glossary of boosted words, and separates speakers.
-   **End Result:** A high-quality transcript with either generic speakers (`Speaker A`, `Speaker B`) or, if the feature exists, identified speakers.

### Stack C: The Hybrid Commercial Stack
-   **Transcription:** **AssemblyAI**
-   **Diarization & Identification:** **Pyannote.ai**
-   **How it Works:** We use two separate services. AssemblyAI for its excellent transcription and large context window, and Pyannote to add the crucial voiceprint identification feature.
-   **End Result:** A high-quality transcript with identified speakers, but at maximum cost and complexity.

---

## 4.0 Comparative Analysis of Stacks

| Feature                    | Stack A (WhisperX + Pyannote) | Stack B (AssemblyAI Only)      | Stack C (AssemblyAI + Pyannote) |
| -------------------------- | ----------------------------- | ------------------------------ | ------------------------------- |
| **Transcription Precision**  | ✅ **Perfect** (with prompt)    | Excellent (minor errors)       | Excellent (minor errors)        |
| **Speaker Identification** | ✅ **Yes (by Name)**          | ❓ **Critical Unknown**       | ✅ **Yes (by Name)**            |
| **Context Scalability**      | Low (224 tokens, manual UI)   | ✅ **High (1,000+ words)**   | ✅ High (1,000+ words)          |
| **Engineering Effort**     | High (requires integration)   | ✅ **Low (single API)**        | Very High (integrating two APIs)|
| **Operational Cost**         | ✅ **Lowest (Open-Source)**   | Medium (Paid API)              | ❌ **Highest (Two Paid APIs)**  |

---

## 5.0 Strategic Recommendation & Action Plan

The choice between Stack A and Stack B is a classic **"Build vs. Buy"** decision, centered on the trade-off between long-term control/features and short-term speed/simplicity.

### 5.1 Recommendation 1: For Maximum Control & Features (Preferred)
**Adopt Stack A (WhisperX + Pyannote).**

This is the superior long-term choice. It is the only stack we've verified that provides true speaker **identification by name**, which we believe is a critical differentiator for our product. While the initial engineering lift is higher and the prompt limit requires a thoughtful UI, the result is a more powerful, cost-effective, and proprietary system. We own our core technology.

### 5.2 Recommendation 2: For Maximum Speed to Market
**Consider Stack B (AssemblyAI Only), but with a major prerequisite.**

This is the fastest path to a viable product. The large "Word Boost" limit is a significant quality-of-life advantage for our offline use case. However, this path is only viable *if* AssemblyAI provides a speaker identification feature comparable to Pyannote. If it only provides generic diarization, the user experience will be significantly degraded.

### 5.3 De-recommendation
**Avoid Stack C (Hybrid Commercial).** The cost and complexity of integrating two separate paid services for this core functionality are prohibitive. It represents the worst of both worlds.

### 5.4 Action Plan

1.  **DECIDE: What is our primary driver?**
    -   **Control & Best-in-Class Features?** -> Proceed with Stack A.
    -   **Speed to Market?** -> Proceed to Step 2.

2.  **VALIDATE: Investigate AssemblyAI's Voiceprint Capabilities.**
    -   This is the single most important technical due diligence step. We need a definitive "yes" or "no" on whether their API supports speaker enrollment and identification by name.

3.  **COMMIT:**
    -   If the decision is Stack A, our engineering team must scope the work required to integrate WhisperX and Pyannote and design the "Pre-Meeting Context" UI.
    -   If AssemblyAI *does* support voiceprints and we choose speed, we can move immediately to API integration. If it *does not*, Stack B is non-viable, and Stack A becomes the only logical choice.