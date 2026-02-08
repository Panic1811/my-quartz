---
publish: true
tags:
  - General
cssclasses: ""
---

### Cron
- A software utility that allows users to schedule jobs (commands or shell scripts) to run periodically at fixed times, dates, or intervals.
- "Command Run On Notice"
- It is primarily used for system administrative tasks such as backups, log cleaning, or system maintenance.

> [!Note]- Simple Version
> Think of it as a digital "to-do list" with a built-in alarm clock. You tell the computer what task to perform and exactly when to do it, and the computer handles it automatically without you needing to be there.

> [!example]
> The developer set up a *cron* job to automatically back up the website's database every day at 3:00 AM.
> > [!Abstract]- Real World
> > > Web servers often use cron to send out automated email newsletters to subscribers at a specific time each week or to clear out temporary files that take up unnecessary disk space.

#### **Synonyms**
- Similar: Task scheduler, job runner, automation utility, time-based scheduler, crontab

#### **Etymology**
- The name originates from the Greek word "Chronos" (Χρόνος), which means time. It was originally developed by Ken Thompson for the Unix operating system at Bell Labs.

#### **Frequently Asked Questions**

> [!faq]- What is a crontab?
> A crontab (short for "cron table") is a configuration file that contains the list of commands scheduled to run at specific times for a particular user.

> [!faq]- What happens if the computer is powered off during a scheduled cron job?
> If the system is powered off or asleep when a job is scheduled to run, the job is typically skipped and will not execute until its next scheduled interval.

> [!faq]- What is the minimum time interval for a standard cron job?
> The standard cron utility has a minimum granularity of one minute, meaning it cannot natively schedule tasks to run every few seconds.

[CRON](https://en.wikipedia.org/wiki/Cron)