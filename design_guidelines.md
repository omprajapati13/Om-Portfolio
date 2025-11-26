# Design Guidelines: Om Prajapati Portfolio Website

## Design Approach
**Reference-Based Approach**: Blend Apple's minimalism + Dribbble's creative flair + Framer's smooth animations to create a premium, modern portfolio experience.

## Core Design Principles
- Premium, clean aesthetic with generous whitespace
- Smooth micro-interactions throughout
- Glassmorphism effects for depth and sophistication
- Scroll-driven animations for engagement
- Mobile-first responsive design

## Typography System
- **Headings**: Inter or SF Pro Display (600-700 weight)
  - H1: text-5xl to text-6xl for hero greeting
  - H2: text-3xl to text-4xl for section titles
  - H3: text-xl to text-2xl for subsections
- **Body**: Inter or SF Pro Text (400-500 weight)
  - Base: text-base to text-lg
  - Small: text-sm for metadata
- **Accent Text**: Semibold (600) for CTAs and highlights

## Color Palette
- **Primary**: Clean whites (#FFFFFF, #F8F9FA)
- **Secondary**: Deep blacks and greys (#0A0A0A, #1A1A1A, #2A2A2A, #6B7280)
- **Accent Blue**: Vibrant blue for CTAs and highlights (#3B82F6, #2563EB)
- **Glassmorphism**: rgba(255, 255, 255, 0.1) backgrounds with backdrop-blur

## Layout System
**Spacing Primitives**: Tailwind units 4, 8, 12, 16, 20, 24 (p-4, m-8, gap-12, py-16, etc.)
- Section padding: py-20 to py-24 on desktop, py-12 to py-16 on mobile
- Container: max-w-7xl with px-6 to px-8
- Grid gaps: gap-8 to gap-12
- Card padding: p-6 to p-8

## Component Library

### Navigation
- Sticky navbar with blur background (backdrop-blur-lg)
- Smooth scroll navigation
- Animated on scroll (fade-in from top)
- Mobile hamburger menu with slide-in animation

### Hero Section
- Circular profile photo (w-32 h-32 to w-48 h-48) with subtle glow effect
- Animated greeting text with wave emoji
- Role subtitle with gradient text effect
- Dual CTA buttons: Primary (Hire Me - blue gradient) + Secondary (Download CV - outline)
- Floating UI elements/particles in background

### Cards (Glassmorphism Style)
- Background: rgba(255, 255, 255, 0.05) with backdrop-blur-md
- Border: 1px rgba(255, 255, 255, 0.1)
- Rounded: rounded-2xl to rounded-3xl
- Shadow: Soft shadows for depth
- Hover: Scale transform (hover:scale-105) with smooth transition

### Skills Section
- Animated progress bars with gradient fills
- Tech stack chips with icons (rounded-full pills)
- Stagger animation on scroll reveal
- Grid layout: grid-cols-2 md:grid-cols-3 lg:grid-cols-4

### Project Cards
- Hover-zoom effect on images
- Overlay with project details on hover
- Tags/tech badges
- View Project CTA button
- Grid: grid-cols-1 md:grid-cols-2 lg:grid-cols-3

### Certificates Slider
- Smooth carousel with navigation dots
- Auto-play with pause on hover
- Certificate cards with image placeholders
- Swipe gestures for mobile

### Contact Form
- Icon-prefixed input fields
- Floating labels
- Blue focus states with glow
- Animated send button
- Social links with hover animations

### Sticky Elements
- Floating "Contact Me" button (bottom-right)
- Scroll-to-top button (appears after scroll)

## Animation Strategy
- **Scroll Animations**: Fade-in, slide-up on viewport entry
- **Hover Effects**: Scale, glow, shadow elevation
- **Page Load**: Stagger animations for sections (100-200ms delays)
- **Navbar**: Slide-down on load, background blur on scroll
- **Skill Bars**: Animate width on scroll reveal
- **Parallax**: Subtle background element movement
- **Transitions**: duration-300 to duration-500 for smoothness

## Images
- **Hero Profile Photo**: Circular frame (om4.jpg provided) - center placement with subtle glow/border effect
- **Project Cards**: Placeholder images for 3 projects (can use gradient backgrounds or mockup screenshots)
- **Background Elements**: Geometric shapes, gradient orbs for visual interest (subtle, non-distracting)

## Responsive Breakpoints
- **Mobile**: Single column, stacked sections
- **Tablet (md:)**: 2-column grids where appropriate
- **Desktop (lg:)**: 3-column grids, full layout complexity
- **Large (xl:)**: Max-width container centered

## Accessibility
- Focus states with blue outline rings
- Sufficient color contrast (white text on dark backgrounds)
- Keyboard navigation support
- Semantic HTML structure

## Special Features
- Smooth scroll behavior throughout
- Intersection Observer for scroll animations
- Download CV functionality
- Form validation with visual feedback
- Social links open in new tabs
- Performance-optimized animations (transform/opacity only)