---
{"publish":true,"PassFrontmatter":true}
---

# Federal Spending Overview (2023)

Understanding federal spending requires breaking it into three main categories: **discretionary spending**, **mandatory spending**, and **interest on the debt**. Below is a detailed look at these components for 2023, along with visualizations using the Chartsview plugin.

![Federal Spending (2023)-20241130184736237.png|495](../../Images/Federal%20Spending%20(2023)-20241130184736237.png)

---

## 1. Discretionary Spending

**Definition**: Spending approved annually by Congress to fund various programs and activities.

**2023 Data:
  - **Total**: $1.7 trillion
  - **Defense**: $850 billion
  - **Non-Defense**: $950 billion 

```chartsview
#-----------------#
#- chart type    -#
#-----------------#
type: Pie

#-----------------#
#- chart data    -#
#-----------------#
data:
  - type: "Defense"
    value: 850
  - type: "Non-Defense"
    value: 950

#-----------------#
#- chart options -#
#-----------------#
options:
  angleField: "value"
  colorField: "type"
  radius: 0.5
  label:
    type: "spider"
    content: "{percentage}\n{name}"
  legend:
    layout: "horizontal"
    position: "bottom"
```
## 2. Mandatory Spending

**Definition**: Spending mandated by law, primarily for entitlement programs.

**2023 Data**:
- **Total**: $3.8 trillion
    - **Social Security**: $1.3 trillion
    - **Medicare**: $850 billion
    - **Other Programs**: $1.65 trillion
```chartsview
#-----------------#
#- chart type    -#
#-----------------#
type: Pie

#-----------------#
#- chart data    -#
#-----------------#
data:
  - type: "Social Security"
    value: 1300
  - type: "Medicare"
    value: 850
  - type: "Other Programs"
    value: 1650

#-----------------#
#- chart options -#
#-----------------#
options:
  angleField: "value"
  colorField: "type"
  radius: 0.5
  label:
    type: "spider"
    content: "{percentage}\n{name}"
  legend:
    layout: "horizontal"
    position: "bottom"

```


## 3. Interest on the Debt

- **Definition**: Payments to service the national debt.
- **2023 Data**:
    - **Net Interest**: $659 billion

## 4. Total Federal Outlays and Revenues

- **2023 Data**:
    - **Total Outlays**: $6.1 trillion
    - **Total Revenues**: $4.4 trillion
        - **Individual Income Taxes**: $2.2 trillion
        - **Payroll Taxes**: $1.5 trillion
        - **Corporate Income Taxes**: $0.4 trillion
        - **Other Revenues**: $0.3 trillion
    - **Deficit**: $1.7 trillion (Outlays exceed Revenues)

```chartsview
#-----------------#
#- chart type    -#
#-----------------#
type: Bar

#-----------------#
#- chart data    -#
#-----------------#
data:
  - action: "Total Outlays"
    value: 6100
  - action: "Total Revenues"
    value: 4400
  - action: "Deficit"
    value: 1700

#-----------------#
#- chart options -#
#-----------------#
options:
  xField: "value"
  yField: "action"
  conversionTag: {}

```


## Summary Table

| **Category**              | **Amount (Billion USD)** |
| ------------------------- | -----------------------: |
| Discretionary Spending    |                    1,700 |
| Mandatory Spending        |                    3,800 |
| Interest on the Debt      |                      659 |
| **Total Federal Outlays** |                **6,100** |
| **Total Revenues**        |                **4,400** |
| **Deficit**               |                **1,700** |
## Key Insights

1. **Defense vs. Non-Defense**: Defense spending makes up half of discretionary spending.
2. **Entitlements**: Social Security and Medicare dominate mandatory spending.
3. **Interest Payments**: Rising interest payments are a growing concern as debt levels increase.
4. **Revenue Sources**: Individual and payroll taxes account for the majority of federal revenue.


## External References

- [Discretionary Spending (CBO)](https://www.cbo.gov/publication/59729#:~:text=Discretionary%20outlays%20by%20the%20federal,than%20half%20of%20that%20total.)
- [Mandatory Spending (CBO)](https://www.cbo.gov/publication/59728)
- [Interest on Debt (CBO)](https://www.cbo.gov/publication/59727)