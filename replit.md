# Om Prajapati Portfolio Website

## Overview

This is a modern, premium portfolio website for Om Prajapati, a UI/UX Designer and Front-End Developer. The application showcases professional work, skills, experience, and provides a fully functional contact form. Built with React, Express, and TypeScript, it features smooth scroll animations, glassmorphism effects, and a mobile-first responsive design inspired by Apple's minimalism and Dribbble's creative flair.

**Status**: Production-ready portfolio with all features implemented and tested.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework & Build System**
- **React 18** with TypeScript for the UI layer
- **Vite** as the build tool and development server
- **Wouter** for client-side routing (lightweight alternative to React Router)
- **TanStack Query** (React Query) for server state management and API calls

**UI Component Library**
- **shadcn/ui** component system built on Radix UI primitives
- Highly customizable components using the "New York" style variant
- All UI components follow a consistent design system with Tailwind CSS

**Styling Approach**
- **Tailwind CSS** for utility-first styling
- Custom design tokens defined in CSS variables for colors, shadows, and spacing
- Glassmorphism effects and smooth animations throughout
- Premium aesthetic with generous whitespace and scroll-driven animations

**State Management**
- TanStack Query handles server state and caching
- Local component state with React hooks
- Custom hooks for reusable logic (scroll animations, toast notifications, mobile detection)

**Animation System**
- Custom `useScrollAnimation` hook for intersection-observer-based animations
- CSS transitions and animations for micro-interactions
- Scroll-triggered animations for section reveals

### Backend Architecture

**Server Framework**
- **Express.js** with TypeScript running on Node.js
- Separate development and production server configurations
- Custom middleware for request logging and JSON body parsing

**Development vs Production**
- Development mode uses Vite middleware for HMR (Hot Module Replacement)
- Production mode serves static built assets from the `dist/public` directory
- Environment-based configuration through `NODE_ENV`

**API Design**
- RESTful API endpoints under `/api` prefix
- Single contact form endpoint (`POST /api/contact`)
- JSON request/response format
- Error handling with appropriate HTTP status codes

**Data Storage**
- In-memory storage implementation (`MemStorage`) for development/demo purposes
- Storage interface (`IStorage`) allows easy swapping to persistent storage
- Designed to work with PostgreSQL through Drizzle ORM (schema defined but not actively used)

### Database Schema (PostgreSQL - Configured but Optional)

**Drizzle ORM Configuration**
- Schema defined in `shared/schema.ts` using Drizzle ORM
- PostgreSQL dialect configured in `drizzle.config.ts`
- Two tables defined:
  - `users`: Basic user authentication structure
  - `contact_messages`: Stores contact form submissions
- Zod schemas for runtime validation of insert operations

**Current Implementation Note**
- Database is configured but currently using in-memory storage
- Can be activated by provisioning a PostgreSQL database and setting `DATABASE_URL`
- Migration files would be generated in `./migrations` directory

### Validation & Type Safety

**Schema Validation**
- **Zod** for runtime type validation
- **drizzle-zod** integration for database schema validation
- Shared schema definitions between client and server
- Type-safe API contracts using TypeScript inference

**Path Aliases**
- `@/` maps to `client/src/`
- `@shared/` maps to `shared/`
- `@assets/` maps to `attached_assets/`
- Consistent imports across the application

### Design System

**Typography**
- Inter font family (Google Fonts)
- Hierarchical heading sizes (H1: 5xl-6xl, H2: 3xl-4xl, H3: xl-2xl)
- Consistent font weights (400-700)

**Color System**
- CSS custom properties for theme colors
- Primary accent: Blue (#3B82F6)
- Neutral grayscale palette
- Light mode optimized (dark mode tokens defined but not implemented)

**Component Patterns**
- Card-based layouts with glassmorphism effects
- Consistent spacing using Tailwind's spacing scale
- Hover and active states with elevation changes
- Badge, button, and form component variants

**Responsive Design**
- Mobile-first approach
- Breakpoints: mobile (default), md (768px), lg (1024px)
- Touch-optimized interactions
- Responsive typography and spacing

## External Dependencies

### Core Framework Dependencies
- **React & React DOM** (v18+) - UI library
- **Express** - Backend server framework
- **Vite** - Frontend build tool and dev server
- **TypeScript** - Type safety across the stack

### UI Component Libraries
- **Radix UI** - Headless accessible component primitives (20+ components)
- **shadcn/ui** - Pre-built component system
- **Lucide React** - Icon library
- **React Icons** - Additional icons (GitHub, LinkedIn)

### Data & State Management
- **TanStack Query** (React Query) - Server state and data fetching
- **React Hook Form** - Form state management
- **Zod** - Schema validation
- **Drizzle ORM** - Database ORM and query builder

### Database & Storage
- **@neondatabase/serverless** - Serverless PostgreSQL driver
- **connect-pg-simple** - PostgreSQL session store
- Currently using in-memory storage (MemStorage implementation)

### Styling & Animation
- **Tailwind CSS** - Utility-first CSS framework
- **class-variance-authority** - Variant-based component styling
- **clsx & tailwind-merge** - Conditional class name utilities
- **embla-carousel-react** - Carousel component

### Development Tools
- **tsx** - TypeScript execution for development
- **esbuild** - Fast JavaScript bundler for production
- **@replit/vite-plugin** suite - Replit-specific development enhancements

### Utilities
- **date-fns** - Date manipulation
- **nanoid** - Unique ID generation
- **cmdk** - Command palette component
- **wouter** - Lightweight routing

### Notable Configuration
- No authentication system implemented (not needed for portfolio)
- Contact form submissions stored in-memory and logged to console
- CV download functionality with static PDF file
- Scroll-triggered animations using Intersection Observer API
- Static asset serving from `dist/public` in production
- Express.json middleware configured for API requests

### Recent Updates (November 2025)
- ✅ Implemented CV download feature with PDF generation
- ✅ Created functional contact form with backend API
- ✅ Added scroll-triggered animations across all sections
- ✅ Fixed hover interactions to comply with design guidelines
- ✅ Tested all features end-to-end with playwright
- ✅ Ready for deployment