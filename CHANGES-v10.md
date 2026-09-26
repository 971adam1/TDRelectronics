# v10 — picker alignment, Urdu in Naskh, RTL motion, welcome prompt, gift reminder

Deployed from this folder. Push to `main` and Vercel rebuilds.

---

## 1. The language picker really was misaligned

Two separate causes, and the first one is embarrassing.

**A class name collision.** `style.css` already used `.fl` for the product filter
chip row:

```css
.fl{display:flex;gap:7px;overflow-x:auto;margin-bottom:18px;padding-bottom:2px}
```

My flag images were also `class="fl"`, so every flag inherited
`margin-bottom: 18px`. That is what pushed each flag 9px above its row, exactly
and consistently. Renamed to `.lgf`.

This is the second class collision in this project after `.sh`. Measured after
fixing: flag, name and code now share one centre in every row, at 390 and 1440,
in LTR and RTL.

**Flags with white edges vanished.** The UK, UAE, India and Pakistan flags all
carry white at the edge, which disappeared against the white menu and made them
read as different sizes. They now have a real 1px outline rather than the barely
visible one they had.

---

## 2. Urdu is in Naskh now, not Nastaliq

You looked at it and said it was too dense and ate too much space. That is the
right call and it overrides what I argued for in v9.

Nastaliq is the traditional script, but it slopes each word downward and hangs
deep below the baseline. At 36px that is beautiful. At 14px inside a button, on a
phone, held one handed, it is slow to read.

Now set in **Noto Naskh Arabic** throughout, headings included. Chosen over the
Plex face used for Arabic because it carries the full Urdu set (ے ٹ ڈ ڑ ں ھ).

The layout tightened as a result. v9 forced `line-height: 2.05` on the body and a
52px floor on every button just to stop descenders clipping. Both are gone; Urdu
now sits at 1.6 like any other language. The two Nastaliq font files were deleted.

---

## 3. RTL motion ran backwards

You were right that the sequence felt like it was going last to first. Three
things moved horizontally and all three assumed left to right.

| | Was | Now |
| --- | --- | --- |
| Deal carousel | `translateX(-100%)` per slide, always | Negated in RTL, so it advances toward the reading direction |
| Offer rail marquee | always scrolled left | `oslide-rtl` in RTL |
| Announcement ticker | always scrolled left | `mq-rtl` in RTL |
| Swipe gesture | drag left always meant next | reads the page direction |
| Previous / next buttons | fixed sides | swap sides in RTL |

There was also a double flip: I had put `flex-direction: row-reverse` on the
carousel track in v9. An RTL flex container already lays its items right to left,
so reversing on top of that put them back in LTR order and the translate then
moved the track the wrong way. Removed.

Verified per language: LTR gives `translateX(-100%)`, RTL gives `translateX(100%)`,
and the marquees pick the matching animation.

---

## 4. A welcome prompt that asks the language

Fires **2.8 seconds** after load, not instantly, so the visitor sees a headline
and a phone before being asked anything. Four flags, two by two, big targets.

Shown **once**. Choosing a language, or choosing one from the header switcher,
records the choice and the prompt never returns. It also stands down if a trade
in is already underway or the gift prompt is open, because stacking prompts on
someone is worse than asking nothing.

---

## 5. The gift prompt no longer hijacks the trade in

This was the important one.

`TIN_ACTIVE` is true from the moment a brand is tapped until the request is sent.
While it is true the gift prompt does not fire. The intent score keeps accruing,
so the prompt still appears the moment they finish or back out. Interrupting
someone who is already converting, to ask for the same contact details, costs
more than it earns.

And "Start shopping" no longer drags them to the product grid if they were
partway through the trade in. Scrolling someone out of a flow they chose is worse
than leaving them where they were.

---

## 6. A standing reminder that a discount is waiting

Once the code is claimed it is easy to forget until checkout, which is exactly
when it stops influencing the decision.

A gold chip now sits in the bottom right showing the amount and the code, with a
slow pulse. Tapping it copies the code. It sits **above** the WhatsApp button and
lifts further when the cart bar appears, so the blue bar is never touched.

---

## Found while verifying

**A `[hidden]` override.** `.wpop{display:grid}` and `.gfab{display:flex}` beat
the browser's built in `[hidden]{display:none}`, so both elements were rendering
while supposedly hidden. The welcome prompt was sitting over every page load with
an empty box and a blurred backdrop.

My own test had passed, because it asked whether the `hidden` property was set
rather than whether anything was on screen. The screenshot caught it. Both now
opt out explicitly.

**Six modals and two drawers were never translated.** The leak scanner only saw
the page, and a modal does not exist until someone opens it. Written a deeper
scanner that opens each overlay and scans it:

- the price alert, wishlist, shortlist, reserve, exit intent and trade in modals
- the cart drawer: "You are saving", "You qualify for free delivery", "Remove", "Add"
- the product drawer: colour, storage and condition labels, all three grade
  descriptions, and the in the box / warranty / delivery lines
- the gift success screen: "Unlocked, {name}" and the terms line
- every accessory name

That is roughly 40 more strings across four languages. **All overlays now scan
clean in Arabic, Hindi and Urdu.**

---

## Checked

- 16 combinations: 375, 390, 768, 1440 against all four languages. No overflow,
  correct direction, zero console errors
- No failed network requests
- Trade in driven end to end in four languages, including back navigation and the
  "Other brand" short path
- Welcome prompt: absent at 1.2s, present at 3.6s, applies the language, closes,
  remembered, does not return on the next visit
- Gift prompt confirmed suppressed while a trade in is in progress
- Gift chip appears on claim, at the right offset with and without the cart bar
- Picker alignment measured, not eyeballed: one shared centre per row across five
  language and width combinations
