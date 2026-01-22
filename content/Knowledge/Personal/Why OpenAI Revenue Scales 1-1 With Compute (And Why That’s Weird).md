---
publish: true
cssclasses: ""
---

### 💡 Why OpenAI Revenue Scales 1:1 With Compute

---

### 🔍 Context

I came across a tweet claiming that OpenAI’s revenue growth almost perfectly tracks its compute growth, and that despite hitting roughly $20B in annualized revenue, the company is still burning close to that amount every year.

At first glance, this feels nonsensical. In normal tech companies, revenue growth eventually outpaces costs. Here, that does not seem to be happening. This post is my attempt to understand why.

---

### 💰 Revenue vs. Profit: The Reality Check

OpenAI did **not** triple profits. They tripled **revenue**.

> [!note] Approximate 2025 Numbers
> Based on reporting and consensus estimates:
> - **Revenue:** ~$20B annualized
> - **Total Costs:** ~$35-40B
> - **Annual Burn:** ~$15-20B

This already tells us something important: revenue growth alone is not fixing the cost problem. OpenAI is burning roughly as much as it makes.

---

### 🏗️ Where the Money Actually Goes

OpenAI’s costs are overwhelmingly compute-related. Salaries, offices, and legal costs are almost rounding errors compared to GPUs.

| Category          | Estimated Cost % | Key Drivers                                      |
| :---------------- | :--------------- | :----------------------------------------------- |
| **Inference**     | 55-65%           | ChatGPT usage, API, Multimodal, Context windows  |
| **Training**      | 20-25%           | Frontier models (GPT-5), Large experimental runs |
| **Post-Training** | 5-10%            | RLHF, Safety, Red-teaming, Tool-use              |
| **Overhead**      | 10-15%           | Salaries, Offices, Sales, Legal                  |

#### 🖥️ Inference: The Biggest Bucket
Inference alone is likely costing over $20B per year. It is expensive because usage is massive and continuous, models are large, context windows are long, and low latency is expected.

#### 🧪 Training Frontier Models
This includes training GPT-4.x and GPT-5-class models. Training is not constant, but when it happens, it is an extremely expensive multi-billion-dollar event.

---

### ⚙️ Why More Compute Directly Creates More Revenue

This is the core insight: OpenAI is not selling software. OpenAI is selling **inference capacity**. Every time OpenAI adds GPUs, three things happen at once:

1. They can serve more users
2. They can serve more complex and longer queries
3. They can deploy better models that justify higher pricing

Revenue rises as a result, but every one of those queries has a real marginal cost. GPUs burn electricity, cooling costs money, and hardware depreciates. Revenue rises **with** cost.

> [!note]- Simple Version: The $10 User
> Imagine each user costs OpenAI $8 per month in GPU usage, and OpenAI charges $10 per month. Profit per user is $2.
> 
> - **If they run out of GPUs:** They cannot onboard more users. Revenue is capped.
> - **If they add GPUs:** Costs go up, they onboard more users, and revenue goes up almost proportionally.
> 
> Margins do not magically improve. This is what we are seeing today.

---

### ⚖️ Demand-Constrained vs. Supply-Constrained

OpenAI is currently **supply-constrained**. There is more demand than they can serve at the quality and latency level they want.

**The Evidence:**
- Rate limits and API throttling
- Temporary downgrades during peak usage
- Prioritization of enterprise customers
- Slow rollout of advanced features

---

### 🏢 The Infrastructure Model vs. Software Model

Most software companies work on the principle of "build once, sell infinitely," where marginal costs trend toward zero. OpenAI currently works differently: **every extra dollar of revenue requires more GPUs, power, and cooling.** This is why revenue growth does not automatically lead to profitability.

---

### 🌍 The Role of Sovereign Wealth Funds

Traditional VCs ask about margins and the path to profitability. Sovereign wealth funds (like those from Abu Dhabi) ask different questions:
- Who controls frontier compute?
- Who shapes the AI ecosystem?
- Who owns optionality if this becomes foundational infrastructure?

This is a **strategic bet**, not just a financial one.

---

### 🚀 The Path to Sustainable Profitability

For OpenAI to become sustainably profitable, **revenue must decouple from raw compute**. This requires several shifts:

#### 1. Inference Efficiency Improvements
Better kernels, quantization, distillation, and model routing. Efficiency gains lag demand, but they are happening.

#### 2. Product Mix Shift
Moving from "pay per token" toward value-based pricing for workflows and agents. When pricing is based on outcomes rather than compute, margins improve.

#### 3. Agents and Amortization
If an agent runs for hours to produce a high-value outcome, the inference cost becomes a small fraction of the total value delivered.

#### 4. Software-Like Lock-In
Embedding deeply into enterprise and developer workflows increases switching costs and improves pricing power.

---

### 🥊 OpenAI vs. Anthropic

Anthropic takes a different path:
- Grows more slowly and restricts access more tightly
- Prioritizes cost control and earlier margin discipline
- **Result:** Lower burn, but slower adoption and less ecosystem dominance.

OpenAI has chosen the opposite: maximum scale at any cost.

---

### 🎲 The Real Bet

> [!abstract] The Ultimate Goal
> The bet is that OpenAI becomes so embedded and foundational that once margins finally unlock, no competitor can realistically displace them. If that happens, the burn was a brilliant investment. If it does not, the burn never stops.

---

### 🏁 Final Takeaway

- OpenAI makes real money, but spends even more.
- Most costs are **inference**, not training.
- Revenue scales with compute because they sell machine time.
- Profitability requires revenue to **decouple** from compute.

This is not a normal tech story; it is an infrastructure race, and the outcome is still genuinely uncertain.