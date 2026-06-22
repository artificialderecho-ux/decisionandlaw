# SEO Runbook (Post-Production)

This runbook is for ongoing indexation health on Decision&Law.

## 1) Deploy-day checks (T+0)

Run after each production deploy:

```bash
npm run seo:smoke
```

Expected:
- `sitemap.xml` is reachable.
- `robots.txt` includes a `Sitemap:` directive.
- `/`, `/news`, `/tools`, `/tracker/state` return `200`.

If this fails:
1. Verify deployment domain / DNS target.
2. Check CDN/WAF rules for crawler endpoints (`/sitemap.xml`, `/robots.txt`).
3. Re-run smoke check against explicit URL:
   ```bash
   bash scripts/seo-smoke-check.sh https://decisionandlaw.com
   ```

---

## 2) Search Console weekly checklist

Frequency: every Monday.

### Coverage
- **Report:** Indexing > Pages
- **Target:** No increase in `Crawled - currently not indexed` for state/tool URLs.
- **Action trigger:** If increased by >10% week-over-week, inspect templates and internal links.

### Sitemaps
- **Report:** Indexing > Sitemaps
- **Target:** `Success` status, recent fetch date.
- **Action trigger:** If stale or failed, resubmit and inspect sitemap endpoint response.

### Performance
- **Report:** Performance > Search results
- Filter by directory:
  - `/tracker/state/`
  - `/tools/`
  - `/news/`
- **Target trend:**
  - impressions up week-over-week,
  - CTR stable or up,
  - average position stable or improving.

---

## 3) Core Web Vitals monthly check

Frequency: first business day of month.

### Use
- PageSpeed Insights
- Search Console Core Web Vitals report

### KPI thresholds
- LCP < 2.5s
- INP < 200ms
- CLS < 0.1

If below target:
1. Review largest content element(s) on state and article templates.
2. Check image dimensions and lazy-loading.
3. Review blocking third-party scripts.

---

## 4) Metadata/schema regression spot-check

Frequency: weekly sample (5 URLs).

For each URL type:
- 2 state URLs (`/tracker/state/...`)
- 1 tool URL (`/tools/...`)
- 2 article URLs (`/news/...`)

Verify:
- Canonical present and self-referential.
- OpenGraph title/description/image present.
- Twitter card present.
- JSON-LD parses without errors (Rich Results / schema validator).
- Breadcrumb JSON-LD present where applicable.

---

## 5) Incident response (SEO)

If indexation drops suddenly:
1. Run `npm run seo:smoke`.
2. Check robots/canonical changes in latest deploy.
3. Compare sitemap URL count before/after deploy.
4. Validate 5 affected URLs with live URL inspection in GSC.
5. Roll back template-level SEO changes if needed.

---

## 6) Ownership

- Engineering: template metadata, sitemap, robots, structured data, performance.
- Content/SEO: query mapping, topical clusters, internal linking, CTR improvements.
- Cadence: weekly sync with dashboard snapshot (Coverage + Performance + CWV).
