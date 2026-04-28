# Images Folder

This folder holds **all images** used by the website. Keeping them here keeps `index.html` clean and small.

## Files referenced by the site

Replace these with real photos by simply saving files of the same name into this folder:

| Filename | Where it appears | Suggested size |
|---|---|---|
| `logo.png` | Top-left navbar logo | 200×200, transparent PNG |
| `hero-students.jpg` | Big card on the hero section | 800×1000 (portrait) |
| `about-1.jpg` | Large about-section photo | 800×900 |
| `about-2.jpg` | Smaller overlapping about photo | 600×500 |
| `principal.jpg` | Principal portrait | 600×800 (portrait) |
| `g-1.jpg` … `g-8.jpg` | Gallery tiles | 800×800 each |

## Adding more gallery photos

Drop more files in (`g-9.jpg`, `g-10.jpg`, …) and add a matching `<div class="gallery__tile">` block in `index.html`. The gallery layout will adapt automatically.

> **Tip:** keep each image under **300 KB** — use [TinyPNG](https://tinypng.com/) or `cwebp` to compress. Faster site = happier parents.

If a file is missing, the website automatically shows a yellow placeholder tile saying "Gallery 01", "Classroom Photo" etc. — so the layout never breaks.
