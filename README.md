# Tripical: Premium Travel & Adventure Platform

**Tripical** is a high-performance, boutique travel platform designed to deliver immersive destination experiences. This project serves as both a production-ready travel interface and a technical deep-dive into the latest advancements in modern web development.

![Tripical Banner](src/assets/beach.jpeg)

## 🌐 Project Vision

Tripical was built to bridge the gap between aesthetic discovery and functional travel planning. It provides users with a curated look at breathtaking destinations while maintaining a focus on performance, responsiveness, and interactive storytelling.

### Learning Objectives
As a primary project for mastering modern frontend architecture, Tripical implements:
- **Cutting-edge Frameworks:** Early adoption of **React 19** and **Vite 7**.
- **Modern Styling:** Full implementation of **Tailwind CSS 4** for streamlined design tokens.
- **Serverless Integration:** Real-world usage of **Netlify Functions** for backend operations.
- **Declarative Animations:** Complex layout transitions using **Framer Motion**.

---

## 🛠️ Technical Architecture

### Core Stack
- **Frontend Engine:** [React 19](https://react.dev/) — Leveraging the latest concurrent features and improved hooks.
- **Build Tooling:** [Vite 7](https://vitejs.dev/) — Optimized for near-instant Hot Module Replacement (HMR).
- **Design System:** [Tailwind CSS 4](https://tailwindcss.com/) — Utilizing the new engine for better performance and CSS-first configuration.
- **State & Logic:** Typed with **TypeScript** for robust data integrity across the application.

### Key Infrastructure
- **Serverless Backend:** `netlify/functions` handles secure lead generation and email dispatch.
- **Validation Layer:** [Zod](https://zod.dev/) schemas ensure all user input is sanitized and validated before processing.
- **Email Delivery:** Integrated with [Resend](https://resend.com/) for reliable, high-deliverability transactional messaging.
- **Animation Orchestration:** [Framer Motion](https://www.framer.com/motion/) provides the physics-based transitions that define the Tripical user experience.

---

## 🚀 Operational Setup

### Environment Requirements
- **Runtime:** Node.js v18+
- **Configuration:** A `.env` file is required in the root directory for local development:
  ```env
  RESEND_API_KEY=your_production_key
  ```

### Local Development Workflow
1. **Dependency Management:**
   ```bash
   npm install
   ```
2. **Interactive Development:**
   ```bash
   npm run dev
   ```
3. **Netlify Environment Simulation:**
   To test serverless functions and redirects in a local environment:
   ```bash
   npm run dev:netlify
   ```

### Deployment Strategy
The platform is architected for **Netlify**'s edge network:
- **Build Command:** `npm run build`
- **Publish Directory:** `dist`
- **Functions Path:** `netlify/functions`

---

## 📂 System Map

- `src/pages/` — Main view controllers (Home, Details, About, Contact).
- `src/components/` — Modular, reusable UI components (Layout, Navigation, Forms).
- `src/assets/` — Optimized media assets and photography.
- `netlify/functions/` — Secure server-side logic for lead capture.

---

## 🔒 Confidentiality & Usage
This is a private project developed for educational and professional demonstration purposes. All rights to the branding and custom code are reserved.

---
*Developed with a focus on modern performance and immersive UX.*
