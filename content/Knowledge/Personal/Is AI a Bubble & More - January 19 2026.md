---
publish: true
cssclasses: ""
---

_This is a thinking-out-loud document. A snapshot of where my head is at after a long conversation with Ibad about AI. Written for future-me, not to convince anyone._

---

## The Question I Keep Circling

Is AI in a bubble?

My current answer: **yes and no**.

- Yes, there is probably a **financial bubble**.
    
- Yes, there is likely an **infrastructure bubble**.
    
- But no, the **technology itself does not feel like a bubble**.
    

That distinction feels important.

---

## The 1997–2000 Internet Analogy (Not Dot-Com, Exactly)

The analogy that keeps making sense to me is not _"the dot-com bubble"_ as a punchline, but the **1997–2000 internet buildout phase**.

A few similarities:

1. **Infrastructure is being overbuilt**  
    Data centers, GPUs, power contracts, cooling, networking. The supply curve is racing ahead of near-term demand.
    
2. **Many companies will die**  
    Startups built on thin wrappers, undifferentiated SaaS, or speculative use cases probably won’t survive. This feels inevitable.
    
3. **The winners will justify the excess**  
    Just like Amazon, Google, and the modern web justified absurd 90s spending, a small number of AI winners will make the whole era look obvious in hindsight.
    

History is written by the winners. The wasted capital becomes invisible once a few companies reshape everything.

So yes, there will be pain. But that does not mean the core technology is fake or temporary.

---

## What Feels Fundamentally Different From a “Bubble”

Bubbles usually involve:

- Weak or imaginary demand
    
- No clear path to utility
    
- Speculation detached from reality
    

AI doesn’t fit that cleanly.

We already have:

- Real productivity gains
    
- Real enterprise adoption
    
- Real consumer dependency
    
- Real revenue at inference time
    

Which brings me to something important.

---

## Inference vs Research Economics

One realization that clicked for me recently:

- **Inference is becoming profitable**
    
- **Research is still brutally unprofitable**
    

Running models for users can make money.

Training frontier models, doing long-horizon research, and pushing capabilities forward is where the burn still happens.

This creates a strange tension:

- Public-facing products look healthy
    
- Underlying research economics are still subsidized by massive capital
    

That doesn’t mean it’s unsustainable forever. It means we’re early.

---

## Scaling Isn’t the Only Lever (And Never Was)

A lot of casual discourse says something like:

> “Scaling has diminishing returns. AI will plateau.”

That feels incomplete.

Yes, raw compute scaling is not infinite. But the last few years weren’t driven by scale alone.

Things that mattered just as much:

- Transformers and attention
    
- Better training data curation
    
- Reinforcement learning
    
- Post-training techniques
    
- Tool use and scaffolding
    
- Memory and retrieval
    
- Architecture-level improvements
    

Compute is a constraint, not the sole driver.

---

## Trying to Organize the Training Stack (For Myself)

I’m still learning this, but here’s how I currently understand it:

### Pre-training

- Massive unsupervised or weakly supervised training
    
- Learn general language, reasoning, patterns
    
- Extremely expensive
    

### Post-training

- Reinforcement learning
    
- Human feedback
    
- Synthetic feedback
    
- Preference optimization
    
- Safety tuning
    
- Behavior shaping
    

This is where a lot of recent gains come from.

When I hear terms like:

- RL
    
- harnesses
    
- evaluators
    
- curriculum shaping
    

I mentally bucket most of that under post-training.

---

## Continual Learning and “Not Freezing the Brain”

One area I don’t fully grok yet but find important:

- **Continual learning**
    

The idea that models shouldn’t be static artifacts that require full retrains to improve.

If this works at scale, it changes the economics and the plateau narrative entirely.

I don’t understand it deeply yet, but it feels like one of those quiet shifts that matters more than people realize.

---

## The Water and Energy Panic

Another thing I keep seeing:

> “AI is burning insane amounts of water and energy.”

My current take:

- There **are local issues** (for example, water usage near specific data centers)
    
- These are **infrastructure and governance problems**, not existential global ones
    
- The framing often ignores relative scale
    

This feels similar to early cloud panic.

Also important:

- Cooling tech is evolving
    
- Waterless and closed-loop systems are improving
    
- Efficiency gains compound over time
    

The conversation often feels emotionally charged but technically shallow.

---

## SaaS Pricing Was a Wake-Up Call

This part surprised me.

I learned that many SaaS subscriptions are effectively **subsidy systems**.

- Power users extract far more value than they pay for
    
- Casual users barely use the product
    
- The average makes the pricing work
    

A $20 plan might:

- Cost $100 for a heavy user
    
- Cost $1 for a light user
    

AI pricing inherits all of this complexity and adds compute variability on top.

It made me realize how naive a lot of pricing discourse is.

---

## China, Compute, and the Frontier Question

A lot of people assume China will inevitably catch up.

My current understanding (as of early 2026):

- China produces a massive share of AI research
    
- But frontier progress is constrained by access to cutting-edge compute
    
- Export controls matter more at the frontier than at the application layer
    

The claim I’ve seen from multiple industry voices is not:

