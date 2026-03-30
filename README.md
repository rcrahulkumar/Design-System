# JIVI Design System

A comprehensive, AI-native design system built for high-performance healthcare products. JIVI is token-driven, fully documented, and production-ready.

## 🚀 Quick Start

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation
```bash
npm install
```

### Development
```bash
npm run dev
```

### Build for Production
```bash
npm run build
```

---

## 📁 Project Structure

- `/tokens`: Atomic design tokens (colors, typography, spacing, etc.) in JSON format.
- `/src/components/ui`: Reusable React components connected to the token system.
- `/src/pages`: Documentation pages for tokens, components, and patterns.
- `/src/index.css`: Global styles and Tailwind configuration.

---

## 🎨 Design Tokens

JIVI uses a multi-layered token system:
1. **Primitives**: Raw values (e.g., `orange-500`).
2. **Semantics**: Context-aware tokens (e.g., `primary`, `success`, `error`).
3. **Component Tokens**: Specific values for UI elements (e.g., `button-radius`, `header-height`).

---

## 🧩 Component Library

The library includes 16+ production-ready components:
- **Actions**: Button, Header, Bottom Bar
- **Inputs**: Input, Textarea, Upload, Chip, Radio, Checkbox
- **Feedback**: Badge, Alert, Banner
- **Structure**: Card, Heading, List, Permission Card

---

## 🚀 Deployment

### Exporting from AI Studio
1. Open the **Settings** menu in AI Studio.
2. Select **Export to GitHub** or **Download ZIP**.
3. Your system is now ready for external use.

### Deploying to Vercel/Netlify
1. Connect your GitHub repository to Vercel or Netlify.
2. Set the build command to `npm run build`.
3. Set the output directory to `dist`.
4. Your documentation site will be live instantly.

---

## 🛡️ License
SPDX-License-Identifier: Apache-2.0
