---
{"publish":true,"cssclasses":""}
---

*Summary of research into how giant AI models (Teachers) train efficient "Flash" or "Distill" models (Students).*

---
## 1. The Core Concept: It's Not Just One Method
Contrary to popular belief, there isn't just one way to distill a model. There are two distinct methods currently in use.

### Method A: The "Textbook" Method (Supervised Fine-Tuning)
*Used by: Open-source community (DeepSeek-R1-Distill, Alpaca).*
* **Analogy:** The Student reads a textbook written by the Professor.
* **The Process:** The Teacher generates questions and answers. The Student reads them and learns to mimic the output.
* **Limitation:** The Student sees the final answer, but not the "intuition" behind it. It’s a "Black Box" transfer.

### Method B: The "Telepathy" Method (Logit-based Distillation)
*Used by: Google (Gemini Flash), OpenAI (GPT-4o mini).*
* **Analogy:** Plugging the Professor's brain directly into the Student's.
* **The "Dark Room" Explanation:**
    * **Textbook Method:** The Teacher points to a picture and says "This is a Dog." The Student learns 100% Dog.
    * **Telepathy Method:** The Teacher shares its internal probabilities (logits): *"I am 90% sure this is a Dog, 9% sure it's a Wolf, and 1% sure it's a Cat."*
* **The Gain:** The Student learns the **relationships** between concepts (Dogs are like Wolves, not like Cars) and absorbs the Teacher's uncertainty.
  
![[image-3.png]]
---

## 2. How the Training Data is Created (The "Curriculum")
It is no longer just "a static list of a million prompts." The process has evolved into **Active Coaching**
### Phase 1: Synthetic Expansion
The Teacher isn't just answering; it is *creating* the test.
* **Human Seed:** We start with 50k hard math problems.
* **Teacher Mutation:** The Teacher (Pro model) is asked: *"Take this problem and generate 100 harder variations involving calculus and physics."*
* **Result:** A massive dataset of synthetic, high-complexity problems.

### Phase 2: On-Policy Distillation (The Feedback Loop)
1.  **The Student Tries:** The baby model attempts to solve a problem.
2.  **The Teacher Critiques:** The Pro model watches the Student's draft in real-time.
3.  **The Adjustment:** The system calculates the difference between the Student's "brainwaves" and the Teacher's, forcing the Student to align its neural weights instantly.

---
## 3. Quality vs. Quantity: The Numbers
* **How much data?** Surprisingly little.
    * **DeepSeek-R1-Distill:** Used approx **800,000** reasoning samples.
    * **Gemini Flash:** Likely 1–5 million high-quality instructions.
    * *Note:* The Student has already "read the internet" (Pre-training). Distillation is just the "Master's Degree" in logic.

### Dealing with Hallucinations (Rejection Sampling)
If the Teacher is crazy, the Student becomes crazy. To fix this, they use **Best-of-N Rejection Sampling**.
1.  **The Quiz:** Teacher attempts a problem.
2.  **Multi-Draft:** Teacher generates **64 different answers**.
3.  **The Judge:**
    * *Code:* A compiler checks if the code runs.
    * *Prose:* An **"LLM-as-a-Judge"** (the Teacher itself) or a **Reward Model** (trained on human vibes) grades the drafts.
4.  **The Filter:** Only the single best answer (e.g., Draft #42) is shown to the Student. The hallucinations are deleted.

---
## 4. The Secret Sauce: "Thinking Traces"
In 2025, models don't just learn the answer; they learn the **Internal Monologue**.

**The Data Look:**
The Student is trained on JSON data that explicitly includes the Teacher's "silent thoughts" (often wrapped in `<think>` tags).

```json
{
  "User_Prompt": "I have 3 apples. Ate one. Bought two. How many?",
  "Teacher_Output": "<think>
  Step 1: Initial state = 3.
  Step 2: 'Ate one' -> 3 - 1 = 2.
  Step 3: 'Bought two' -> 2 + 2 = 4.
  Check for edge cases: Did I eat the apples before or after buying?
  </think>
  Answer: 4"
}
```

**Why this matters:** The Student learns _how to pause and plan_ before speaking.

---

## 5. Stopping the "Infinite Loop"

How do we stop a model from thinking forever?

1. **The Smart Way (Stop Tokens):** The model is trained that `</think>` is a word just like any other. It statistically learns that after solving the problem, the most likely next word is "Stop Thinking."
    
2. **The Forceful Way (Repetition Penalty):** If the model repeats "Step 1... Step 1...", the engine bans those words, forcing it to move on.
    
3. **The Dumb Way:** Hard token limits (e.g., cutting it off at 4096 tokens). This is the last resort.