> “China can’t catch up.”

But rather:

> “China may remain consistently behind the frontier by months, possibly years.”

That gap could shrink or widen. Hard to predict.

But frontier AI increasingly looks like a **compute-constrained game**, not just a talent one.

---

## So… Is AI a Bubble?

Here’s where I land, for now:

- **Capital allocation is bubbly**
    
- **Infrastructure investment may overshoot demand**
    
- **Many companies will fail**
    

But:

- The technology is real
    
- The utility is real
    
- The trajectory is real
    

Just like the internet.

The mistake is thinking bubbles invalidate technologies.

They don’t.

They just decide who survives.

---

## What I Mean by “Reasoning” (In Simple Terms)

When people argue about whether LLMs can “reason,” they often talk past each other.

Here’s the simplest way I understand it.

Reasoning is the ability to:

- Hold multiple pieces of information at once
    
- See how they relate
    
- Choose a next step that makes future steps easier or possible
    

A useful analogy:

Reasoning is like **planning a route**, not just taking the next step.

If you’re navigating a city:

- Pattern matching is recognizing familiar streets
    
- Reasoning is choosing a path that avoids traffic and gets you closer to your goal
    

LLMs don’t reason the way humans do, but to predict the next token in:

- A math proof
    
- A program
    
- A multi-step explanation
    

…the model has to internally simulate something like this planning process.

It’s not conscious. It’s not symbolic logic in the classical sense. But it is **structured, multi-step decision-making**, which is close enough to earn the word “reasoning” in practice.

---

## Why “Just Predicting the Next Token” Is Misleading

You’ll often hear:

> “LLMs are just predicting the next word.”

This is technically true, but not very useful.

It’s like saying:

- Cars just burn fuel
    
- Planes just push air downward
    
- Humans just fire neurons
    

All correct. All missing the point.

Next-token prediction is the training rule. It is not the ceiling on what the system becomes.

---

## AI as a Discovery, Not an Invention

Another idea that feels important to me:

LLMs don’t feel like a clean human invention in the usual sense. They feel more like a discovery.

We designed:

- The architecture
    
- The training objective
    
- The infrastructure
    

But we did not explicitly design:

- The internal representations
    
- The abstractions
    
- The reasoning pathways
    

Those emerged.

---

## Things to Revisit Later (Open Questions)

These are areas I suspect will matter more over time, even if they’re under-discussed right now.

### Data Scarcity and Synthetic Feedback Loops

As models consume more of the internet and increasingly train on AI-generated data, the quality, diversity, and grounding of data become first-order problems.

### Evaluation Collapse

It’s becoming harder to tell how much better models actually are.

### Organizational Bottlenecks

Progress may be gated by coordination, safety processes, and deployment friction, not just raw capability.

### Deployment as the Real Moat

Deploying models well may matter more than training them.

---

## Why “Just Predicting the Next Token” Is Misleading

You’ll often hear:

> “LLMs are just predicting the next word.”

This is **technically true**, but it’s not very useful.

It’s like saying:

- Cars _just_ burn fuel
    
- Planes _just_ push air downward
    
- Humans _just_ fire neurons
    

All of those statements are correct, and all of them miss the point.

### What’s Actually Going On

Yes, during training, the model learns by predicting the next token.

But to do that well across:

- Code
    
- Math
    
- Instructions
    
- Conversations
    
- Long explanations
    

…the model has to learn deeper structure about how the world works.

To predict the next step in a math proof, you need something that looks a lot like reasoning.  
To predict the next line in a program, you need something that looks a lot like planning.

So while **next-token prediction is the training rule**, it is not the limit of what the system becomes.

A simpler way to say it:

> Next-token prediction is the _exercise_. Reasoning is the _muscle_ that forms.

---

## AI as a Discovery, Not an Invention

Another idea that feels important to me:

LLMs don’t feel like a clean human invention in the usual sense. They feel more like a **discovery**.

We designed:

- The architecture
    
- The training objective
    
- The infrastructure
    

But we did _not_ explicitly design:

- The internal representations
    
- The reasoning pathways
    
- The abstractions the model uses
    

Those emerged.

### The “Trillions of Weights” Problem

Modern models have trillions of parameters. We know:

- How to train them
    
- How to run them
    
- How to measure outputs
    

But we do **not** fully understand what each part is doing internally.

In that sense, using an LLM is less like using a traditional program and more like:

- Growing a brain
    
- Training an ecosystem
    
- Discovering a strange machine that works
    

We shape it, but we don’t micromanage it.

### A Helpful Analogy

It’s similar to how evolution works:

- Evolution doesn’t _design_ wings
    
- It selects for survival
    
- Wings emerge as a solution
    

Likewise:

- We don’t design reasoning
    
- We optimize for prediction
    
- Reasoning emerges as a solution
    

That’s why interpretability is hard. We didn’t write the code line by line. We _found_ it.

This doesn’t mean LLMs are magical or unknowable forever.

It means we’re closer to **discovering a natural phenomenon** than assembling a traditional machine.

---

## Predictions (Written January 2026)

_End note to future me:_  
If this reads naive in five years, good. That probably means something even bigger happened.