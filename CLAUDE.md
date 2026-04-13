# OKAI — Claude Code Configuration

## Agency Overview
OKAI is an AI agency building business websites, e-commerce stores, landing pages, and AI chatbots/assistants for business clients. Projects range from simple to mid-complexity.

## Communication Style
- Be direct and concise — no fluff
- Don't over-explain unless asked
- Ask before making large structural changes
- Summarize what you did after completing a task

## Design Philosophy
- Aesthetic: dark/luxury and colorful/expressive — never generic or "AI-looking"
- Every UI should feel intentional, bold, and production-grade
- Typography matters — avoid Arial, Inter, and other overused defaults
- Animations should feel purposeful, not decorative
- Mobile-first always

## Tech Stack
Stack is chosen based on client budget and project complexity:

### Websites & Landing Pages
- Simple/budget: HTML + CSS + Vanilla JS
- Mid: Next.js + Tailwind CSS + shadcn/ui
- Always TypeScript for any React/Next.js project

### E-commerce
- Simple/budget: Shopify
- Custom: Next.js + Stripe + Prisma

### AI Chatbots & Assistants
- Simple: no-code (Voiceflow, Botpress)
- Mid: custom API with OpenAI or Anthropic SDK
- Always separate conversation logic from UI
- Design for multi-client from the start (web embed, API, standalone)

## Code Standards
- Production-grade: documented, typed, scalable from day one
- TypeScript strict mode — no any types
- Components under 200 lines — split if larger
- Environment variables for all keys and config — never hardcode
- Comment complex logic, not obvious code

## Project Structure (Next.js)
src/
  app/          # Next.js app router
  components/   # Reusable UI components
  lib/          # Business logic & utilities
  hooks/        # Custom React hooks
  types/        # TypeScript types
  services/     # External API integrations

## Skills Available
- ui-ux-pro-max — design system intelligence
- frontend-design — bold aesthetic direction
- brainstorming — plan before building
- writing-plans — implementation planning
- systematic-debugging — root cause before any fix
- verification-before-completion — verify before claiming done
- webapp-testing — Playwright UI testing
- mcp-builder — MCP server creation for chatbot integrations
- skill-creator — build new agency skills
- using-superpowers — orchestrates all skills

## Per-Project Context
When starting a new client project, create a CLAUDE.md in that project root with:
- Client name and industry
- Project type and goals
- Agreed stack
- Design notes (brand colors, fonts, tone)
- Any client-specific constraints
