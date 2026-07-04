# Forge70 Labs Coding Standards

This document defines the engineering principles used throughout Forge70 Labs.

These standards exist to promote clarity, maintainability, and long-term quality over short-term convenience.

---

# Purpose

These standards guide the development of all Forge70 Labs software.

They are intended to encourage thoughtful engineering decisions, maintainable code, consistent user experiences, and continuous improvement.

These standards should evolve as the company grows.

---

# Core Principles

## 1. Clarity over cleverness

Code should be easy to understand.

Prefer readable solutions over overly clever implementations.

Future maintainers—including your future self—should be able to understand the code quickly.

---

## 2. Safety, security, and quality matter

Quality is never optional.

We build software that prioritizes reliability, security, safety, and correctness.

We protect our customers' data.

We protect our partners' data.

We protect our codebase.

We follow industry-standard engineering and secure development practices.

And we never, ever divide by zero.

---

## 3. Build reusable components

Avoid duplication.

If code or UI is repeated, consider creating a reusable component or function.

---

## 4. Eliminate magic numbers

Meaningful constants should be named.

Examples include:

- Colors
- Font sizes
- Layout dimensions
- Animation durations
- API endpoints
- Timeouts

---

## 5. Favor simplicity

The simplest solution that correctly solves the problem is usually the best solution.

Do not add complexity until it provides clear value.

---

## 6. Keep components focused

Each component should have a single responsibility.

Large components should be broken into smaller reusable pieces.

---

## 7. Performance matters

Fast software creates a better user experience.

Avoid unnecessary work, unnecessary downloads, and unnecessary dependencies.

---

## 8. Accessibility is a feature

Applications should be usable by everyone.

Use semantic HTML.

Support keyboard navigation.

Consider screen readers during development.

---

## 9. Consistency matters

Use consistent naming, formatting, spacing, and project organization.

Consistency improves readability more than personal preference.

---

## 10. Learn continuously

Every project should improve both the software and the engineer who built it.

Be willing to refactor when a better design becomes clear.

---

## 11. Build with pride

Every release represents Forge70 Labs.

Ship work that reflects the level of quality you would expect from others.

---

## 12. Style guide

Follow the conventions of the language or framework unless Forge70 Labs has an established standard.

---

# Engineering Review Checklist

Before merging code, ask:
- Is it readable?
- Is it secure?
- Is it tested?
- Is it documented?
- Is it maintainable?
- Does it follow the coding standards?
- Would I be proud to put my name on it?

The above is the "definition of done".

---

Version 1.0

Established July 2026