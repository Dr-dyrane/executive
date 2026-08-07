# Dyrane Executive

A source-backed executive intelligence magazine.

Issue 001 profiles **Dr. Ainojie “Alex” Irune** through public records, current activity, institutional relationships, visual reporting and direct source provenance.

## Product thesis

Executive is not a résumé directory. Each profile is treated as a living editorial issue built around:

- identity and career architecture
- current public signal
- institutional and asset relationships
- public access and confirmed events
- visual essays
- source provenance
- public social and professional circuits

Private relationships, personal contact details, inferred routines, non-public locations and unverifiable claims are excluded.

## Experience architecture

```text
app/
  accessibility.css
  experience.css
  loading.tsx
  error.tsx
  not-found.tsx
  people/
    alex-irune/
      layout.tsx
      page.tsx
components/
  executive/
    icon.tsx
    issue-experience.tsx
    public-rooms.tsx
    source-image.tsx
    state-frame.tsx
content/
  people/
    alex-irune/
      index.ts
      profile.ts
      editorial.ts
      public-rooms.ts
      images.json
lib/
  site-url.ts
scripts/
  check-experience.mjs
  check-images.mjs
```

## Experience principles

- magazine-cover hierarchy
- DM Sans display typography + Inter interface typography
- source icons close to claims
- cinematic lighting with a persistent calm-mode escape hatch
- chapter navigation that remains reachable under pressure
- progressive reveal with reduced-motion parity
- 44px minimum pressure targets
- high-contrast and forced-colors support
- explicit loading, error and not-found recovery states
- image fallback chains for publisher-hosted media

## Quality gates

```bash
npm run check
npm run build
```

`npm run check` verifies:

- image availability and fallback coverage
- skip navigation
- active chapter announcements
- calm-mode persistence
- minimum interaction targets
- reduced-motion, high-contrast and forced-color support
- loading, error and recovery states

## Routes

```text
/
/people/alex-irune
```

## Environment

Set `NEXT_PUBLIC_SITE_URL` for the canonical production domain. Vercel's production URL is used automatically when the explicit domain is absent.
