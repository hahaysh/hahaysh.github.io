# SungHo You's Professional Portfolio

A modern, fast, and accessible professional portfolio site showcasing 20+ years of cloud architecture, DevOps, and AI expertise.

**Live Site**: https://hahaysh.github.io  
**Repository**: github.com/hahaysh/hahaysh.github.io  
**Built With**: Astro + TypeScript + GitHub Pages  
**Last Updated**: August 2026

---

## 📋 Quick Overview

This is a personal professional portfolio site featuring:
- **About**: Career journey, MVP recognition, and professional background
- **Certifications**: 13 active Microsoft certifications with badge display
- **Training**: Training delivery statistics (2020-2026) and specializations
- **Portfolio**: Notable client projects and technical achievements
- **Expertise**: Core competencies in cloud architecture, DevOps, AI, and training
- **Contact**: Contact form and social media links

**Key Features**:
- ✨ Fast static site (Astro)
- 🎨 Responsive design with dark mode support
- 🔄 Centralized content management (`src/lib/data.ts`)
- 📦 Automatic deployment via GitHub Pages
- ♿ Accessibility-first design

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation & Development

```bash
# Clone repository
git clone https://github.com/hahaysh/hahaysh.github.io.git
cd hahaysh.github.io

# Install dependencies
npm install

# Start local dev server
npm run dev
# Open http://localhost:4321 in browser

# Build for production
npm run build

# Preview production build
npm run preview
```

### Common Commands

| Command | Action |
|---------|--------|
| `npm run dev` | Start dev server at `localhost:4321` |
| `npm run build` | Build production site to `./dist/` |
| `npm run preview` | Preview production build locally |
| `npm run astro check` | Type checking and validation |

---

## 📁 Project Structure

```
hahaysh.github.io/
├── src/
│   ├── lib/
│   │   └── data.ts                 # ⭐ CENTRAL DATA HUB - All content
│   ├── pages/
│   │   ├── index.astro             # Home page
│   │   ├── about.astro             # About & career journey
│   │   ├── certifications.astro    # Microsoft certifications
│   │   ├── training.astro          # Training statistics & tracks
│   │   ├── expertise.astro         # Core competencies
│   │   ├── portfolio.astro         # Portfolio projects grid
│   │   ├── portfolio/
│   │   │   ├── [project-name].astro # Individual project pages
│   │   │   ├── samsung-s1.astro
│   │   │   ├── kt-azure-migration-workshop.astro
│   │   │   └── ...
│   │   └── contact.astro           # Contact page
│   ├── components/
│   │   ├── Header.astro            # Navigation header
│   │   ├── Footer.astro            # Footer with links
│   │   └── ...                     # Reusable components
│   ├── layouts/
│   │   └── BaseLayout.astro        # Base page layout template
│   └── assets/                     # CSS, fonts, etc.
├── public/
│   ├── images/
│   │   ├── badges/                 # ⭐ Certification badge PNG files (13)
│   │   ├── profile/                # Profile photos
│   │   └── projects/               # Project screenshots
│   ├── favicon.svg
│   └── robots.txt
├── astro.config.mjs
├── package.json
├── tsconfig.json
├── README.md                       # This file
└── PORTFOLIO_MAINTENANCE_GUIDE.md  # Detailed maintenance instructions

```

### Key Files Explained

**`src/lib/data.ts`** - Central data hub
- All site content, configuration, and structured data
- Contains: bio, certifications, training stats, projects, awards, etc.
- Edit this file to update content across the entire site
- Single source of truth for all portfolio information

**`public/images/badges/`** - Certification badges
- 13 PNG badge images from Microsoft/GitHub
- Referenced in `certifications` array in data.ts
- Keep file names consistent with `badgeUrl` entries

**`src/pages/`** - Page templates
- Each `.astro` file is a route: `about.astro` → `/about`
- Portfolio projects are in `portfolio/` subfolder
- Use TypeScript for type safety

---

## 📊 Content Management

### Updating Content

All site content is centralized in **`src/lib/data.ts`**:

```typescript
export const siteConfig         // Site metadata, email, social links
export const bio                // Short & long professional biography
export const stats              // Career statistics
export const certifications     // Microsoft certs (active + legacy)
export const trainingByYear     // Training sessions per year
export const trainingTracks     // MCT training specializations
export const expertise          // Core competencies
export const startupExperience  // Startup companies & projects
export const awards             // Awards & recognition
export const publications       // Published works
```

### Example: Adding a Certification

1. Earn certification and receive badge from Credly
2. Download PNG to `/public/images/badges/Your Cert Name.png`
3. Add entry to `certifications` array in `src/lib/data.ts`:
   ```typescript
   {
     title: "Microsoft Certified: [Certification Name]",
     status: "active",  // or "legacy"
     badgeUrl: "/images/badges/Your Cert Name.png",
     badge: "🏆"  // Emoji fallback
   }
   ```
4. Commit and push

### Example: Adding a Portfolio Project

