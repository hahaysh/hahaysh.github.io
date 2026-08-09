# Portfolio Site Maintenance Guide (hahaysh.github.io)

## Overview
Personal professional portfolio site built with **Astro** static site generator, deployed on **GitHub Pages**. 
- **Live URL**: https://hahaysh.github.io
- **Repository**: github.com/hahaysh/hahaysh.github.io
- **Stack**: Astro + TypeScript + GitHub Pages
- **Data Source**: Centralized `src/lib/data.ts`

---

## 📁 Project Structure

```
hahaysh.github.io/
├── src/
│   ├── lib/
│   │   └── data.ts              # ⭐ CENTRAL DATA HUB - All site content
│   ├── pages/                   # Astro pages (.astro files)
│   │   ├── index.astro          # Home page
│   │   ├── about.astro          # About page (career journey)
│   │   ├── certifications.astro # Certifications page
│   │   ├── training.astro       # Training statistics
│   │   ├── expertise.astro      # Expertise areas
│   │   ├── portfolio.astro      # Portfolio projects grid
│   │   ├── portfolio/           # Individual project pages
│   │   └── contact.astro        # Contact form
│   ├── components/              # Reusable Astro components
│   ├── layouts/                 # Layout templates
│   └── assets/                  # Static assets
├── public/
│   ├── images/
│   │   ├── badges/              # ⭐ BADGE IMAGES (13 PNG files)
│   │   ├── profile/             # Profile photos
│   │   └── projects/            # Project screenshots
│   └── ...
├── package.json
├── astro.config.mjs
└── README.md
```

---

## 🔧 Key Data Structure (src/lib/data.ts)

### Core Exports
```typescript
export const siteConfig        // Name, title, email, social links
export const bio               // short & long biography
export const stats             // Career statistics (experience, MVP, training sessions)
export const expertise         // 4 expertise areas
export const certifications    // ⭐ Microsoft certifications (active + legacy)
export const otherCertifications // Non-Microsoft certs (OCP, MCP, MCSE, MCDBA, 정보처리기사)
export const trainingByYear    // Training sessions per year (2020-2026)
export const trainingTracks    // 5 MCT training specializations
export const trainingClients   // Enterprise clients trained
export const startupExperience // 3 startup companies with projects
export const awards            // Awards & recognition
export const publications      // Published works
```

### Certifications Array Structure
```typescript
{
  title: "Microsoft Certified: Azure Solutions Architect Expert",
  status: "active",                              // active | legacy
  badgeUrl: "/images/badges/Azure Solutions Architect.png",
  badge: "🏗️",                                  // Fallback emoji
  note: "optional: validity period or special note"
}
```

---

## 📅 Maintenance Tasks by Frequency

