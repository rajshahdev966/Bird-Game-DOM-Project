<div align="center">

```
 ████████╗██╗   ██╗███╗   ██╗███╗   ██╗███████╗██╗         ███████╗██╗      █████╗ ██████╗
 ╚══██╔══╝██║   ██║████╗  ██║████╗  ██║██╔════╝██║         ██╔════╝██║     ██╔══██╗██╔══██╗
    ██║   ██║   ██║██╔██╗ ██║██╔██╗ ██║█████╗  ██║         █████╗  ██║     ███████║██████╔╝
    ██║   ██║   ██║██║╚██╗██║██║╚██╗██║██╔══╝  ██║         ██╔══╝  ██║     ██╔══██║██╔═══╝
    ██║   ╚██████╔╝██║ ╚████║██║ ╚████║███████╗███████╗    ██║     ███████╗██║  ██║██║
    ╚═╝    ╚═════╝ ╚═╝  ╚═══╝╚═╝  ╚═══╝╚══════╝╚══════╝    ╚═╝     ╚══════╝╚═╝  ╚═╝╚═╝
 
                    ┌────────────────────────────────────┐
                    │   🐦  BUILT WITH ZERO FRAMEWORKS  🐦  │
                    └────────────────────────────────────┘
```

### 🐦 A retro pixel-art Flappy Bird, reverse-engineered from first principles.
**No Canvas. No Phaser. No React. No shortcuts.** Just raw DOM, CSS, and Vanilla JavaScript — built as a systems-engineering exercise, not a tutorial clone.