1. Add project details to `startupExperience` array in `src/lib/data.ts`
2. Create new page: `src/pages/portfolio/project-name.astro`
3. Project automatically appears in portfolio grid at `/portfolio`

---

## 🔧 Maintenance & Updates

### Quarterly Checklist

- [ ] **Certifications**: Verify on Credly, update status in data.ts
- [ ] **Training Stats**: Compile session counts, update trainingByYear
- [ ] **Badge Images**: Check all badge URLs load properly
- [ ] **Bio Content**: Review and update as needed
- [ ] **Links**: Verify all external links still work

### Annual Tasks

- [ ] MCT renewal check (expiry: 2026)
- [ ] Update training client list if changed
- [ ] Review and refresh portfolio projects
- [ ] Audit for broken images or links

### Before Deploying

```bash
# Local build verification
npm run build
# Should complete with no errors

# Preview changes
npm run preview

# Check for broken links
# Review git diff for any unintended changes
git diff HEAD~1

# No sensitive data in changes
# No API keys, phone numbers, or passwords
```

---

## � Multilingual Support (다국어 지원)

This portfolio supports **Korean (primary) and English (secondary)** with proper language-based routing and content management.

### Language Architecture

- **Primary Language**: Korean (default content language)
- **Secondary Language**: English (synced from Korean)
- **Routing**: Path-based language detection (`/` for Korean, `/en/` for mirrored English)
- **Content Structure**: Primary data files (`data.ts` for Korean, `data.en.ts` for English)

### File Structure

```
src/
├── lib/
│   ├── i18n.ts           # ⭐ Multilingual utilities (routing, translations)
│   ├── data.ts           # �🇷 Korean content (PRIMARY)
│   └── data.en.ts        # 🇬🇧 English content (SECONDARY)
├── pages/
│   ├── index.astro       # Korean: /
│   ├── about.astro       # Korean: /about
│   ├── portfolio/        # Korean portfolio detail pages
│   ├── en/               # English pages folder, synced to Korean structure
│   │   ├── index.astro   # English: /en/
│   │   ├── about.astro   # English: /en/about
│   │   └── ...           # All pages mirrored
│   └── ...
└── components/
    └── Header.astro      # Language switcher UI + multilingual nav
```

### Multilingual Workflow Rules

**🔴 RULE 1: Always update Korean version first**
- Edit content in `src/lib/data.ts` (Korean source - PRIMARY)
- Make all structural or data changes here
- Korean is the single source of truth

**🟢 RULE 2: English version syncs afterward**
- Update corresponding translations in `src/lib/data.en.ts`
- Key structure must remain identical to Korean
- Follow English-specific naming/terminology conventions

**🟡 RULE 3: Keep data structure synchronized**
- Both files must export identical keys and object structures
- Never add Korean-only or English-only exports
- This enables seamless component code reuse

**Example: Adding a new certification**

1. **Update Korean (data.ts) FIRST:**
   ```typescript
   export const certifications = [
     // ... existing certs ...
     {
       title: "Microsoft 인증: 새 인증 2026",
       status: "active",
       badgeUrl: "/images/badges/new-cert-2026.png",
     }
   ];
   ```

2. **Then sync to English (data.en.ts):**
   ```typescript
   export const certifications = [
     // ... existing certs ...
     {
       title: "Microsoft Certified: New Cert 2026",
       status: "active",
       badgeUrl: "/images/badges/new-cert-2026.png",
     }
   ];
   ```

3. **The certification automatically appears in:**
   - `/certifications` (Korean)
   - `/en/certifications` (English)

### Language Switcher

- Located in header on every page
- Displays as "En / 한국어" toggle button
- Automatically switches between `/` ↔ `/en/`
- Preserves current page context during switch
- Dark mode and responsive design included

### Translation Utilities

The `i18n.ts` module provides helper functions for multilingual pages:

```typescript
// Get current language from URL path
const language = getLanguageFromPath('/en/about');  // Returns: 'en'

// Convert path between languages
const koPath = getLocalizedPath('/en/about', 'ko'); // Returns: '/about'
const enPath = getLocalizedPath('/about', 'en');     // Returns: '/en/about'

// Get language switcher link
const toggleLink = getSwitcherLink('ko', '/about'); // Returns: '/en/about'

// Translate UI labels
const label = t('About', 'ko');  // Returns: '소개'
```

### Adding New Pages

When adding a new page to the portfolio:

1. Create Korean version first: `src/pages/[page-name].astro`
   - Import: `import * as data from '../lib/data'`
   - Header: `<Header currentPage="/[page-name]" lang="ko" />`

2. Create the synced English version: `src/pages/en/[page-name].astro`
   - Import: `import * as data from '../../lib/data.en'`
   - Header: `<Header currentPage="/en/[page-name]" lang="en" />`

3. Use identical component structure in both versions

### Maintenance Reminders

- **Content Updates**: Always edit Korean version (`data.ts`) first
- **Quarterly Review**: Check English translations haven't diverged significantly
- **Badge Files**: Reference paths are identical in both languages
- **Links**: Update both `/` and `/en/` paths when adding new routes
- **Testing**: Build and preview both language versions before deploying

