# TDR Electronic — storefront prototype (CLIENT BUILD)

> ## CLIENT BUILD. DO NOT PUBLISH.
>
> This build carries TDR's real name, address and phone number. It is the version
> you show the client. It is deliberately **not a git repo** and has **no Vercel
> config**, so it cannot be deployed by accident.
>
> The de-branded build the developer sees lives in `example-shop-v6/` and is
> public at https://exampleecom-com.vercel.app. Keep them separate.

A front-end prototype for a refurbished phone retailer: certified preowned
handsets, graded A to C, with trade in, instalments and WhatsApp led lead capture.

**This is a design and UX prototype, not a production build.** There is no
backend. Nothing is stored, nothing is sent, and every price, stock count and
review is invented.

---

## Run it

No build step, no dependencies. Any static server works.

```bash
node server.js 4441
```

Then open:

- Storefront — http://localhost:4441
- Internal dashboard — http://localhost:4441/dashboard.html

`server.js` is a zero dependency static file server for local preview only. It is
not intended for production.

---

## What is in here

```
index.html            storefront
dashboard.html        internal analytics view, fictional data
server.js             local preview server
assets/css/
  style.css           base system: tokens, layout, components
  v5.css              deal carousel, offer rail, cart bar
  v6.css              hero rebuild, price block, trade in, gift tile
  i18n.css            script fonts, RTL mirroring, brand picker, switcher
  dash.css            dashboard only
assets/js/
  i18n.js             four language dictionaries, RTL and the switcher
  main.js             all storefront behaviour
  dash.js             dashboard behaviour
assets/img/p/         product photography, <model>-<colour>.jpg
assets/img/logo/      brand and payment marks
assets/img/brand/     Apple, Samsung, Xiaomi, Huawei as alpha masks
assets/img/flag/      language flags for the switcher
assets/fonts/         self hosted Arabic, Devanagari and Nastaliq woff2
assets/img/acc/       accessory photography
assets/img/dirham.png UAE dirham glyph, alpha mask
```

The CSS is layered rather than merged, so each round of changes stays readable
against the one before it. Worth flattening before production.

---

## Things worth knowing before you change anything

**Layout.** Flex and grid children carry `min-width: 0` in several places. That is
deliberate. Without it a 522px product image refuses to shrink and forces the hero
grid column wider than a phone screen. Removing those declarations reintroduces a
layout break that `document.scrollWidth` checks will not catch, because the hero
clips its overflow.

**Product images.** Studio shots on white, composited with
`mix-blend-mode: multiply` over white cards rather than being cut out. They must
sit on a light surface. On the dark hero they are placed on a white card for this
reason.

**Colour swapping.** Product cards load a single image and swap its `src`, with the
remaining colourways preloaded on first pointer or touch. The hero and the product
drawer stack all colourways and cross fade, which is fine there because only one
product is on screen. Do not apply the stacked approach to the grid; it pulled
roughly forty images before anything was readable.

**The dirham glyph.** `assets/img/dirham.png` is an alpha mask, not a picture. It
is painted with `background: currentColor` through `mask-image`, so it inherits
whatever colour the surrounding text is. The same technique is used for the trade
in icon.

**Prices.** Every figure renders through one helper in `main.js`:

```js
var D = '<i class="dh" aria-hidden="true"></i>';
```

**Tunable business rules** sit in one object near the top of `main.js`:

```js
var RULES = {
  freeDeliveryOver: 2000,
  savingsBannerMin: 111,
  promo: { code: 'WELCOME100', off: 100, minSpend: 800 }
};
```

---

## Accessibility

Text colours were checked by computation rather than by eye, including against the
hero gradient's lightest point. All pairs meet WCAG AA. Interactive targets are at
least 24px, most at least 38px. `prefers-reduced-motion` disables the carousel
auto advance, the offer rail and the gift tile animations.

Keep that standard if you extend it. Contrast was scripted, not guessed.

---

## Known limits

- No backend. Refreshing clears the cart. Forms confirm without sending.
- All commercial data is fictional.
- Three interior photographs (`store`, `storefloor`, `counter`) are stock images of
  premises belonging to another company. They are placeholders and **must be
  replaced** with the retailer's own photography before any public launch.
- Product imagery and brand marks are manufacturer assets. Confirm licensing
  before publishing.