<br>

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](#)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](#)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](#)
[![Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)](#)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg?style=for-the-badge)](#-license)

[![No Frameworks](https://img.shields.io/badge/Frameworks-ZERO-red?style=flat-square)](#)
[![No Game Engine](https://img.shields.io/badge/Game%20Engine-ZERO-red?style=flat-square)](#)
[![DOM Powered](https://img.shields.io/badge/Rendering-Pure%20DOM-brightgreen?style=flat-square)](#)
[![Object Pooling](https://img.shields.io/badge/Architecture-Object%20Pooled-blueviolet?style=flat-square)](#)

**[▶ Live Demo](https://tunnelflagdomgame.vercel.app/)** &nbsp;·&nbsp; **[🐛 Report Bug](https://www.linkedin.com/in/rajshah-dev/)** &nbsp;·&nbsp; **[💡 Request Feature](https://www.linkedin.com/in/rajshah-dev/)**

</div>

<br>

<div align="center">

### 🎬 Preview

| Start Screen | Gameplay | Game Over |
|:---:|:---:|:---:|
| *![](./screenshots/Screenshot%202026-07-26%20163054.png)* | *![](./screenshots/Screenshot%202026-07-26%20163440.png)* | *![](./screenshots/Screenshot%202026-07-26%20163525.png)* |

</div>

<br>

---

## 📇 Table of Contents

<table>
<tr>
<td width="33%" valign="top">

**Overview**
- [What is Tunnel Flap?](#-what-is-tunnel-flap)
- [Why I Built This](#-why-i-built-this)
- [Tech Stack](#️-tech-stack)
- [Core Features](#-core-features)

</td>
<td width="33%" valign="top">

**Engineering**
- [The Physics Engine](#-the-physics-engine)
- [Object Pooling](#-object-pooling-architecture)
- [Collision System](#-collision-detection)
- [Game Architecture](#-game-architecture)
- [Folder Structure](#-folder-structure)

</td>
<td width="33%" valign="top">

**The Journey**
- [Build Phases](#-the-9-phase-build-journey)
- [Problems & Fixes](#-major-problems--how-i-solved-them)
- [Skills Gained](#-skills-gained)
- [Roadmap](#-development-roadmap)
- [Author](#-author)

</td>
</tr>
</table>

---

## 🎯 What is Tunnel Flap?

> Tunnel Flap is **not** "just a Flappy Bird clone."

It's a self-imposed systems-engineering challenge: build a real-time, physics-driven, infinitely-scrolling browser game **without** the safety net of a game engine, a rendering library, or a frontend framework.

Every single moving part — gravity, jump physics, tunnel generation, collision math, score state, audio playback, screen transitions — was written by hand, debugged by hand, and refactored by hand using pure **DOM manipulation**.

<div align="center">

| Constraint | Why It Matters |
|---|---|
| 🚫 No Canvas / PixiJS | Forces true DOM performance mastery |
| 🚫 No Phaser / game engine | Forces manual physics & game-loop design |
| 🚫 No React / Vue | Forces manual state management |
| 🚫 No animation libraries | Forces real understanding of the render cycle |

</div>

---

## 💭 Why I Built This

Most beginners jump straight to frameworks. I made a deliberate choice to go the other way — **master the fundamentals before abstracting them away.**

Building a real-time game surfaces problems that a typical static website simply never teaches you:

<table>
<tr>
<td>⚙️ Physics simulation</td>
<td>🎞️ Real-time rendering</td>
<td>♻️ Object pooling</td>
<td>💥 Collision detection</td>
</tr>
<tr>
<td>🧠 Game state management</td>
<td>🔁 Animation loops</td>
<td>🧮 Memory optimization</td>
<td>🚀 DOM performance tuning</td>
</tr>
<tr>
<td>🖼️ Asset management</td>
<td>💾 Local Storage</td>
<td>🔊 Audio synchronization</td>
<td>🐞 Independent debugging</td>
</tr>
</table>

Almost nothing here came from a tutorial. It came from **experimentation, breaking things, and fixing them.**

---

## 🛠️ Tech Stack

<div align="center">

| Layer | Stack |
|---|---|
| **Frontend** | HTML5 · CSS3 · Vanilla JavaScript (ES6) |
| **Persistence** | Local Storage API |
| **Deployment** | Vercel |
| **Assets** | Hand-cropped pixel-art PNG sprites · Custom SFX · Google Fonts |
| **Frameworks** | `null` |
| **Game Engine** | `null` |
| **Canvas** | `null` |

</div>

<div align="center">

**No libraries. No frameworks. No Canvas. No game engine. Just the platform.**

</div>

---

## ✨ Core Features

- ♾️ **Infinite procedural tunnels** with randomized heights and gaps
- 🌍 **Velocity-based gravity simulation** (not CSS-hacked movement)
- 🐦 **Responsive bird jump physics**
- 💥 **Mathematically accurate collision detection**
- 🔢 **Live score tracking** with a bulletproof anti-double-count system
- 🏆 **Persistent high scores** via Local Storage
- 🔊 **Layered sound effects** (wing, point, death) with overlap handling
- 💀 **Game Over screen** with retry flow
- 🏠 **Home / Start screen navigation**
- 🎨 **Retro pixel-art UI**, fully custom-styled

---

## ⚙️ The Physics Engine

Instead of nudging the bird's `top` value directly on every keypress — which looked robotic and disconnected — the game simulates **real gravity through velocity**, updated every frame inside a unified game loop:

```
   Bird Velocity
        │
        ▼
   Bird Position
        │
        ▼
   Pipe Position
        │
        ▼
    Collision
        │
        ▼
      Score
        │
        ▼
    Rendering
```

This single change — moving from *"set position directly"* to *"simulate velocity, derive position"* — was the difference between a game that felt **mechanical** and one that felt **alive**.

---

## ♻️ Object Pooling Architecture

The single biggest performance win in the entire project.

<table>
<tr>
<td width="50%" valign="top">

### ❌ The Naive Approach
```
Create Pipe
     │
     ▼
Delete Pipe
     │
     ▼
Create New Pipe
     │
     ▼
   Repeat...
```
**Result:** constant DOM allocation, aggressive garbage collection, visible frame stutter.

</td>
<td width="50%" valign="top">

### ✅ The Engineered Fix
```
Generate 8 Pipes
     │       (once)
     ▼
Pipe Exits Screen
     │
     ▼
 Move + Rehide
     │
     ▼
Randomize Height
     │
     ▼
Reuse Same DOM Node
```
**Result:** zero new DOM nodes created during gameplay, ever.

</td>
</tr>
</table>

> 🧠 **Insight:** Only **8 pipe objects exist for the entire lifetime of the game.** Only their position and height ever change.

---

## 💥 Collision Detection

Collision was, by far, the hardest system to get right.

**Attempt #1 — Image overlap.**
Failed. Transparent PNG padding around sprites caused false-positive collisions the player could visually see weren't real hits.

**The fix — a two-stage mathematical model:**

```
┌─────────────────────┐       ┌─────────────────────┐
│  Horizontal Overlap  │  AND  │   Vertical Overlap   │  ───▶  💥 Collision
│  (pipe reaches bird) │       │ (bird crosses tunnel)│
└─────────────────────┘       └─────────────────────┘
```

A collision only registers when **both** conditions are true — cropped assets + tightened CSS boxes + coordinate math, not pixels, decide the outcome.

---

## 🏗️ Game Architecture

```
                    Game Startup
                         │
                         ▼
               Generate Pipe Objects
                         │
                         ▼
                Generate DOM Pipes
                         │
                         ▼
                 Start Game Loop  ◄─────────┐
                         │                  │
                         ▼                  │
                  Update Physics            │
                         │                  │
                         ▼                  │
                    Move Pipes              │
                         │                  │
                         ▼                  │
                  Check Collision           │
                         │                  │
                         ▼                  │
                   Update Score        ─────┘
                         │
                         ▼
                      Render
                         │
                         ▼
                    Game Over
```

---

## 📁 Folder Structure

```
Tunnel-Flap/
│
├── assets/
│   ├── bird.png
│   ├── capForUP.png
│   ├── capForDown.png
│   ├── tunnelLength.png
│   ├── gameplay-back.png
│   ├── desktop-back.png
│   └── game-over-bird.png
│
├── audio/
│   ├── sfx_die.mp3
│   ├── sfx_point.mp3
│   └── sfx_wing.mp3
│
├── index.html
├── style.css
├── script.js
└── README.md
```

---

## 🧗 The 9-Phase Build Journey

<details open>
<summary><b>Phase 1 — Planning</b></summary>
<br>

What looked like *"a bird moving between two pipes"* revealed, within hours, that almost every system in the game depends on every other system. Deceptively simple, genuinely deep.
</details>

<details>
<summary><b>Phase 2 — Game Screens</b></summary>
<br>

Built the three-screen state machine: `Start Screen → Gameplay Screen → Game Over Screen`, with clean transitions between them.
</details>

<details>
<summary><b>Phase 3 — Gravity</b></summary>
<br>

v1 simply changed `bird.style.top` on an interval — functional, but the motion felt robotic. Redesigned into a **velocity-based movement system** for realistic, physical motion.
</details>

<details>
<summary><b>Phase 4 — Infinite Pipes</b></summary>
<br>

Started with `Create → Delete → Create Again`. After researching game performance patterns, discovered and implemented **Object Pooling** — 8 pipes now live forever; only their state changes.
</details>

<details>
<summary><b>Phase 5 — Collision Detection</b></summary>
<br>

The hardest phase. Image-overlap collision failed due to transparent PNG padding. Solved with: **crop assets → fix CSS → build mathematical horizontal + vertical overlap detection.**
</details>

<details>
<summary><b>Phase 6 — Score System</b></summary>
<br>

Object pooling meant pipes never *disappear* — so "score when a pipe disappears" broke immediately. Fixed with a per-pipe `isScore` flag, awarded once per pass and reset only on recycle.
</details>

<details>
<summary><b>Phase 7 — Persistent High Score</b></summary>
<br>

Implemented Local Storage to persist the best score across browser refreshes.
</details>

<details>
<summary><b>Phase 8 — Audio</b></summary>
<br>

Added wing, point, and death sound effects — using `cloneNode()` to prevent overlapping sounds from cutting each other off.
</details>

<details>
<summary><b>Phase 9 — Optimization</b></summary>
<br>

v1 ran on **multiple independent intervals** (one per pipe, plus separate bird, collision, and score intervals). Consolidated everything into a **single unified game loop** — dramatically cleaner architecture.
</details>

---

## 🔧 Major Problems & How I Solved Them

| Problem | Root Cause | Solution |
|---|---|---|
| 🕳️ Impossible tunnel heights | Random values with no bounds | Introduced minimum-height & gap constants |
| 📚 Recycled pipes stacking | No positional reference on recycle | Find the rightmost pipe, spawn recycled pipes after it |
| 🎯 False collisions | Transparent PNG padding vs. hitbox | Switched to pure mathematical overlap detection |
| 🐌 Performance degradation | Constant DOM create/delete | Full object pooling implementation |
| 🤖 Robotic bird movement | Direct position mutation | Velocity + gravity + unified game loop |
| ✂️ Misaligned sprites | Untrimmed transparent padding | Manually trimmed and re-exported all sprites |

---

## 📚 Skills Gained

<table>
<tr>
<td valign="top" width="25%">

**JavaScript**
- DOM Manipulation
- Event Listeners
- Object Pooling
- Game Loop Design
- Physics (Velocity/Gravity)
- Collision Math
- Timers & Intervals
- State Management
- Local Storage
- Audio API
- Procedural Generation

</td>
<td valign="top" width="25%">

**CSS**
- Flexbox
- Absolute Positioning
- Stacking Context
- Pixel-Art UI
- Custom Properties
- Clip Path
- Reusable Utility Classes
- Responsive Basics

</td>
<td valign="top" width="25%">

**HTML**
- Semantic Layout
- Header / Section / Aside
- Dialog Elements
- Accessible Buttons
- Image Optimization

</td>
<td valign="top" width="25%">

**Engineering**
- Single Responsibility Principle
- Refactoring
- Code Organization
- Iterative Design
- Independent Debugging
- Systems Thinking

</td>
</tr>
</table>

---

## 🤖 How I Used AI During Development

AI was deliberately **not used as a code generator.** It was used the way you'd use a senior engineer sitting next to you:

```
Try to solve it myself
        │
        ▼
Get genuinely stuck
        │
        ▼
Ask a conceptual question (not "write the code")
        │
        ▼
Build my own implementation
        │
        ▼
Request a review, then refactor
```

This loop — **struggle first, ask second, build third** — is what actually built the problem-solving muscle. Copy-pasted code doesn't teach you why the object pool needed exactly 8 pipes, or why `isScore` had to reset on recycle instead of on delete.

---

## 🧠 What This Project Actually Taught Me

The biggest lesson wasn't JavaScript syntax. It was watching **how software systems evolve.**

A "simple bird game" slowly grew into interconnected systems spanning physics, rendering, collision, state, performance, memory, architecture, optimization, and debugging — and **every new feature quietly forced a redesign of something that already existed.**

That's the real lesson: software engineering is iterative, not linear. Nothing ships perfect on the first pass, and that's fine.

---

## 🗺️ Development Roadmap

<table>
<tr>
<th align="left">Phase</th>
<th align="left">Focus</th>
<th align="left">Status</th>
</tr>
<tr>
<td><b>0 · Planning</b></td>
<td>Define mechanics · pixel-art direction · gather assets</td>
<td>✅ Done</td>
</tr>
<tr>
<td><b>1 · UI Foundation</b></td>
<td>Start / Gameplay / Game Over screens · reusable CSS variables</td>
<td>✅ Done</td>
</tr>
<tr>
<td><b>2 · Core Gameplay</b></td>
<td>Gravity · bird jump · DOM rendering · procedural pipes</td>
<td>✅ Done</td>
</tr>
<tr>
<td><b>3 · Infinite World</b></td>
<td>Object pooling · pipe recycling · zero runtime DOM creation</td>
<td>✅ Done</td>
</tr>
<tr>
<td><b>4 · Game Logic</b></td>
<td>Collision detection · scoring · Local Storage persistence</td>
<td>✅ Done</td>
</tr>
<tr>
<td><b>5 · Polish</b></td>
<td>Sound effects · bird tilt · tighter hitboxes · sprite loading</td>
<td>✅ Done</td>
</tr>
<tr>
<td><b>6 · Optimization</b></td>
<td>Single game loop · constants · helper extraction · code cleanup</td>
<td>✅ Done</td>
</tr>
<tr>
<td><b>7 · Future Expansion</b></td>
<td>ES Modules · <code>requestAnimationFrame</code> · pause/resume · touch controls · particles · Canvas experiment</td>
<td>🔜 Planned</td>
</tr>
</table>

**Planned upgrades, unordered:**

- [ ] `requestAnimationFrame` rendering loop
- [ ] Delta-time based physics
- [ ] Mobile & touch support
- [ ] Difficulty progression
- [ ] Pause / Settings menu
- [ ] Sprite-sheet animation
- [ ] Particle effects & background parallax
- [ ] Multiple bird skins
- [ ] FPS counter & developer debug mode
- [ ] Restart without page reload
- [ ] Modular ES6 file structure
- [ ] Canvas rendering as a learning experiment
- [ ] TypeScript migration
- [ ] Vite build pipeline

---

## 👨‍💻 Author

<div align="center">

### **Raj Shah**

*Frontend Developer, currently mastering core JavaScript before moving into frameworks.*

**Project Goal:** Learn systems engineering through game development — not tutorials.

[![GitHub](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/rajshahdev966)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/rajshah-dev/)
[![Portfolio](https://img.shields.io/badge/Portfolio-FF5722?style=for-the-badge&logo=todoist&logoColor=white)](#)

</div>

---

## 📄 License

Distributed under the **MIT License** — see `LICENSE` for details.

---

<div align="center">

### ⭐ If this project's engineering story resonated with you, a star means a lot.

*This README documents not just what was built, but how and why every decision was made — from a naive first pass to a fully object-pooled, physics-driven game engine.*

**Keywords:** Flappy Bird clone JavaScript · Vanilla JS game engine · DOM game development · object pooling JavaScript · custom game loop · browser game without Canvas · HTML CSS JS game architecture · frontend systems engineering project

</div>