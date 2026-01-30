---
publish: true
cssclasses: ""
---

## 🧠 Core Concept: The Hybrid Era

We are currently seeing a crossover between **Text Models ([[LLMs]])** and **Video/World Generators**. The lines are blurring with models like **Sora** (OpenAI) and **Genie** (DeepMind).

### The Architecture Breakdown
* **[[Diffusion Models]] 🌫️:** Create data by learning to reverse noise.
* **[[Transformers]] 📚:** Process sequential data (tokens) to predict "what comes next."
* **The Hybrid (Sora):** Uses a **Diffusion Transformer**. It uses the "brain" of a Transformer to perform the "task" of Diffusion.

---

## 1. The Mechanics: How Diffusion Works
*The "Noise and Unravel" Strategy*

Diffusion models do not "know" the image in advance. They master the art of **Denoising**.

> [!EXAMPLE] The Knot Analogy
> Imagine learning to untie a knot. If you watch someone tie a knot a million times, you eventually learn the reverse motion to untie it.
>
> 1.  **Forward Process (Training):** Slowly add Gaussian noise to an image until it is pure static.
> 2.  **Reverse Process (Generation):** Start with random static and reverse the steps to "find" the image.

### The Inference Process
When we prompt a model like Sora 2:
1.  It starts with **Pure Random Noise** (Chaos).
2.  **Conditioning:** The text prompt acts as a compass.
3.  **Iterative Refinement:** It predicts the noise pattern and subtracts it, step-by-step (20–50 times).

---

## 2. Why Diffusion? (vs. Older Models)

Why did we switch from [[GANs]] to Diffusion?

* **Stability:** GANs try to generate the result in one "explosive" step (high failure rate). Diffusion takes many small, stable steps.
* **The Trade-off:** Quality vs. Compute. Diffusion creates higher quality results but is computationally heavier because it requires multiple passes (steps) per frame.

---

## 3. The "World Model" Debate 🌍

Do these models understand physics?

* **The Claim:** Models like **Genie 3** are "World Models" because they simulate environments, seemingly understanding gravity, collision, and object permanence.
* **The Skepticism:** Are they simulating physics, or just hallucinating pixels that *look* like physics? Current consensus leans toward them being excellent mimics of causal patterns, but not having an internal physics engine in the traditional sense.

---

## 🔗 Related Notes
- [[Artificial Intelligence History]]
- [[Neural Network Architectures]]
- [[Thermodynamics in AI]]