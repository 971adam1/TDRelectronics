# v9 — Urdu in two faces, model step, back controls, flags, bigger trade in

```bash
node tdr-shop-v9/server.js 4441
```

Storefront `http://localhost:4441` · Dashboard `http://localhost:4441/dashboard.html`

> **Client build. Real name, address and number. Not a git repo, no Vercel config.**

---

## 1. Urdu now uses two faces, not one

You spotted this in the screenshot before I did: the headline was Nastaliq and the
small text had fallen back to a plainer Naskh, and the plainer one read better at
small size. That was an accident of the font stack. It is now deliberate.

| Where | Face |
| --- | --- |
| `h1`, `h2`, section headings, deal titles, the trade in card title | **Noto Nastaliq Urdu** |
| Body copy, buttons, labels, chips, form fields, everything small | **IBM Plex Sans Arabic** (Naskh) |

This is also how Urdu print actually works. Nastaliq is a display face: it slopes
each word downward and hangs deep below the baseline, which reads beautifully at
36px and is cramped and hard to scan at 14px inside a button.

The practical win is that the layout no longer has to loosen for Urdu. The old
build forced `line-height: 2.05` on the whole body and a 52px minimum on every
button to stop descenders clipping. That is gone. Urdu now sits at 1.75 line
height like a normal language, and only the display elements get extra room.

---

## 2. A model step, kept short

Brand alone was too thin for the team to act on, and a full model list would run
to forty entries.

**The flow is now brand, then model, then condition.** The model step offers
**ranges, not handsets**:

| Brand | Options |
| --- | --- |
| Apple | iPhone 16 / 15 / 14 / 13 / 12 series, iPhone 11 or older |
| Samsung | Galaxy S24 or S25, S22 or S23, S21 or older, A series, Fold or Flip, another |
| Xiaomi | Xiaomi 14 or 15, 12 or 13, Redmi Note, Redmi, POCO, another |
| Huawei | P series, Mate series, Nova series, Y series, another |

"iPhone 14 series" covers the Pro, the Pro Max and the Plus in one tap. The exact
variant is a question the team asks in the first WhatsApp message, and they have
to message anyway.

**"Other brand" skips the model step entirely** and the counter adjusts to "Step 1
of 2". Asking which model, when we do not know the make, is a tap that earns
nothing.

The chosen brand stays pinned above the condition step as a small chip with its
logo, so the flow never loses its place.

---

## 3. Back controls on every stepped survey

**Trade in.** Every step past the first has a Back control. Misreading a logo and
being trapped is the fastest way to lose someone who was already half committed.
Back from the condition step returns to the model list with the same brand still
selected; from a brand that skipped the model step it returns to the brands.

**The gift flow** is the other stepped survey on the page, so it got one too.
"Yes, first time" is a single tap away from a form, and there was no way out of it
except closing the whole thing.

**The phone finder did not get one**, and that is deliberate. It shows all three
questions at once, so every answer is already changeable in place. A back button
there would point at nothing.

One layout fix along the way: the Back control first rendered as the first cell of
the model grid, which made it look like one of the phones. It now lives in its own
row above the options.

---

## 4. Flags in the language switcher

| Language | Flag |
| --- | --- |
| English | US / UK |
| العربية | UAE |
| हिन्दी | India |
| اردو | Pakistan |

All four trimmed and normalised to a common height. The trimmer drops a row or
column only while the **whole** of it is uniform white, because the UK, UAE and
India flags all contain white and a naive "not white" trim would eat into them.

The active flag shows on the header trigger in place of the globe.

**One thing I fixed after looking at it:** the Arabic and Urdu rows were mirroring
the whole row, putting the flag on the right and the code on the left while the
English and Hindi rows did the opposite. The menu now always reads flag, name,
code, and only the language *name* carries its own direction. A picker that
mirrors itself looks broken rather than localised.

---

## 5. The trade in card is bigger

It was noticeably smaller than the deal beside it.

- Desktop hero split moved from `1.15fr / 0.85fr` to `1fr / 0.98fr`, so the two
  cards are now near equal width
- Card padding up from 14px to 18px
- Brand tiles 62px to 76px on desktop, logos 30px to 34px
- Model buttons 46px to 52px on desktop

It also grew naturally, since there is a third step in the flow now.

---

## Checked, not assumed

- **16 combinations**: 375, 390, 768, 1440 against all four languages. No overflow,
  correct direction, zero console errors in every one
- **Trade in driven end to end in all four languages**, including back navigation
  at each step and the "Other brand" short path. Step counters correct in each
- **Gift flow**: back returns to the first question, verified
- **Zero English leaks** in Arabic, Hindi and Urdu, both on the page and inside the
  gift modal
- **No failed network requests**
- **Contrast**: nothing new flagged

**A real bidi bug found and fixed.** In Urdu the deal meta line rendered as
"GB · Natural Titanium 256": the leading number had jumped to the far end, because
a Latin run inside an RTL sentence reorders around the surrounding text. The
storage and colour are now each wrapped in `<bdi>`, as is the trade in summary,
which mixes a Latin brand and model with a translated condition.

**A bug my own earlier work caused.** The step counter read "Step 1 of 2" after
the model step was added. `#tin2Step` still carried a static `data-i18n` key, and
`applyI18n` was overwriting the live value that `paint()` had just set. Those three
nodes are written by JS on every step, so the static keys were removed.

---

## Still outstanding

- Native review of the translations. The top forty strings are worth checking
  before this goes in front of an Arabic speaking client
- A response time promise. You gave hours but not a "we reply within X"
- Prices remain plausible placeholders, the three interior photographs are still
  someone else's premises, and there is still no backend
