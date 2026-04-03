#!/usr/bin/env bash
set -euo pipefail

BASE_URL="${1:-https://decisionandlaw.com}"
SITEMAP_URL="${BASE_URL%/}/sitemap.xml"
ROBOTS_URL="${BASE_URL%/}/robots.txt"

printf "SEO smoke check for %s\n" "$BASE_URL"
printf -- "- Fetching sitemap: %s\n" "$SITEMAP_URL"
SITEMAP_CONTENT="$(curl -fsSL "$SITEMAP_URL")"

STATE_URL_COUNT="$(printf "%s" "$SITEMAP_CONTENT" | grep -o "${BASE_URL%/}/tracker/state/[a-z-]*" | wc -l | tr -d ' ')"
TOOL_URL_COUNT="$(printf "%s" "$SITEMAP_CONTENT" | grep -o "${BASE_URL%/}/tools/[a-z0-9-]*" | sort -u | wc -l | tr -d ' ')"
TOTAL_URL_COUNT="$(printf "%s" "$SITEMAP_CONTENT" | grep -o '<url>' | wc -l | tr -d ' ')"

printf -- "- Total sitemap URLs: %s\n" "$TOTAL_URL_COUNT"
printf -- "- State detail URLs in sitemap: %s\n" "$STATE_URL_COUNT"
printf -- "- Tool detail URLs in sitemap: %s\n" "$TOOL_URL_COUNT"

printf -- "- Fetching robots: %s\n" "$ROBOTS_URL"
ROBOTS_CONTENT="$(curl -fsSL "$ROBOTS_URL")"
if ! printf "%s" "$ROBOTS_CONTENT" | grep -qi 'sitemap:'; then
  echo "ERROR: robots.txt does not expose a sitemap directive"
  exit 1
fi

printf -- "- robots.txt includes sitemap directive ✅\n"

printf -- "- Checking key URLs return 200...\n"
for path in "/" "/news" "/tools" "/tracker/state"; do
  code="$(curl -o /dev/null -s -w '%{http_code}' "${BASE_URL%/}${path}")"
  printf "  %s -> %s\n" "$path" "$code"
  if [[ "$code" != "200" ]]; then
    echo "ERROR: ${path} did not return 200"
    exit 1
  fi
done

echo "SEO smoke check finished ✅"