```bash
# To test multilingual build:
npm run build
# Verify both root and /en/ routes in dist/

npm run preview
# Navigate to:
# - http://localhost:3000/
# - http://localhost:3000/en/
```

---

## �🌐 Deployment

### Automatic Deployment (GitHub Pages)

Site automatically deploys when pushing to `master` branch:

```bash
git add -A
git commit -m "docs: update certifications"
git push origin master
# Site updates within 2-3 minutes
```

### GitHub Actions Workflow
- Trigger: Push to master branch
- Action: Build site with `npm run build`
- Deploy to GitHub Pages (https://hahaysh.github.io)
- Check `.github/workflows/` for configuration

### Manual Deployment

If GitHub Actions fails:
```bash
npm run build
# Commit dist/ folder or contact repo admin
```

---

## 📝 Data Schema Reference

### Certifications Array

```typescript
interface Certification {
  title: string;           // Full certification name
  status: "active" | "legacy";  // Current status
  badgeUrl?: string;       // Path to badge PNG (/images/badges/...)
  badge?: string;          // Emoji fallback if no image
  note?: string;           // Optional note (e.g., validity period)
}
```

### Training Tracks

```typescript
interface TrainingTrack {
  id: string;
  title: string;
  icon: string;            // Emoji
  examCodes: string[];     // Microsoft exam codes
  description: string;
}
```

### Startup Experience

```typescript
interface Startup {
  id: string;
  company: string;
  position: string;
  period: string;          // Date range
  description: string;
  keyProjects?: Project[];
  achievements?: string[];
}
```

For complete schema, see: `src/lib/data.ts`

---

## 🔒 Privacy & Security

### What's Public
- ✅ Name, email (hahaysh@hotmail.com)
- ✅ GitHub & LinkedIn profiles
- ✅ Professional experience & certifications
- ✅ Training statistics (aggregate counts)

### What's Never Included
- ❌ Phone number
- ❌ Home address
- ❌ Passwords or API keys
- ❌ Sensitive client information
- ❌ Private family details

### Pre-Commit Checklist
```bash
# Review changes before pushing
git diff HEAD~1

# Look for: phone, address, SSN, API_KEY, token, password
```

---

## 🛠️ Tech Stack

- **Framework**: [Astro](https://astro.build) - Static site generator
- **Language**: TypeScript
- **Styling**: CSS (no framework)
- **Hosting**: GitHub Pages
- **Deployment**: GitHub Actions (automatic)
- **Version Control**: Git/GitHub

### Why Astro?
- ⚡ Fast (static HTML)
- 🎯 SEO-friendly
- 📦 Minimal JavaScript
- 🔧 Easy content management
- 🌐 GitHub Pages compatible

---

## 📚 Additional Resources

### Documentation
- [Astro Documentation](https://docs.astro.build)
- [GitHub Pages Setup](https://docs.github.com/en/pages)
- [Microsoft Learn Profile](https://learn.microsoft.com)
- [Credly Badges](https://www.credly.com)

### Maintenance Docs
- **[PORTFOLIO_MAINTENANCE_GUIDE.md](PORTFOLIO_MAINTENANCE_GUIDE.md)** - Detailed maintenance & update procedures
- Session notes: `/memories/session/portfolio-update-summary.md`

---

## 🐛 Troubleshooting

### Build Fails
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
npm run build
```

### Badges Not Showing
- Check badge PNG exists in `/public/images/badges/`
- Verify filename matches `badgeUrl` in data.ts exactly
- Clear browser cache (Ctrl+Shift+Del)

### Changes Not Appearing
- Hard refresh (Ctrl+F5)
- Check if GitHub Actions deployment completed
- Verify changes were pushed to master branch

### TypeScript Errors
```bash
npm run astro check
# Review and fix any type errors before building
```

---

## 📝 Recent Updates

| Date | Change | Details |
|------|--------|---------|
| Aug 2026 | Content tone refresh | Bio rewritten with personal touch |
| Aug 2026 | MCT certification | Updated validity to 2019-2026 |
| Aug 2026 | Badge integration | 13 PNG badge images integrated |
| Aug 2026 | Cert status sync | 3 renewed certs restored to active |

See full history: `git log --oneline`

---

## 👤 About This Portfolio

**SungHo You** - Microsoft Certified Trainer & Cloud/DevOps Specialist
- 20+ years IT experience
- 15-year Microsoft C# MVP (2005-2019)
- 270+ training sessions delivered
- Enterprise cloud architecture, DevOps transformation, AI solutions

[Visit Portfolio](https://hahaysh.github.io)

---

## 📞 Questions or Contributions?

- **Email**: hahaysh@hotmail.com
- **GitHub**: [@hahaysh](https://github.com/hahaysh)
- **LinkedIn**: [SungHo You](https://www.linkedin.com/in/hahahaysh/)

---

**Status**: ✅ Actively maintained  
**Last Build**: Successful  
**Next Review**: Q4 2026
