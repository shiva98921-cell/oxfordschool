# Oxford International School — Meerut

🎓 **"Make Your Child a GENIUS"** — a stunning, animated, mobile-first website for **Oxford International School, Shatabdi Nagar, Meerut** (Pre-Nursery to Class VIII, Affiliation No. 09071303719).

Built with plain **HTML, CSS and JavaScript** — no build step, no framework, no dependencies. Drop it on GitHub Pages and it works.

---

## ✨ Features

- **Sunshine-yellow + slate-grey palette** matching the school's actual building.
- **Bilingual** — full Hindi tagline `"अच्छी पढ़ाई चाहिए तो सिर्फ ऑक्सफोर्ड ही आइये"` plus English copy.
- **Smooth scroll-reveal animations**, animated counters, marquee strip, floating cards.
- **Sticky navigation** with mobile hamburger menu.
- **Photo Gallery** with masonry-style grid — school can drop in unlimited photos.
- **Affiliation badge** (No. 09071303719) prominently shown — trust signal for parents.
- **Principal's Message** section with portrait + signature.
- **Facilities & Competitions** showcase (Olympiads, Spell Bee, Cultural events, etc.).
- **Quotes section** with school's tagline + Hindi shlokas + Dr. Kalam.
- **Admission form** that sends enquiries directly to school's WhatsApp (no backend needed).
- **Floating WhatsApp button** with pulse animation — always one tap away.
- **Embedded Google Map** of the school's actual location.
- **Image folder isolated** — `index.html` stays clean and small.
- **Fully responsive** — desktop, tablet, mobile.
- **Accessibility-aware** — reduced-motion support, semantic HTML, keyboard-friendly.

---

## 📁 Project Structure

```
oxford-international-school/
├── index.html              ← Main page (all sections, no inline images)
├── css/
│   └── style.css           ← All styling
├── js/
│   └── script.js           ← Animations, form handler, mobile nav
├── images/                 ← All photos — see images/README.md
│   ├── logo.png
│   ├── hero-students.jpg
│   ├── about-1.jpg, about-2.jpg
│   ├── principal.jpg
│   └── g-1.jpg … g-8.jpg
├── README.md               ← This file
└── ANTIGRAVITY_PROMPT.md   ← Prompt for AI-driven future edits
```

---

## 🚀 Deploy to GitHub Pages (5 minutes)

1. **Create a new GitHub repository** named `oxford-international-school` (or anything you like).
2. **Upload these files** — drag the entire folder onto GitHub's web upload, or use:
   ```bash
   git init
   git add .
   git commit -m "Initial site"
   git branch -M main
   git remote add origin https://github.com/<your-username>/oxford-international-school.git
   git push -u origin main
   ```
3. Go to **Settings → Pages**.
4. Under "Source", select **`Deploy from branch`** → **`main`** → **`/ (root)`** → **Save**.
5. Wait ~1 minute. Your site will be live at:
   ```
   https://<your-username>.github.io/oxford-international-school/
   ```
6. (Optional) Buy a domain like `oxfordmeerut.in` from GoDaddy/Namecheap and point it at GitHub Pages — Settings → Pages → Custom Domain.

---

## 🖼️ Adding School Photos

The website looks great even without photos (it shows yellow placeholder tiles), but it really comes alive once real photos are added.

Just drop image files into the `images/` folder using these exact filenames:

| Filename | Where it shows |
|---|---|
| `logo.png` | Navbar logo (top-left) |
| `hero-students.jpg` | Big hero card (homepage) |
| `about-1.jpg`, `about-2.jpg` | About section |
| `principal.jpg` | Principal section |
| `g-1.jpg` … `g-8.jpg` | Gallery tiles |

To add **more** gallery photos, see `images/README.md`.

> **Compress photos to under 300 KB each** using [TinyPNG.com](https://tinypng.com/) — keeps the site lightning fast.

---

## ✏️ Customising Content

Open `index.html` and search for:

| Search for | What to change |
|---|---|
| `[Principal's Name]` | Replace with the actual Principal's name |
| `+91 94584 02733` / `+91 80774 50903` | School phone numbers |
| `09071303719` | Affiliation number |
| `A-59, Sec-5, Near Rail Vihar...` | School address |
| `<option>Pre-Nursery</option>` | Class options in admission form |

For colours, fonts and spacing, see the `:root` block at the top of `css/style.css`.

---

## 🤖 Future changes with Antigravity AI

See `ANTIGRAVITY_PROMPT.md` — paste it into Google Antigravity (or any AI coding assistant) when you want to add new sections, animate something, or change the design. It contains all the design rules, file structure, and constraints in one place.

---

## 📞 School Contact

- **Address:** A-59, Sec-5, Near Rail Vihar, Shatabdi Nagar, Meerut, Uttar Pradesh — 250103
- **Phone:** +91 94584 02733 · +91 80774 50903
- **Hours:** Monday – Saturday, 7:00 AM – 3:00 PM (Sunday closed)
- **Affiliation No:** 09071303719

---

## 📝 License

This site is the property of **Oxford International School, Meerut**. The code template is free to reuse for educational purposes. Feel free to fork and adapt for your own school.

Built with ♥ for the children of Bharat. 🇮🇳
