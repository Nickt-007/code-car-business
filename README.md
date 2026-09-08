# Aspen Auto

A static website for Aspen Auto, a used car dealership, built with plain HTML, CSS, and JavaScript (no build step required).

## Pages

- `index.html` — Home page with hero, featured vehicles, trust badges, testimonials
- `inventory.html` — Full vehicle inventory with make/type/price filtering
- `about.html` — Dealership story, values, and team
- `contact.html` — Contact form, business info, hours, and map

## Running locally

Just open `index.html` in a browser, or serve the folder with any static server, e.g.:

```
python3 -m http.server 8000
```

Then visit `http://localhost:8000`.

## Customizing

- **Colors/fonts**: edit the CSS variables at the top of `css/style.css`.
- **Business info**: phone, address, email, and hours are repeated in the header/footer of each page — update all instances.
- **Inventory**: vehicle cards live directly in `inventory.html` (and a few featured ones in `index.html`); each card carries `data-make`, `data-type`, and `data-price` attributes used by the filter bar in `js/main.js`.
- **Contact form**: submissions are sent via [FormSubmit](https://formsubmit.co) to the address in the form's `data-endpoint` attribute in `contact.html` — update that email to your real business inbox. The first submission after changing the address triggers a one-time confirmation email from FormSubmit that must be clicked before messages start arriving. No account or API key required; it's free for this volume of traffic.
- **Photos**: vehicle and hero images are placeholder SVG icons. Replace the `.vehicle-photo` / `.hero-visual` blocks with real `<img>` tags once you have photography.
- **Map**: `contact.html` embeds a generic Google Maps search for "Aspen, CO" — swap in your real address once available.
