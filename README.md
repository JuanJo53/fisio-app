# Modern & Professional React + Firebase Project Structure

This project follows a structured approach designed for scalability, maintainability, and clear separation of concerns, especially for responsive web apps utilizing Firebase and external APIs.

## 📂 Directory Structure

```text
src/
├── assets/          # Static files: images, icons, fonts, etc.
├── components/      # Global shared UI components (Button, Input, Modal, etc.)
│   ├── ui/          # Low-level UI primitives (shadcn style)
│   └── common/      # Generic business components
├── config/          # Global configuration, environment variables, Firebase init
│   ├── firebase.ts  # Firebase SDK initialization
│   └── constants.ts # Global constants (API endpoints, etc.)
├── context/         # Global React Context providers (Auth, Theme, Toast)
├── features/        # Feature-based modules (The "Core" of your app)
│   ├── auth/        # Example: Authentication feature
│   │   ├── components/
│   │   ├── hooks/
│   │   ├── services/ # Feature-specific Firebase/API logic
│   │   ├── types/
│   │   └── index.ts  # Public entry point for the feature
│   └── dashboard/   # Example: Dashboard feature
├── hooks/           # Global reusable custom hooks (useMediaQuery, useLocalStorage)
├── layouts/         # Layout wrappers (MainLayout, AuthLayout, DashboardLayout)
├── pages/           # Route-level components (Home, Login, Settings)
├── services/        # Global API clients and shared Firebase service layers
│   ├── api-client.ts
│   └── firebase/     # Modular Firebase services (firestore.ts, storage.ts)
├── styles/          # Global CSS/Sass, Tailwind config, Theme variables
├── types/           # Global TypeScript interfaces and types
├── utils/           # Shared utility functions (date formatters, validation)
├── App.tsx          # Main App component & Router setup
└── main.tsx         # Entry point
```

## 🚀 Architectural Principles

### 1. Feature-Based Organization (Domain Driven)
Logic is grouped by **feature** (e.g., `features/auth`). This prevents "folder explosion" as the project grows and makes it easier to work on specific domains.

### 2. Service Layer Pattern
Firebase or API calls are abstracted into the `services/` or `features/X/services/` layer. 
- **Benefit:** Decouples components from infrastructure. Switching providers or updating APIs only requires changes in one place.

### 3. Responsive-First Design
- `layouts/` manage shared structures (Sidebar vs. TopNav) that change based on screen size.
- Responsive hooks like `useMediaQuery` are centralized in `hooks/`.

### 4. Configuration Centralization
`config/firebase.ts` is the single source of truth for initialization. Environment variables are used via `.env` files.

### 5. Type Safety (TypeScript)
Shared types are centralized in `types/`, while feature-specific types remain within their respective feature folders.

### 6. Clean Entry Points
Each feature uses an `index.ts` to export only necessary elements, resulting in cleaner imports:
`import { LoginForm } from '@/features/auth';`
