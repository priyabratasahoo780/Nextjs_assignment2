# Next.js App Router Architecture: Explore Courses

This project implements a clean, production-grade folder structure adhering to Next.js App Router conventions and best practices.

## 📁 Complete Folder Structure

```text
explore-courses/
├── src/
│   ├── app/
│   │   ├── (catalog)/                        # Route Group 1: Public catalog & browsing
│   │   │   ├── layout.tsx                    # Shared catalog layout (Navbar, container, Footer)
│   │   │   ├── courses/
│   │   │   │   ├── page.tsx                  # Static Route: /courses (Catalog listing)
│   │   │   │   └── loading.tsx               # Skeleton UI for course listing
│   │   │   ├── courses/[id]/                 # Dynamic Route: /courses/:id
│   │   │   │   ├── page.tsx                  # Single course detail page
│   │   │   │   ├── layout.tsx                # Course detail nested layout
│   │   │   │   ├── loading.tsx               # Skeleton UI for course detail
│   │   │   │   ├── error.tsx                 # Error boundary for course detail
│   │   │   │   └── not-found.tsx             # 404 UI when course is missing
│   │   │   ├── categories/[...slug]/         # Catch-All Route: /categories/web-dev/frontend
│   │   │   │   ├── page.tsx                  # Hierarchical category filter page
│   │   │   │   └── not-found.tsx             # 404 UI for invalid category
│   │   │   └── filter/[[...slug]]/           # Optional Catch-All Route: /filter or /filter/beginner
│   │   │       └── page.tsx                  # Multi-criteria faceted filter
│   │   │
│   │   ├── (learning)/                       # Route Group 2: Immersive Student Learning Portal
│   │   │   ├── layout.tsx                    # Distraction-free video player layout
│   │   │   └── learn/[id]/[...lessonSlug]/   # Nested Catch-All: /learn/:courseId/:module/:lesson
│   │   │       ├── page.tsx                  # Lesson player & curriculum playlist
│   │   │       └── loading.tsx               # Player loading skeleton
│   │   │
│   │   ├── instructors/[id]/                 # Dynamic Route: /instructors/:id
│   │   │   └── page.tsx                      # Instructor profile & their course catalog
│   │   │
│   │   ├── about/
│   │   │   └── page.tsx                      # Static Route: /about
│   │   ├── contact/
│   │   │   └── page.tsx                      # Static Route: /contact
│   │   │
│   │   ├── layout.tsx                        # Global Root Layout (Fonts, Global CSS, Metadata)
│   │   ├── page.tsx                          # Root Landing Page (/)
│   │   ├── loading.tsx                       # Global Loading Fallback
│   │   ├── error.tsx                         # Global Client Error Boundary
│   │   └── not-found.tsx                     # Global 404 Fallback
│   │
│   ├── components/
│   │   ├── common/                           # Global layout & navigational components
│   │   │   ├── Navbar.tsx
│   │   │   ├── Footer.tsx
│   │   │   ├── Sidebar.tsx
│   │   │   └── Breadcrumbs.tsx
│   │   ├── courses/                          # Domain-specific course components
│   │   │   ├── CourseCard.tsx
│   │   │   ├── CourseGrid.tsx
│   │   │   ├── CourseFilter.tsx
│   │   │   └── CourseCurriculum.tsx
│   │   └── ui/                               # Reusable atomic UI primitives
│   │       ├── Button.tsx
│   │       ├── Badge.tsx
│   │       └── Card.tsx
│   │
│   ├── types/                                # Strict TypeScript interfaces
│   │   ├── course.ts
│   │   ├── category.ts
│   │   └── instructor.ts
│   │
│   ├── data/                                 # Isolated realistic dummy data
│   │   ├── courses.ts
│   │   ├── categories.ts
│   │   └── instructors.ts
│   │
│   └── lib/                                  # Utilities & data-access helper functions
│       ├── courses.ts                        # Data fetching helpers (getAllCourses, getCourseById)
│       └── utils.ts                          # cn helper, formatters
```

---

## 🎯 Routing Strategy Matrix

| Route Pattern | Next.js Pattern | Purpose |
|---|---|---|
| `/` | `app/page.tsx` | Static Landing Page |
| `/about`, `/contact` | `app/about/page.tsx`, `app/contact/page.tsx` | Static Marketing Pages |
| `/courses` | `app/(catalog)/courses/page.tsx` | Static Course Catalog |
| `/courses/[id]` | `app/(catalog)/courses/[id]/page.tsx` | Dynamic Route for single course overview |
| `/instructors/[id]` | `app/instructors/[id]/page.tsx` | Dynamic Route for instructor profile |
| `/categories/[...slug]` | `app/(catalog)/categories/[...slug]/page.tsx` | Catch-All Route for nested hierarchical categories |
| `/filter/[[...slug]]` | `app/(catalog)/filter/[[...slug]]/page.tsx` | Optional Catch-All Route for zero or multiple filters |
| `/learn/[id]/[...lessonSlug]` | `app/(learning)/learn/[id]/[...lessonSlug]/page.tsx` | Nested Catch-All Route for video player and lessons |

---

## 🛠️ Key App Router Concepts Applied

1. **Route Groups `(group)`**:
   - `(catalog)`: Encapsulates catalog pages sharing the main header, breadcrumbs container, and footer without adding `(catalog)` to the URL path.
   - `(learning)`: Provides a distraction-free, full-height dark layout for the video lesson player.
2. **Dynamic Segments `[id]`**:
   - Captures entity identifiers like course slugs or instructor IDs.
   - Pairs with `notFound()` and `not-found.tsx` to handle non-existent IDs.
3. **Catch-All Segments `[...slug]`**:
   - Handles multi-segment URLs such as `/categories/web-development/frontend/react`.
4. **Optional Catch-All Segments `[[...slug]]`**:
   - Matches both `/filter` (undefined slug) and `/filter/beginner/free` (array of slugs).
5. **Layouts, Loading & Error Handling**:
   - Granular `loading.tsx` skeletons for instant visual feedback.
   - Client-side `error.tsx` boundaries to gracefully recover from rendering errors.
   - Dedicated `not-found.tsx` components.