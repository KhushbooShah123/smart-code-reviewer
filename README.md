# ⚡ Smart Code Analyzer

> **A Next-Generation Web-Based Compiler Simulator with Interactive 3D Visualization, Compiler Phase Analysis, and Automated CI/CD Pipeline.**

<p align="center">

![HTML](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Three.js](https://img.shields.io/badge/Three.js-000000?style=for-the-badge&logo=three.js&logoColor=white)
![Docker](https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white)
![GitHub Actions](https://img.shields.io/badge/GitHub_Actions-2088FF?style=for-the-badge&logo=github-actions&logoColor=white)
![MIT License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)

</p>

---

# 📚 Table of Contents

- Overview
- Features
- Demo
- Screenshots
- Tech Stack
- Project Architecture
- CI/CD Pipeline
- Project Structure
- Local Setup
- Docker
- Team
- License

---

# 🌟 Overview

**Smart Code Analyzer** is an advanced frontend compiler simulator that demonstrates how a modern compiler processes source code through every major compilation phase.

Unlike traditional compiler visualizers, this project combines **interactive 3D visualization**, **compiler internals**, and a **production-style DevOps workflow**.

Users can paste **C, C++, Python, or JavaScript** code and instantly visualize:

- Lexical Analysis
- Syntax Analysis (AST)
- Semantic Analysis
- Three Address Code Generation
- Complexity Analysis
- Optimization Suggestions

The project also follows an automated **CI/CD pipeline** using **GitHub Actions**, **Puppeteer**, **Lighthouse CI**, **Docker**, and **GitHub Container Registry (GHCR)**.

---

# 🚀 Features

## 🔍 Compiler Features

- ✅ Automatic Language Detection
- 🔠 Lexical Analysis with Tokens
- 🌳 Abstract Syntax Tree (AST)
- 📋 Symbol Table Generation
- ⚠ Semantic Error Detection
- 🧠 Three Address Code (TAC)
- ⚡ Optimization Suggestions
- 📈 Time & Space Complexity Analysis

---

## 🚀 DevOps Features

- Dockerized Application
- GitHub Actions CI/CD
- Automated Browser Testing (Puppeteer)
- Lighthouse Performance Audit
- GitHub Container Registry (GHCR)
- Production-ready Nginx Deployment

---

# 🎥 Demo

## 🚀 Live Demo

Coming Soon

---

# 📸 Screenshots

## Home Page

![Home](images/home.png)

---

## Compiler Analysis

![Compiler](images/compiler.png)

---

## AST Generation

![AST](images/ast.png)

---

# 🛠 Tech Stack

| Category | Technologies |
|----------|--------------|
| Frontend | HTML5, CSS3, JavaScript |
| UI | Glassmorphism |
| Graphics | Three.js, WebGL |
| Compiler | Lexer, Parser, AST, TAC Generator |
| Testing | Puppeteer |
| Performance | Lighthouse CI |
| Containerization | Docker |
| Registry | GitHub Container Registry |
| CI/CD | GitHub Actions |

---

# 🏗 Project Architecture

```
User
   │
   ▼
3D Web Interface
   │
   ▼
Compiler Engine
   │
   ├── Lexical Analyzer
   ├── Parser
   ├── AST Generator
   ├── Semantic Analyzer
   ├── TAC Generator
   └── Complexity Analyzer
   │
   ▼
Analysis Report
```

---

# 🔄 CI/CD Pipeline

This project uses an automated GitHub Actions workflow to ensure every change is tested, optimized, and containerized before deployment.

```mermaid
flowchart TD
    A[Developer Push] --> B[Puppeteer End-to-End Tests]
    B --> C[Lighthouse Performance Audit]
    C --> D[Docker Image Build]
    D --> E[Push Image to GitHub Container Registry (GHCR)]
```

---

# 📂 Project Structure

```text
smart-code-analyzer/
│
├── .github/
│   └── workflows/
│       └── advanced-ci.yml
│
├── tests/
│   └── test-compiler.js
│
├── images/                  # Project screenshots
├── src/                     # Team photos & icons
│
├── index.html
├── style.css
├── background.js            # Three.js 3D logic
├── script.js                # Compiler engine
├── package.json
├── lighthouse-budget.json
├── Dockerfile
├── .gitignore
├── README.md
└── LICENSE

```

---

# ⚙ Local Setup

## Clone Repository

```bash
git clone https://github.com/KhushbooShah123/smart-code-analyzer.git

cd smart-code-analyzer
```

---

## Run using Local Server

```bash
npx serve .
```

---

# 🐳 Run using Docker

```bash
docker pull ghcr.io/KhushbooShah123/smart-code-analyzer:latest

docker run -d -p 8080:80 ghcr.io/KhushbooShah123/smart-code-analyzer:latest
```

Open

```
http://localhost:8080
```

---

# 👥 Team

| Name | Role |
|------|------|
| **Khushboo Shah** | Frontend Lead & DevOps |
| Shivam Yadav | Compiler Logic |
| Santosh Chaudhary | 3D Integration & Testing |
| Shivanshu Shukla | Algorithms & Complexity |

---

# 📄 License

This project is licensed under the **MIT License**.

See the **LICENSE** file for details.

---

<div align="center">

### ⭐ If you found this project useful, please consider giving it a Star!

Made with ❤️ by **Khushboo Shah**

</div>