### 🔴 Annual (November) - MCT Renewal Check
**When**: MCT validity period approaches expiration  
**Action**:
1. Verify MCT status on [Microsoft Learn](https://learn.microsoft.com/en-us/training/mctrenewal/)
2. Update `siteConfig.title` if needed
3. Update `certifications` array MCT entry `note` field
4. Example: `note: "2019-2027"` (update year)

**File to Edit**: `src/lib/data.ts` (lines 132-139)

### 🟠 Quarterly (March, June, Sept, Dec) - Certification Sync
**When**: Credly profile updated, new certifications earned, certifications expire  
**Action**:
1. Visit [Credly.com - My Badges](https://www.credly.com/users/hahahaysh/badges)
2. Compare against `certifications` array in data.ts
3. For new certs:
   - Add to active array with `status: "active"`
   - Get badge URL from Credly (PNG format preferred)
   - Download badge PNG to `/public/images/badges/`
   - Add entry with `badgeUrl` pointing to local file
4. For expired certs:
   - Move to end of array with `status: "legacy"` (no badgeUrl needed)

**Files to Edit**: `src/lib/data.ts`, badge images in `/public/images/badges/`

### 🟡 Quarterly (Jan, Apr, Jul, Oct) - Training Statistics Update
**When**: Year-end compilation or quarterly review  
**Action**:
1. Compile training session counts from:
   - Microsoft Activity folder (delivery records)
   - Training client communications
2. Update `trainingByYear` array
3. Update current year entry:
   ```typescript
   { 
     year: 2026, 
     sessions: 29, 
     courses: [...],
     inProgress: true,  // if year not complete
     note: "estimated from Activity folder records through August 2026"
   }
   ```
4. Update `stats` array `value: "270+"` if session count changes significantly

**File to Edit**: `src/lib/data.ts` (lines 48-59, 37-42)

### 🟢 Ad-Hoc - Content & Bio Updates
**When**: Career milestones, major projects, bio refresh needed  
**Action**:
1. Update `bio.short` or `bio.long` as needed
2. Update `expertise` array if focus areas change
3. Add projects to `startupExperience` or create new portfolio project
4. Update `awards` array if new recognition received
5. Add `publications` if new articles published

**Files to Edit**: `src/lib/data.ts`, `src/pages/about.astro`

---

## 🚀 Deployment & Local Development

### Local Development
```bash
# Install dependencies
npm install

# Start dev server (http://localhost:4321)
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview
```

### Deployment
Portfolio automatically deploys on push to master branch via GitHub Actions:

```bash
# Make changes
git add -A
git commit -m "docs: [description of change]"

# Push to deploy
git push origin master

# Site updates within 2-3 minutes
```

### Build Verification
```bash
npm run build
# Look for: "[build] ✔ Complete!" 
# All 15 pages should build successfully
```

---

## 📊 Badge Images Maintenance

### Current Badge Count: 13
Located in: `/public/images/badges/`

**Active Badges (13)**:
- Azure Solutions Architect.png
- DevOps Engineer.png
- Azure AI Engineer.png
- Azure Developer.png
- Azure Administrator.png
- Azure Security Engineer.png
- Azure Network Engineer.png
- Identity and Access Administrator.png
- Azure AI Fundamentals.png
- Azure Fundamentals.png
- GitHub Copilot.png
- MCT.png
- (Any new certifications)

### Adding New Badges
1. Earn certification through Microsoft Learn or GitHub
2. Download badge PNG from Credly
3. Place in `/public/images/badges/` with clear naming
4. Add entry to `certifications` array:
   ```typescript
   {
     title: "New Certification Name",
     status: "active",
     badgeUrl: "/images/badges/New Certification.png",
     badge: "🆕"  // Appropriate emoji
   }
   ```
5. Commit and push

### Troubleshooting Badge Display
- **Issue**: Badge not showing  
  **Solution**: Verify badge PNG exists in `/public/images/badges/` and filename matches exactly in `badgeUrl`
- **Issue**: Badge loading slowly  
  **Solution**: Compress PNG using online tool, keep under 50KB
- **Issue**: Old badge showing after update  
  **Solution**: Clear browser cache (Ctrl+Shift+Del) or do hard refresh (Ctrl+F5)

---

## 🔒 Personal Information Policy

### What's Included (Public)
- ✅ Name (SungHo You)
- ✅ Public email (hahaysh@hotmail.com)
- ✅ GitHub profile link
- ✅ LinkedIn profile link
- ✅ Professional experience & achievements
- ✅ Published training materials & certifications

### What's NOT Included (Protected)
- ❌ Phone number
- ❌ Home address
- ❌ Passport/ID numbers
- ❌ Banking information
- ❌ Personal family details (except general mention)
- ❌ Private client information (only aggregate counts)

### Before Committing
Always review commits for:
```bash
git diff HEAD~1  # Review changes before push
# Look for: phone, address, SSN, API keys, tokens
```

---

## 🛠️ Common Maintenance Tasks

### Task: Update Bio
**When**: After major career milestone  
**File**: `src/lib/data.ts` (lines 15-29)  
**How**: Edit `bio.long` property - keep conversational, warm tone

### Task: Add Portfolio Project
**When**: Completed new client engagement or significant project  
**File**: `src/lib/data.ts` + `src/pages/portfolio/` + new page  
**How**: 
1. Add to `startupExperience` array with details
2. Create new `[project-name].astro` in `src/pages/portfolio/`
3. Reference in portfolio grid

### Task: Update Stats
**When**: Training milestone reached (e.g., 300+ sessions)  
**File**: `src/lib/data.ts` (lines 37-42)  
**How**: Update `stats` array values and labels

### Task: Change Site Title/Description
**When**: Rebranding or major focus shift  
**File**: `src/lib/data.ts` (lines 1-12)  
**How**: Update `siteConfig.title` and `siteConfig.description`

### Task: Add Award/Recognition
**When**: Received new award or speaking engagement  
**File**: `src/lib/data.ts` (line 202+)  
**How**: Add entry to `awards` array with title and period

---

## 📝 Git Commit Message Format

Follow conventional commit format:

```bash
# Feature
git commit -m "feat: add new certification badge"

# Documentation update
git commit -m "docs: update bio and career statistics"

# Bug fix
git commit -m "fix: correct badge image URL"

# Refactor data structure
git commit -m "refactor: reorganize certification categories"
```

---

## ⚠️ Known Limitations & Considerations

1. **Training Statistics**: 2026 counts estimated through August. Will need final reconciliation.
2. **Credly Sync**: Manual process. Consider automation if managing multiple badge sources.
3. **Startup Data**: Historical companies (XDNSoft, Developience) - limited public details available.
4. **Portfolio Projects**: Descriptions kept general for confidentiality. Specific technical details limited.

---

## 📞 Support & Questions

- **Astro Docs**: https://docs.astro.build
- **GitHub Pages Setup**: https://docs.github.com/en/pages
- **Microsoft Learn Profile**: https://learn.microsoft.com
- **Credly Profile**: https://www.credly.com/users/hahahaysh/badges

---

## Checklist for Safe Deployment

Before pushing changes:
- [ ] Local build passes (`npm run build`)
- [ ] All links working in preview (`npm run preview`)
- [ ] No personal data exposed in changes
- [ ] Badge images load properly
- [ ] Commit message is descriptive
- [ ] No node_modules or .env files included

After pushing:
- [ ] GitHub Actions deployed successfully (check Actions tab)
- [ ] Website live at https://hahaysh.github.io
- [ ] All pages loading correctly
- [ ] Clear browser cache if needed to see changes

---

**Last Updated**: August 9, 2026  
**Maintenance Status**: ✅ Current and operational
