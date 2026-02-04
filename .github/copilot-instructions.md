# Copilot Instructions for UCSC Events Calendar Documentation

## Project Overview

This is a **Jekyll-based GitHub Pages documentation site** for the UC Santa Cruz Events Calendar (Localist platform). The site is built from the `/docs` directory and deployed via GitHub Actions workflow.

**Live site:** https://ucsc.github.io/events-calendar/  
**Calendar app:** https://calendar.ucsc.edu/

## Architecture & Structure

### Jekyll Configuration

- Remote theme: `pages-themes/cayman@v0.2.0`
- Source directory: `/docs` (configured in `.github/workflows/jekyll-gh-pages.yml`)
- Custom admin contact info defined in `_config.yml` under `admin:` key
- Plugins: jekyll-remote-theme, jekyll-seo-tag, jekyll-sitemap, jekyll-assets

### Content Organization

- Documentation pages are **flat Markdown files** in `/docs` root (e.g., `create-calendar-account.md`)
- Navigation structure defined in `/docs/_data/nav.yml` - update this when adding new pages
- All pages use `layout: default` and require `title:` frontmatter
- Images stored in `/docs/assets/images/`

### Custom Components

- **UCSC Header/Footer:** Uses web components `<trss-ucsc-header>` and `<trss-ucsc-footer>` (external dependency)
- **Breadcrumbs:** Auto-generated from URL structure via `/docs/_includes/breadcrumbs.html`
- **Contact Info:** Reusable include that pulls from `site.admin.*` config variables
- **Responsive Navigation:** Separate mobile (`navigation-mobile.html`) and desktop (`navigation.html`) includes

### Styling Architecture

- Main entry: `/docs/assets/css/style.scss` imports Cayman theme + custom styles
- Custom SCSS modularized in `/docs/_sass/` with partial files:
  - `_variables.scss` - Design tokens
  - `_navigation.scss`, `_breadcrumbs.scss`, `_page.scss` - Component styles
  - `site-styles.scss` - Import manifest for all partials
- Follow existing pattern: create partial `_*.scss` files and import in `site-styles.scss`

## Development Workflows

### Local Testing

```bash
cd docs
bundle install          # First time only
bundle exec jekyll serve
# Site available at http://localhost:4000/events-calendar/
```

### Adding New Documentation Pages

1. Create `.md` file in `/docs` root with frontmatter:
   ```yaml
   ---
   layout: default
   title: Your Page Title
   ---
   ```
2. Add entry to `/docs/_data/nav.yml` navigation array
3. Link between pages using relative URLs: `[text](filename.html)`

### Modifying Layouts

- Single layout: `/docs/_layouts/default.html`
- Shows breadcrumbs on all pages except homepage (`unless page.home`)
- Desktop/mobile navigation toggle using CSS (check `_layout.scss`)

## Project-Specific Conventions

### Image References

Use relative paths from page location: `![alt-text](assets/images/filename.png)`

### Contact Information

Never hardcode contact details - reference `site.admin.*` variables from `_config.yml`

### UCSC Branding

Web components for header/footer are external dependencies. Don't attempt to modify their styles directly - they use shadow DOM with CSS custom properties like `--trss-content-width`

### Frontmatter Requirements

- `layout: default` - Required for all pages
- `title:` - Required, used for page heading and breadcrumbs
- `home: true` - Only for index.md to hide breadcrumbs
- `order:` - Optional, legacy attribute (not currently used)

## Common Tasks

### Update Navigation

Edit `/docs/_data/nav.yml` - array of `title` and `url` pairs under `navigation:` key

### Add Custom Styling

1. Create partial in `/docs/_sass/_component-name.scss`
2. Import in `/docs/_sass/site-styles.scss`
3. No need to modify `/docs/assets/css/style.scss` (it auto-imports)

### Modify Contact Box

Edit admin variables in `/docs/_config.yml` under `admin:` section

## Deployment

- **Automatic:** Pushes to `main` branch trigger GitHub Actions workflow
- Workflow: `.github/workflows/jekyll-gh-pages.yml`
- Build uses `actions/jekyll-build-pages@v1` with source `./docs`
- No manual deployment needed
