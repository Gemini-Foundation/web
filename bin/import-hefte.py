#!/usr/bin/env python3
"""Übernimmt die Hefte aus den Projekt-Repos auf die Stiftungsseite.

Kopiert die erzeugten HTML-Dateien nach public/hefte/ und bindet die Schriften lokal ein, statt sie von
Google Fonts zu laden. Die Schriftdateien werden einmal geholt und liegen danach unter public/fonts/hefte/.

    python3 bin/import-hefte.py        (aus dem Verzeichnis web/)
"""
import re
import urllib.request
from pathlib import Path

WEB_DIR = Path(__file__).resolve().parents[1]
REPOSITORIES = WEB_DIR.parents[1]
BOOKLETS = {
    "microboa.html": REPOSITORIES / "microboa" / "flyer" / "microboa-flyer.html",
    "microllm.html": REPOSITORIES / "microllm" / "flyer" / "microllm-flyer.html",
}
FONT_QUERY = ("https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+Condensed:wght@400;600"
              "&family=IBM+Plex+Serif:wght@400;500;700&display=swap")
# Mit dieser Kennung liefert der Dienst woff2 und getrennte Blöcke je Schriftbereich.
BROWSER_AGENT = "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0 Safari/537.36"
WANTED_SUBSETS = ("latin", "latin-ext")
FONT_DIR = WEB_DIR / "public" / "fonts" / "hefte"
FONT_CSS = WEB_DIR / "public" / "css" / "hefte-fonts.css"
BOOKLET_DIR = WEB_DIR / "public" / "hefte"


def fetch(url: str) -> bytes:
    request = urllib.request.Request(url, headers={"User-Agent": BROWSER_AGENT})
    with urllib.request.urlopen(request, timeout=30) as response:
        return response.read()


def build_font_css() -> None:
    """Holt die Schriftdateien für lateinische Zeichen und schreibt die CSS-Datei mit lokalen Pfaden."""
    remote_css = fetch(FONT_QUERY).decode()
    FONT_DIR.mkdir(parents=True, exist_ok=True)
    local_blocks = []
    for subset, block in re.findall(r"/\* ([a-z-]+) \*/\s*(@font-face \{.*?\})", remote_css, flags=re.S):
        if subset not in WANTED_SUBSETS:
            continue
        family = re.search(r"font-family: '([^']+)'", block).group(1)
        weight = re.search(r"font-weight: (\d+)", block).group(1)
        font_url = re.search(r"url\((https://[^)]+)\)", block).group(1)
        file_name = f"{family.lower().replace(' ', '-')}-{weight}-{subset}.woff2"
        font_path = FONT_DIR / file_name
        if not font_path.exists():
            font_path.write_bytes(fetch(font_url))
        local_blocks.append(block.replace(font_url, f"/fonts/hefte/{file_name}"))
    FONT_CSS.write_text("/* Schriften der Hefte, lokal eingebunden. Erzeugt von bin/import-hefte.py. */\n"
                        + "\n".join(local_blocks) + "\n")
    print(f"{len(local_blocks)} Schriftschnitte in {FONT_CSS.relative_to(WEB_DIR)}")


def import_booklets() -> None:
    BOOKLET_DIR.mkdir(parents=True, exist_ok=True)
    for target_name, source_path in BOOKLETS.items():
        html = source_path.read_text()
        html, replaced = re.subn(r'<link rel="preconnect"[^>]*>\n', "", html)
        html, stylesheet_count = re.subn(
            r'<link href="https://fonts\.googleapis\.com/[^"]*" rel="stylesheet">',
            '<link href="/css/hefte-fonts.css" rel="stylesheet">', html)
        if stylesheet_count != 1 or "fonts.googleapis.com" in html or "fonts.gstatic.com" in html:
            raise SystemExit(f"{source_path}: Schrifteinbindung nicht wie erwartet")
        (BOOKLET_DIR / target_name).write_text(html)
        print(f"public/hefte/{target_name} aus {source_path.relative_to(REPOSITORIES)}")


if __name__ == "__main__":
    build_font_css()
    import_booklets()
