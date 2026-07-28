<div align="center">

# 🐤 Tunnel Flap

### A Flappy Bird-inspired browser game engineered from scratch with Vanilla JavaScript

*No game engines. No frameworks. Just a custom-built rendering engine, object pooling, real-time physics, and a whole lot of debugging.*

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](#)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](#)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](#)

**[LIVE DEMO](URL)** · **Report Bug** · **Request Feature**

</div>

---

## 🎮 Preview

<div align="center">

*(Add Gameplay GIF here)*

| Start Screen | Gameplay | Game Over |
|:---:|:---:|:---:|
| ![](./screenshots/Screenshot%202026-07-26%20163054.png) | ![](./screenshots/Screenshot%202026-07-26%20163440.png) | *![](./screenshots/Screenshot%202026-07-26%20163525.png)* |

</div>

---

## 📖 Table of Contents

- [Overview](#-overview)
- [Why This Project Exists](#-why-i-built-this)
- [Tech Stack](#-tech-stack)
- [Features](#-features)
- [Engineering Deep Dive](#-engineering-deep-dive)
- [Architecture](#-architecture)
- [Challenges & Solutions](#-challenges--solutions)
- [Development Journey](#-development-journey)
- [Skills Demonstrated](#-skills-demonstrated)
- [Roadmap](#-roadmap)
- [Key Takeaways](#-key-takeaways)
- [Author](#-author)
- [License](#-license)

---

## 🕹️ Overview

**Tunnel Flap** is a desktop browser game inspired by the classic *Flappy Bird* — but the goal was never to just clone it. It was built to answer a harder question: **how do real-time browser games actually work under the hood?**

Instead of reaching for Phaser or Unity, every system — gravity simulation, collision detection, procedural pipe generation, scoring, and rendering — was engineered manually using pure **HTML5**, **CSS3**, and **Vanilla JavaScript**.

This is a hand-built JavaScript DOM game project, ideal reference for anyone exploring **vanilla JS game development**, **DOM-based rendering engines**, or **object pooling in JavaScript**.

---

## 💡 Why I Built This

After finishing my first JavaScript DOM project, I wanted something that would push me to **think like a software engineer**, not just manipulate HTML elements.

**Goals:**

- 🎯 Learn animation architecture
- 🎯 Understand browser rendering internals
- 🎯 Sharpen JavaScript problem-solving
- 🎯 Practice object-oriented thinking without ES6 classes
- 🎯 Build an optimized rendering system
- 🎯 Strengthen debugging instincts
- 🎯 Experience a full project lifecycle — design → build → deploy

---

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| **HTML5** | Semantic structure |
| **CSS3** | Pixel-art UI & layout system |
| **Vanilla JavaScript** | Entire game logic & engine |
| **Local Storage API** | High score persistence |
| **DOM Manipulation** | Custom rendering engine |
| **Object Pooling** | Memory & performance optimization |

> ⚡ Zero external frameworks. Zero game engines. 100% hand-built.

---

## ✨ Features

- 🌍 Realistic gravity simulation
- 🐦 Responsive bird jump physics
- 🎲 Randomized, procedural pipe generation
- ♻️ Infinite pipe recycling via object pooling
- 💥 Precise collision detection
- 🔢 Live score counter
- 🏆 Persistent high scores (Local Storage)
- 🔊 Sound effects
- 💀 Game over screen with retry flow
- 🏠 Home navigation

---

## 🧠 Engineering Deep Dive

### DOM Manipulation
Every pipe is generated dynamically at runtime rather than hardcoded in HTML.

**Concepts applied:** `createElement()` · `append()` · `querySelector()` · dynamic styling · real-time rendering

### Browser Animation
Started with `setInterval()`-driven timing, then evolved toward a **centralized Game Loop** architecture for smoother, more predictable animation.

### Physics Simulation
A simplified physics model drives bird movement:

```
Gravity → Bird Position += Gravity
Jump    → Bird Position -= Jump Force
```

This built a real understanding of continuous motion simulation in a 2D coordinate system.

### Collision Detection
Built entirely from scratch, split into two independent checks:

- **Horizontal Collision** — does the pipe reach the bird's x-position?
- **Vertical Collision** — does the bird overlap the upper or lower tunnel?

A collision only registers when **both** conditions are true simultaneously.

### Procedural Generation
Every recycled pipe is regenerated with a new tunnel height, bottom height, and obstacle spacing — producing endless, non-repetitive gameplay.

### Object Pooling Architecture
The single biggest performance win in the project.

**❌ Naive approach:** `Create → Move → Delete → Create Again`
Causes continuous DOM allocation, frequent garbage collection, and performance degradation.

**✅ Final approach:** Generate a fixed pool of pipes once. Instead of destroying them, **move, randomize, and reposition** them to the end of the sequence.

Result: **zero new DOM nodes created during gameplay.**

---

## 🏗️ Architecture

**JavaScript Module Flow**

```
DOM Elements → Game Variables → Game Audio → Game Initialization
     → Bird Functions → Pipe Functions → Score Functions
     → Game Over Functions → Event Listeners
```

**CSS Structure**

```
Global Reset → CSS Variables → Global Components → Start Screen
     → Gameplay Screen → Pipe Components → Game Over Screen
```

The codebase evolved from a single monolithic script into a modular structure, applying **Single Responsibility Principle**, reusable helper functions, constant extraction, and consistent naming conventions.

---

## 🧩 Challenges & Solutions

| # | Challenge | Solution |
|---|---|---|
| 1 | Creating new DOM elements every few seconds tanked performance | Implemented full object pooling |
| 2 | Random pipe heights produced negative values | Derived proper math constraints from screen height, min pipe height, and gap |
| 3 | Recycled pipes stacked on top of each other | Calculated the rightmost pipe and repositioned recycled ones after it |
| 4 | Visual collisions didn't match calculated collisions | Fixed inconsistent CSS image sizing vs. element dimensions |
| 5 | Score counted the same pipe multiple times | Added an `isScore` flag that resets only on recycle |
| 6 | Multiple independent intervals hurt performance | Refactored into a centralized Game Loop with modular update functions |

---

## 🚀 Development Journey

This project was built **incrementally and intentionally** — not copied from a tutorial.

1. UI Design
2. Bird Movement
3. Pipe Rendering
4. Infinite Scrolling
5. Collision Detection
6. Score System
7. Sound Effects
8. High Score Storage
9. Refactoring
10. Performance Optimization

Each phase was fully completed and tested before moving to the next — a deliberate practice in disciplined, incremental software development.

**On using AI:** AI was used as a mentor, not a code generator — features were built and debugged independently first, with conceptual questions asked only when genuinely stuck, followed by refactoring once the implementation was fully understood.

---

## 📚 Skills Demonstrated

<table>
<tr>
<td valign="top" width="25%">

**JavaScript**
- DOM Manipulation
- Event Handling
- Timers
- Local Storage
- Dynamic Rendering
- Modular Functions
- State Management

</td>
<td valign="top" width="25%">

**Problem Solving**
- Debugging
- Mathematical Thinking
- Coordinate Systems
- Collision Logic
- Procedural Generation

</td>
<td valign="top" width="25%">

**Software Engineering**
- Refactoring
- Object Pooling
- Code Organization
- Naming Conventions
- Maintainability
- Scalability

</td>
<td valign="top" width="25%">

**Frontend**
- Pixel-Perfect UI
- CSS Components
- Responsive Layout
- Asset Integration
- Animation

</td>
</tr>
</table>

---

## 🗺️ Roadmap

- [ ] Migrate to `requestAnimationFrame` game loop
- [ ] Delta-time based physics
- [ ] Mobile & touch support
- [ ] Difficulty progression system
- [ ] Pause menu
- [ ] Settings menu
- [ ] Sprite-based animation
- [ ] Particle effects
- [ ] Improved sound management
- [ ] Modular game engine abstraction
- [ ] ES Modules
- [ ] Vite migration
- [ ] TypeScript support

---

## 🎯 Key Takeaways

This project reshaped how I think about browser development. JavaScript stopped being "a scripting language" and became a tool for building **complete real-time interactive systems**.

Core lessons reinforced:

- Real-time rendering pipelines
- Browser performance optimization
- Software architecture & modular design
- Systematic debugging methodology
- Incremental, phase-based development
- Engineering trade-offs in practice

---

## 👨‍💻 About me

**Raj Shah**
Frontend Developer focused on building performant, scalable, and well-architected web applications with modern JavaScript.

[![GitHub](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/rajshahdev966)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/rajshah-dev/)

---

<div align="center">

**⭐ If you found this project interesting, consider giving it a star!**

*Keywords: Flappy Bird clone, Vanilla JavaScript game, JavaScript DOM game, object pooling JavaScript, browser game development, HTML CSS JS game, custom game engine JavaScript*

</div>