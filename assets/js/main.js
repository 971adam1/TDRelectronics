/* TDR Electronic v7. Official product imagery. Showcase build, no backend. */
(function () {
'use strict';
var $ = function (s, r) { return (r || document).querySelector(s); };
var $$ = function (s, r) { return [].slice.call((r || document).querySelectorAll(s)); };

/* Dirham glyph, inherits the surrounding text colour via CSS mask. */
var D = '<i class="dh" aria-hidden="true"></i>';
var money = function (n) { return D + '<span class="num">' + n.toLocaleString('en-US') + '</span>'; };
var plain = function (n) { return D + n.toLocaleString('en-US'); };

var RULES = {
  freeDeliveryOver: 2000,
  savingsBannerMin: 111,
  promo: { code:'TDR100', off:100, minSpend:800 }
};

/* colors: [display name, swatch hex, image slug] */
var P = [
  { id:'ip16p', brand:'Apple', name:'iPhone 16 Pro', price:3149, was:4299, stock:6, tags:['new'],
    storage:['128 GB','256 GB','512 GB'],
    colors:[['Desert Titanium','#C4A98C','deserttitanium'],['Black Titanium','#4A4A4C','blacktitanium'],
            ['White Titanium','#E6E4DF','whitetitanium','webp'],['Natural Titanium','#B5AFA4','naturaltitanium']] },
  { id:'ip16', brand:'Apple', name:'iPhone 16', price:2549, was:3399, stock:10, tags:['new'],
    storage:['128 GB','256 GB'],
    colors:[['Ultramarine','#8FA4D8','ultramarine'],['Teal','#B4CBC6','teal'],['Pink','#F2D9DE','pink'],
            ['Black','#3B3B3D','black'],['White','#F2F2F0','white']] },
  { id:'ip15pm', brand:'Apple', name:'iPhone 15 Pro Max', price:2949, was:5099, stock:4, tags:['save'],
    storage:['256 GB','512 GB','1 TB'],
    colors:[['Natural Titanium','#B5AFA4','naturaltitanium'],['Blue Titanium','#5A6B7E','bluetitanium'],
            ['White Titanium','#E6E4DF','whitetitanium'],['Black Titanium','#4A4A4C','blacktitanium']] },
  { id:'ip15p', brand:'Apple', name:'iPhone 15 Pro', price:2449, was:4299, stock:7, tags:['save'],
    storage:['128 GB','256 GB','512 GB'],
    colors:[['Black Titanium','#4A4A4C','blacktitanium'],['White Titanium','#E6E4DF','whitetitanium'],
            ['Blue Titanium','#5A6B7E','bluetitanium'],['Natural Titanium','#B5AFA4','naturaltitanium']] },
  { id:'ip15', brand:'Apple', name:'iPhone 15', price:1949, was:3399, stock:12, tags:['save'],
    storage:['128 GB','256 GB'],
    colors:[['Pink','#F0D3D8','pink'],['Yellow','#EFE7C4','yellow'],['Green','#CDD5C6','green'],['Blue','#C9D6DC','blue']] },
  { id:'ip14pm', brand:'Apple', name:'iPhone 14 Pro Max', price:2249, was:4699, stock:3, tags:['save','low'],
    storage:['128 GB','256 GB','512 GB'],
    colors:[['Space Black','#3A3A3C','spaceblack'],['Gold','#E3CDA6','gold'],
            ['Deep Purple','#5C5670','deeppurple'],['Silver','#E4E4E2','silver']] },
  { id:'ip14p', brand:'Apple', name:'iPhone 14 Pro', price:1899, was:4199, stock:9, tags:['save'],
    storage:['128 GB','256 GB'],
    colors:[['Space Black','#3A3A3C','spaceblack'],['Silver','#E4E4E2','silver'],
            ['Deep Purple','#5C5670','deeppurple'],['Gold','#E3CDA6','gold']] },
  { id:'ip13pm', brand:'Apple', name:'iPhone 13 Pro Max', price:1749, was:4699, stock:6, tags:['save'],
    storage:['128 GB','256 GB','512 GB'],
    colors:[['Graphite','#54524F','graphite'],['Gold','#E5CFB0','gold'],['Silver','#E8E8E6','silver'],
            ['Alpine Green','#576259','alpinegreen'],['Sierra Blue','#9CB4CC','sierrablue']] },
  { id:'ip13', brand:'Apple', name:'iPhone 13', price:1249, was:3399, stock:15, tags:['save'],
    storage:['128 GB','256 GB'],
    colors:[['Midnight','#31363E','midnight'],['Starlight','#EEE9E2','starlight'],['Pink','#F6DDD9','pink'],
            ['Blue','#4E6C8F','blue'],['Red','#B8323C','red']] },
  { id:'ip12pm', brand:'Apple', name:'iPhone 12 Pro Max', price:1349, was:4699, stock:4, tags:['save','low'],
    storage:['128 GB','256 GB'],
    colors:[['Graphite','#54524F','graphite'],['Pacific Blue','#2D4F63','pacificblue'],
            ['Gold','#E5CFB0','gold'],['Silver','#E8E8E6','silver']] },
  { id:'ip12', brand:'Apple', name:'iPhone 12', price:899, was:3299, stock:18, tags:['save'],
    storage:['64 GB','128 GB'],
    colors:[['Black','#2B2C2E','black'],['White','#F2F2F0','white'],['Blue','#2F4E68','blue'],
            ['Green','#B6D8C8','green'],['Purple','#C4B5DC','purple'],['Red','#C6353B','red']] },
  { id:'ip11', brand:'Apple', name:'iPhone 11', price:699, was:2699, stock:22, tags:['save'],
    storage:['64 GB','128 GB'],
    colors:[['Black','#2B2C2E','black'],['White','#F2F2F0','white'],['Purple','#D5CEE4','purple'],
            ['Green','#C9E0D2','green'],['Yellow','#F2E3AA','yellow'],['Red','#C6353B','red']] },
  { id:'s24', brand:'Samsung', name:'Galaxy S24', price:1649, was:3399, stock:7, tags:['save'],
    storage:['128 GB','256 GB'],
    colors:[['Onyx Black','#2E2E30','onyxblack'],['Marble Gray','#B9B9BA','marblegray'],
            ['Cobalt Violet','#B0A6C9','cobaltviolet'],['Amber Yellow','#E8D9A8','amberyellow']] },
  { id:'s23u', brand:'Samsung', name:'Galaxy S23 Ultra', price:1849, was:4699, stock:5, tags:['save'],
    storage:['256 GB','512 GB'],
    colors:[['Green','#4A5A4C','green'],['Cream','#E2DACB','cream'],
            ['Lavender','#CFC7DA','lavender'],['Phantom Black','#2E2E30','phantomblack']] },
  { id:'s22u', brand:'Samsung', name:'Galaxy S22 Ultra', price:1349, was:4599, stock:8, tags:['save'],
    storage:['128 GB','256 GB'],
    colors:[['Phantom Black','#2E2E30','phantomblack'],['Green','#3F5145','green'],
            ['Burgundy','#6A2A38','burgundy'],['Phantom White','#EDEDEB','phantomwhite']] },
  { id:'s21u', brand:'Samsung', name:'Galaxy S21 Ultra', price:1049, was:4299, stock:11, tags:['save'],
    storage:['128 GB','256 GB'],
    colors:[['Phantom Black','#2E2E30','phantomblack'],['Phantom Silver','#D8D9DB','phantomsilver']] }
];

function conds() {
  return [
    { k:'C', n:t('gr.c'), d:t('gr.cTxt2'), m:1 },
    { k:'B', n:t('gr.b'), d:t('gr.bTxt2'), m:1.048 },
    { k:'A', n:t('gr.a'), d:t('gr.aTxt2'), m:1.075 }
  ];
}
var CONDS = conds();

function bundles() {
  return [
  { id:'case',  name:t('acc.case'),  solo:79,  bundle:39,  img:'acc/case.webp' },
  { id:'glass', name:t('acc.glass'), solo:59,  bundle:25,  img:'acc/glass.webp' },
  { id:'chg',   name:t('acc.chg'),   solo:119, bundle:69,  img:'acc/charger.webp' },
  { id:'buds',  name:t('acc.buds'),  solo:249, bundle:169, img:'acc/buds.jpg' },
  { id:'bank',  name:t('acc.bank'),  solo:159, bundle:99,  img:'acc/bank.jpg' }
];
}
var BUNDLES = bundles();

var BRAND = { Apple:'assets/img/logo/apple.svg', Samsung:'assets/img/logo/samsung.png' };
var TABBY = 'assets/img/logo/tabby.webp';

/* Pay in 4 splits the price into four equal instalments. "From" because the
   figure shown is the lowest grade and storage on that model. */
function inst(price) { return Math.round(price / 4); }
function tabbyLine(price) {
  return '<span class="tby__l">' + t('price.fromShort') + ' <b>' + money(inst(price)) + '</b> x4 <img class="tby" src="' +
    TABBY + '" alt="Tabby" loading="lazy"></span>';
}

/* The price block. Instalment leads, saving sits beside it as the reason,
   full price underneath as the honesty line. One block, never competing boxes. */
function priceBlock(p, save, pct) {
  return '<div class="pblk">' +
    '<div class="pblk__top">' +
      '<div class="pblk__from">' +
        '<span class="pblk__k">' + t('price.from') + '</span>' +
        '<span class="pblk__v"><b>' + money(inst(p.price)) + '</b><em>x4</em></span>' +
        '<span class="pblk__tby">' + t('price.tabby') + ' <img src="' + TABBY + '" alt="Tabby"></span>' +
      '</div>' +
      '<div class="pblk__save"><span>' + t('price.save') + '</span><b>' + money(save) + '</b><i>' + t('price.vsNew') + '</i></div>' +
    '</div>' +
    '<div class="pblk__full"><span>' + t('price.once') + '</span><b>' + money(p.price) + '</b></div>' +
  '</div>';
}

/* Hero deals. Ranking on raw dirham saving alone promotes the oldest stock,
   because an ageing flagship has a high launch price and a low resale value. That
   is arithmetically true and commercially useless: nobody is drawn in by a five
   year old handset. Weighting the saving by the asking price keeps the desirable
   phones at the front while still leading with genuine value. */
function bestDeals(limit) {
  return P.map(function (p) {
    var save = p.was - p.price;
    return { p:p, save:save, score:save * (p.price / 1000) };
  })
    .sort(function (a, b) { return b.score - a.score; })
    .slice(0, limit || 5);
}

function imgSrc(p, c) { return 'assets/img/p/' + p.id + '-' + c[2] + '.' + (c[3] || 'jpg'); }

/* Every colourway is rendered once and cross faded, so swapping is instant
   with no flash of a loading image. */
function shots(p, active, cls, eager) {
  return '<div class="ph ' + (cls || '') + '">' + p.colors.map(function (c, i) {
    return '<img class="ph__i' + (i === (active || 0) ? ' on' : '') + '" src="' + imgSrc(p, c) + '"' +
      (i === 0 && eager ? '' : ' loading="lazy"') + ' decoding="async"' +
      ' alt="' + (i === 0 ? p.name + ' in ' + c[0] : '') + '"' + (i === 0 ? '' : ' aria-hidden="true"') + '>';
  }).join('') + '</div>';
}

/* one image, sources kept on the node for instant swapping later */
function shotOne(p, cls) {
  var srcs = p.colors.map(function (c) { return imgSrc(p, c); });
  return '<div class="ph ' + (cls || '') + '" data-srcs="' + srcs.join('|') + '">' +
    '<img class="ph__i on" src="' + srcs[0] + '" loading="lazy" decoding="async" alt="' +
    p.name + ' in ' + p.colors[0][0] + '"></div>';
}
function preloadShots(box) {
  if (!box || box.dataset.pre) return;
  box.dataset.pre = '1';
  box.dataset.srcs.split('|').slice(1).forEach(function (s) { new Image().src = s; });
}
function swapShot(box, i) {
  if (!box) return;
  if (box.dataset.srcs) {                       /* single image card */
    var list = box.dataset.srcs.split('|');
    var im = box.firstElementChild;
    if (im && list[i] && im.getAttribute('src') !== list[i]) im.setAttribute('src', list[i]);
    return;
  }
  $$('.ph__i', box).forEach(function (im, n) { im.classList.toggle('on', n === i); });
}

/* ---------- insight ---------- */
var IN = { leads:0, signals:0, value:0 };
function log(txt, o) {
  o = o || {};
  if (o.lead) IN.leads++; else IN.signals++;
  if (o.value) IN.value += o.value;
  $('#ipLeads').textContent = IN.leads;
  $('#ipSignals').textContent = IN.signals;
  $('#ipValue').textContent = IN.value.toLocaleString('en-US');
  var ul = $('#ipLog'), e = $('.ip__e', ul);
  if (e) e.remove();
  var li = document.createElement('li');
  li.innerHTML = (o.lead ? '<b>' + t('lead.tag') + '</b> ' : '') + txt;
  ul.insertBefore(li, ul.firstChild);
  while (ul.children.length > 24) ul.removeChild(ul.lastChild);
  intent(o.strong ? 3 : 1);
}
$('#insightFab').addEventListener('click', function () {
  var on = document.body.classList.toggle('insight');
  $('#insightPanel').hidden = !on;
});
$('#ipClose').addEventListener('click', function () {
  document.body.classList.remove('insight'); $('#insightPanel').hidden = true;
});
function toast(msg) {
  var el = document.createElement('div');
  el.className = 'toast';
  el.innerHTML = '<svg viewBox="0 0 24 24"><path d="M5 12l5 5 9-9"/></svg><span>' + msg + '</span>';
  $('#toasts').appendChild(el);
  setTimeout(function(){ el.classList.add('out'); setTimeout(function(){ el.remove(); }, 300); }, 3200);
}

/* ---------- gift flow ---------- */
var GIFT = { shown:false, done:false, score:0, lead:null, unlocked:false };
/* Kept so the existing call sites still work, but the score no longer opens
   anything on its own. It only records interest for the insight panel. */
function intent(n) {
  if (GIFT.shown || GIFT.done) return;
  GIFT.score += n;
}

/* The two standing offers. The prompt is the third attempt, not the first. */
var PASSED = { tin:false, tile:false };

function maybeGift() {
  if (GIFT.shown || GIFT.done) return;
  if (TIN_ACTIVE) return;                 /* never cut across a trade in */
  if (!PASSED.tin || !PASSED.tile) return;
  setTimeout(function () {
    if (GIFT.shown || GIFT.done || TIN_ACTIVE) return;
    openGift();
  }, 900);                                /* a beat after the tile leaves view */
}

/* Marks an element as passed once its bottom has gone above the viewport top,
   which means the visitor scrolled by it rather than merely glimpsing it. */
function watchPassed(sels, key) {
  function pick() {
    for (var i = 0; i < sels.length; i++) {
      var e = document.querySelector(sels[i]);
      if (e) return e;
    }
    return null;
  }
  function check() {
    if (PASSED[key]) return true;
    var el = pick();
    if (!el) return false;
    var r = el.getBoundingClientRect();
    if (r.bottom < 0) { PASSED[key] = true; maybeGift(); return true; }
    return false;
  }
  check();
  addEventListener('scroll', function () { check(); }, { passive:true });
}
watchPassed(['#tin2', '#tradein'], 'tin');
/* the grid is built by JS, so the tile only exists after the first render */
addEventListener('load', function () { watchPassed(['#gtile', '#shop'], 'tile'); });
var gf = $('#giftFlow'), gbox = $('#giftBox');
function openGift() {
  if (GIFT.shown || GIFT.done) return;
  GIFT.shown = true;
  gf.hidden = false; void gf.offsetWidth; gf.classList.add('on');
  document.body.style.overflow = 'hidden';
  step1();
  log('Gift prompt shown after intent threshold reached');
}
function closeGift(done) {
  gf.classList.remove('on');
  GIFT.done = !!done;
  setTimeout(function(){ gf.hidden = true; }, 320);
  if (!$$('.sheet').some(function(d){ return !d.hidden; })) document.body.style.overflow = '';
}
function step1() {
  gbox.innerHTML =
    '<div class="g1"><button class="g1__x" data-g="close" aria-label="Close">&times;</button>' +
    '<div class="g1__i"><svg viewBox="0 0 24 24"><path d="M12 22s8-4.5 8-11a5 5 0 0 0-8-4 5 5 0 0 0-8 4c0 6.5 8 11 8 11z"/></svg></div>' +
    '<h3>' + t('gift.q') + '</h3><p>' + t('gift.qSub') + '</p>' +
    '<div class="g1__b"><button class="g1__yes" data-g="yes">' + t('gift.yes') + '</button>' +
    '<button class="g1__no" data-g="no">' + t('gift.no') + '</button></div></div>';
}
function step2() {
  gbox.innerHTML =
    '<div class="g2__top"><button class="g2__x" data-g="close" aria-label="Close">&times;</button>' +
    '<button type="button" class="sback sback--g" data-g="back">' +
      '<svg viewBox="0 0 24 24"><path d="M15 6l-6 6 6 6"/></svg>' + t('ui.back') + '</button>' +
    '<i class="spark"></i><i class="spark"></i><i class="spark"></i><i class="spark"></i>' +
    '<div class="gift"><svg viewBox="0 0 24 24"><path d="M3 9h18v12H3z"/><path d="M12 9v12M3 9l2-4h5l2 4 2-4h5l2 4"/></svg></div>' +
    '<h3>' + t('gift.have') + '</h3>' +
    '<p>' + t('gift.have2') + '</p></div>' +
    '<form class="g2__form" id="giftForm" novalidate>' +
      '<div class="gfield gfield--treasure" id="fWa"><label for="gWa">' + t('f.wa') + '</label>' +
      '<input id="gWa" type="tel" inputmode="tel" placeholder="05X XXX XXXX" autocomplete="tel"></div>' +
      '<div class="gfield gfield--slide" id="fName"><label for="gName">' + t('f.name') + '</label>' +
      '<input id="gName" type="text" placeholder="' + t('f.firstName') + '" autocomplete="given-name"></div>' +
      '<button class="gbtn" id="gSend" type="submit" disabled>' + t('gift.send') + '</button>' +
      '<p class="gnote">' + t('gift.note') + '</p>' +
    '</form>';
  var wa = $('#gWa'), nm = $('#gName'), btn = $('#gSend'), fWa = $('#fWa'), fName = $('#fName');
  function refresh() {
    var okWa = wa.value.replace(/\D/g,'').length >= 9;
    fWa.classList.toggle('filled', okWa);
    if (okWa) fName.classList.add('show');
    var ready = okWa && nm.value.trim().length >= 2;
    btn.classList.toggle('ready', ready);
    btn.disabled = !ready;
  }
  wa.addEventListener('input', refresh);
  nm.addEventListener('input', refresh);
  setTimeout(function(){ wa.focus(); }, 320);
  $('#giftForm').addEventListener('submit', function (e) {
    e.preventDefault();
    if (btn.disabled) return;
    GIFT.lead = { phone: wa.value.trim(), name: nm.value.trim() };
    GIFT.unlocked = true;
    showGiftFab();
    log('New customer lead: <b>' + GIFT.lead.name + '</b> opted in on WhatsApp', { lead:true });
    step3();
  });
}
function step3() {
  var pr = RULES.promo;
  gbox.innerHTML =
    '<div class="g3"><div class="conf" id="conf"></div>' +
    '<div class="g3__top"><div class="g3__i"><svg viewBox="0 0 24 24"><path d="M5 12l5 5 9-9"/></svg></div>' +
    '<h3>' + t('gift.unlocked').replace('{n}', GIFT.lead.name) + '</h3><p>' + t('gift.ready') + '</p></div>' +
    '<div class="g3__body"><div class="code"><span class="code__v">' + pr.code + '</span>' +
    '<button class="code__c" data-g="copy">' + t('gift.copy') + '</button></div>' +
    '<p class="g3__t">' + t('gift.terms')
      .replace('{n}', '<b>' + plain(pr.off) + '</b>')
      .replace('{m}', plain(pr.minSpend)) + '</p>' +
    '<button class="btn btn--p btn--full" data-g="shop">' + t('gift.shop') + '</button></div></div>';
  confetti(); renderCart(); renderGrid();
}
function confetti() {
  var c = $('#conf'); if (!c) return;
  var cols = ['#D9A521','#1D4ED8','#12A16E','#F0C24B','#7FA5FF'];
  for (var i = 0; i < 26; i++) {
    var s = document.createElement('i');
    s.style.left = Math.random()*100 + '%';
    s.style.background = cols[i % cols.length];
    s.style.animationDelay = (Math.random()*.5) + 's';
    s.style.animationDuration = (1.6 + Math.random()*1.1) + 's';
    c.appendChild(s);
  }
}
function stepReturning() {
  gbox.innerHTML =
    '<div class="g1"><button class="g1__x" data-g="close" aria-label="Close">&times;</button>' +
    '<div class="g1__i"><svg viewBox="0 0 24 24"><path d="M20 21a8 8 0 1 0-16 0"/><circle cx="12" cy="8" r="4"/></svg></div>' +
    '<h3>' + t('gift.back') + '</h3>' +
    '<p>Returning customers get first look at new stock. Want us to message you when something you are watching lands?</p>' +
    '<div class="g1__b"><button class="g1__yes" data-g="yes">' + t('gift.alert') + '</button>' +
    '<button class="g1__no" data-g="close">' + t('gift.later') + '</button></div></div>';
  log('Returning customer identified, offered stock alerts');
}
gbox.addEventListener('click', function (e) {
  var b = e.target.closest('[data-g]'); if (!b) return;
  var a = b.dataset.g;
  if (a === 'back')  { step1(); return; }
  if (a === 'close') { closeGift(true); return; }
  if (a === 'no') { stepReturning(); return; }
  if (a === 'yes') { step2(); return; }
  if (a === 'copy') {
    if (navigator.clipboard) navigator.clipboard.writeText(RULES.promo.code).catch(function(){});
    b.textContent = t('gift.copied'); return;
  }
  if (a === 'shop') {
    var wasInTin = TIN_ACTIVE;
    closeGift(true);
    toast('<b>' + RULES.promo.code + '</b> saved to your checkout');
    /* Only carry them to the grid if they were not already partway through
       something. Scrolling someone out of a flow they chose is worse than
       leaving them where they were. */
    if (!wasInTin) { var s = $('#shop'); if (s) s.scrollIntoView({ behavior:'smooth' }); }
  }
});

/* ---------- state ---------- */
var cart = [], addons = [], wish = [], shown = 8, filter = 'all', promoOn = false;

/* True from the moment a brand is tapped until the request is sent. The gift
   prompt checks this: interrupting someone who is already converting, to ask for
   the same contact details, costs more than it earns. */
var TIN_ACTIVE = false;
function byId(id){ return P.filter(function(p){ return p.id === id; })[0]; }

/* ---------- grid ---------- */
function cardHTML(p) {
  var save = p.was - p.price, pct = Math.round(save / p.was * 100);
  /* One tag only. Scarcity beats a discount badge, and the saving is stated
     in dirhams below the price, so a percentage tag here would just repeat it. */
  var tags = p.tags.indexOf('low') > -1
    ? '<span class="tg tg--l">' + t('card.only').replace('{n}', p.stock) + '</span>'
    : (p.tags.indexOf('new') > -1 ? '<span class="tg tg--n">' + t('card.new') + '</span>' : '');
  var sw = p.colors.slice(0,6).map(function(c,i){
    return '<button data-i="' + i + '" class="' + (i===0?'on':'') + '" style="--sc:' + c[1] + '" aria-label="' + c[0] + '"></button>';
  }).join('');
  return '<article class="cd" data-id="' + p.id + '">' +
    '<div class="cd__t"><div class="cd__tg">' + tags + '</div>' +

    '<button class="cd__w" aria-label="Save to wishlist"><svg viewBox="0 0 24 24"><path d="M12 20s-7-4.4-7-9a4 4 0 0 1 7-2.6A4 4 0 0 1 19 11c0 4.6-7 9-7 9z"/></svg></button>' +
    shotOne(p, 'ph--card') + '</div>' +
    '<div class="cd__b">' +
    '<div class="cd__hd"><img class="cd__bl" src="' + BRAND[p.brand] + '" alt="' + p.brand + '" loading="lazy">' +
    '<h3 class="cd__n">' + p.name + '</h3></div>' +
    '<div class="cd__sw"><div class="sw">' + sw + '</div><span class="cd__c">' + p.colors[0][0] + '</span></div>' +
    '<div class="cd__p"><b>' + money(p.price) + '</b><s>' + money(p.was) + ' ' + t('price.newSuffix') + '</s></div>' +
    '<div class="cd__sv">' + t('cart.saving') + ' ' + plain(save) + ' <em>' + t('price.vsNewLong') + '</em></div>' +
    '<div class="cd__i">' + tabbyLine(p.price) + '</div>' +
    '<div class="cd__x"><button class="cd__add">' + t('card.add') + '</button>' +
    '<button class="cd__q" aria-label="Quick view"><svg viewBox="0 0 24 24"><path d="M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7-10-7-10-7z"/><circle cx="12" cy="12" r="3"/></svg></button></div>' +
    '</div></article>';
}
function visible() {
  return P.filter(function(p){
    if (filter === 'all') return true;
    if (filter === 'under1500') return p.price < 1500;
    if (filter === 'new') return p.tags.indexOf('new') > -1;
    return p.brand === filter;
  });
}
function giftTile() {
  if (GIFT.unlocked) {
    return '<article class="cd gtile gtile--done"><div class="gtile__in">' +
      '<div class="gtile__i"><svg viewBox="0 0 24 24"><path d="M5 12l5 5 9-9"/></svg></div>' +
      '<h3>' + t('gtile.ready').replace('{c}', RULES.promo.code) + '</h3>' +
      '<p>' + t('gtile.terms').replace('{n}', plain(RULES.promo.off)).replace('{m}', plain(RULES.promo.minSpend)) + '</p>' +
      '</div></article>';
  }
  return '<article class="cd gtile" id="gtile"><div class="gtile__in">' +
    '<div class="gtile__i"><svg viewBox="0 0 24 24"><path d="M3 9h18v12H3z"/><path d="M12 9v12M3 9l2-4h5l2 4 2-4h5l2 4"/></svg></div>' +
    '<span class="gtile__tag">' + t('gift.first') + '</span>' +
    '<h3>' + t('gift.head').replace('{n}', plain(RULES.promo.off)) + '</h3>' +
    '<p>' + t('gift.sub') + '</p>' +
    '<span class="btn btn--g btn--full">' + t('gift.cta') + '</span></div></article>';
}
function renderGrid() {
  var list = visible();
  var cards = list.slice(0, shown).map(cardHTML);
  /* sits in the flow of the grid rather than interrupting as a popup */
  if (cards.length > 3) cards.splice(4, 0, giftTile());
  $('#grid').innerHTML = cards.join('');
  $('#loadMore').style.display = list.length > shown ? '' : 'none';
  syncWish();
}
function syncWish() {
  $$('.cd').forEach(function(c){
    var w = c.querySelector('.cd__w');   /* the gift tile is a .cd with no wishlist button */
    if (w) w.classList.toggle('on', wish.indexOf(c.dataset.id) > -1);
  });
  var w = $('#wishCount'); w.textContent = wish.length; w.classList.toggle('zero', !wish.length);
}
function cardSwatch(c, b) {
  var p = byId(c.dataset.id), i = +b.dataset.i;
  swapShot($('.ph', c), i);
  $('.cd__c', c).textContent = p.colors[i][0];
}
$('#grid').addEventListener('mouseover', function(e){
  var c = e.target.closest('.cd');
  if (c) preloadShots($('.ph', c));
  var b = e.target.closest('.sw button'); if (!b) return;
  cardSwatch(c, b);
});
$('#grid').addEventListener('touchstart', function(e){
  var c = e.target.closest('.cd'); if (c) preloadShots($('.ph', c));
}, { passive:true });
$('#grid').addEventListener('click', function(e){
  if (e.target.closest('#gtile')) {
    log('Tapped the in grid gift offer', { strong:true });
    GIFT.score = 0; GIFT.shown = false; GIFT.done = false;
    openGift();
    return;
  }
  var c = e.target.closest('.cd'); if (!c || c.classList.contains('gtile')) return;
  var p = byId(c.dataset.id), b = e.target.closest('.sw button');
  if (b) {
    $$('.sw button', c).forEach(function(x){ x.classList.remove('on'); });
    b.classList.add('on'); cardSwatch(c, b);
    log('Colour preference: <b>' + p.name + '</b> in ' + p.colors[+b.dataset.i][0]);
    return;
  }
  if (e.target.closest('.cd__w')) {
    var i = wish.indexOf(p.id);
    if (i > -1) wish.splice(i,1);
    else { wish.push(p.id); log('Wishlist add: <b>' + p.name + '</b>', { value:p.price, strong:true }); }
    syncWish(); return;
  }
  if (e.target.closest('.cd__add')) { addCart(p); return; }
  if (e.target.closest('.cd__q')) { openPDP(p); return; }
});
$('#loadMore').addEventListener('click', function(){ shown += 8; renderGrid(); log('Deep browse: loaded more results'); });
$('#filters').addEventListener('click', function(e){
  var b = e.target.closest('button'); if (!b) return;
  $$('#filters button').forEach(function(x){ x.classList.remove('on'); });
  b.classList.add('on'); filter = b.dataset.f; shown = 8; renderGrid();
  log('Filter applied: <b>' + b.textContent.trim() + '</b>');
});
$$('[data-filter]').forEach(function(a){
  a.addEventListener('click', function(){
    filter = a.dataset.filter; shown = 8; renderGrid();
    $$('#filters button').forEach(function(x){ x.classList.toggle('on', x.dataset.f === filter); });
    if (filter !== 'all') log('Category intent: <b>' + filter + '</b>');
  });
});

/* ---------- cart ---------- */
function addCart(p, cond, stor, ci) {
  cond = cond || CONDS[1]; stor = stor || p.storage[0]; ci = ci || 0;
  var price = Math.round(p.price * cond.m), wasU = Math.round(p.was * cond.m);
  cart.push({ id:p.id, name:p.name, price:price, was:wasU, cond:cond.n, stor:stor,
              img:imgSrc(p, p.colors[ci]), color:p.colors[ci][0] });
  renderCart(); bump('#cartCount');
  toast('<b>' + p.name + '</b> added to cart');
  log('Add to cart: <b>' + p.name + '</b> ' + stor + ' grade ' + cond.k, { value:price, strong:true });
  openSheet('#cartDrawer');
}
function bump(sel){ var e = $(sel); e.classList.add('pop'); setTimeout(function(){ e.classList.remove('pop'); }, 420); }
function totals() {
  var sub = 0, wasSum = 0;
  cart.forEach(function(i){ sub += i.price; wasSum += i.was; });
  addons.forEach(function(a){ sub += a.bundle; wasSum += a.solo; });
  var discount = (promoOn && sub >= RULES.promo.minSpend) ? RULES.promo.off : 0;
  return { sub:sub, wasSum:wasSum, discount:discount, total:sub - discount, saved:(wasSum - sub) + discount };
}
function renderCart() {
  var tt = totals(), n = cart.length + addons.length;
  var cc = $('#cartCount'); cc.textContent = n; cc.classList.toggle('zero', !n);
  var sb = $('#sbar');
  sb.hidden = !n;
  document.body.classList.toggle('has-bar', !!n);
  if (n) {
    $('#sbarN').textContent = n;
    $('#sbarPrice').innerHTML = plain(tt.total);
    $('#sbarSave').innerHTML = tt.saved > 0 ? 'Saving ' + plain(tt.saved) : '';
  }

  if (!n) {
    $('#cartBody').innerHTML = '<div class="empty">Your cart is empty.<br>Browse phones to get started.</div>';
    $('#cartFoot').innerHTML = '<button class="btn btn--o btn--full" data-close>' + t('cart.keep') + '</button>';
    ship(0); return;
  }
  var rows = cart.map(function(i,ix){
    return '<div class="crow"><div class="crow__i"><img src="' + i.img + '" alt="" loading="lazy"></div>' +
      '<div><b>' + i.name + '</b><i>' + i.color + ' · ' + i.stor + ' · ' + t('pdp.grade') + ' ' + i.cond + '</i>' +
      '<button class="rm" data-rm="p" data-ix="' + ix + '">' + t('cart.remove') + '</button></div>' +
      '<div class="rt"><span>' + money(i.price) + '</span><s>' + money(i.was) + '</s></div></div>';
  }).join('');
  rows += addons.map(function(a,ix){
    return '<div class="crow"><div class="crow__i"><img src="assets/img/' + a.img + '" alt="" loading="lazy"></div>' +
      '<div><b>' + a.name + '</b><i>' + t('cart.bundle') + '</i>' +
      '<button class="rm" data-rm="a" data-ix="' + ix + '">' + t('cart.remove') + '</button></div>' +
      '<div class="rt"><span>' + money(a.bundle) + '</span><s>' + money(a.solo) + '</s></div></div>';
  }).join('');

  var banner = tt.saved >= RULES.savingsBannerMin
    ? '<div class="svb"><div class="svb__i"><svg viewBox="0 0 24 24"><path d="M5 12l5 5 9-9"/></svg></div>' +
      '<div><b>' + t('cart.saving2').replace('{n}', plain(tt.saved)) + '</b><i>' + t('cart.vsNew') + '</i></div></div>' : '';

  var avail = BUNDLES.filter(function(b){ return !addons.some(function(a){ return a.id === b.id; }); }).slice(0,3);
  var bundle = (cart.length && avail.length)
    ? '<div class="bnd"><div class="bnd__h"><b>' + t('cart.fbt') + '</b><span>' + t('cart.bundle') + '</span></div>' +
      avail.map(function(b){
        return '<div class="bi" data-b="' + b.id + '"><div class="bi__i"><img src="assets/img/' + b.img + '" alt="" loading="lazy"></div>' +
          '<div><b>' + b.name + '</b><div class="pr"><strong>' + money(b.bundle) + '</strong><s>' + money(b.solo) + '</s></div></div>' +
          '<button class="bi__a">' + t('cart.add') + '</button></div>';
      }).join('') + '</div>' : '';

  $('#cartBody').innerHTML = banner + rows + bundle;

  var pr = RULES.promo, eligible = tt.sub >= pr.minSpend, chip = '';
  if (GIFT.unlocked) {
    chip = '<div class="pmo"><div class="pmo__h">' + t('cart.codes') + '</div>' +
      '<button class="pchip' + (promoOn ? ' applied' : '') + '"' + (eligible ? '' : ' disabled') + ' id="promoChip">' +
      '<span class="pchip__c">' + pr.code + '</span>' +
      '<span><b>' + plain(pr.off) + ' off</b><i>' + (eligible ? 'Ready to apply' : 'Spend ' + plain(pr.minSpend - tt.sub) + ' more to unlock') + '</i></span>' +
      '<span class="pchip__x">' + (promoOn ? t('cart.applied') : t('cart.promo')) + '</span></button></div>';
  }
  $('#cartFoot').innerHTML = chip +
    (tt.discount ? '<div class="tot"><span>' + t('cart.discount') + '</span><b class="disc">- ' + money(tt.discount) + '</b></div>' : '') +
    '<div class="tot"><span>' + t('cart.total') + '</span><div>' +
      (tt.saved > 0 ? '<span class="was">' + plain(tt.wasSum) + '</span>' : '') +
      '<b>' + money(tt.total) + '</b></div></div>' +
    '<button class="btn btn--p btn--l btn--full" id="checkoutBtn">' + t('cart.checkout') + '</button>' +
    '<div class="pay"><span>' + t('cart.payWith') + '</span>' +
      '<img src="assets/img/logo/tabby.webp" alt="Tabby"><img src="assets/img/logo/applepay.webp" alt="Apple Pay">' +
      '<img src="assets/img/logo/visa.webp" alt="Visa"><img src="assets/img/logo/mastercard.svg" alt="Mastercard"></div>';
  ship(tt.total);
}
function ship(tot) {
  var need = RULES.freeDeliveryOver - tot, bar = $('#shipBar');
  if (!tot) { bar.style.setProperty('--p','0%'); $('#shipTxt').innerHTML = 'Free delivery on orders over ' + plain(RULES.freeDeliveryOver); bar.classList.remove('done'); }
  else if (need > 0) { bar.style.setProperty('--p', (tot/RULES.freeDeliveryOver*100) + '%'); $('#shipTxt').innerHTML = 'Add ' + plain(need) + ' more for free delivery'; bar.classList.remove('done'); }
  else { bar.style.setProperty('--p','100%'); $('#shipTxt').textContent = t('cart.qualify'); bar.classList.add('done'); }
}
$('#cartBody').addEventListener('click', function(e){
  var rm = e.target.closest('[data-rm]');
  if (rm) {
    if (rm.dataset.rm === 'p') cart.splice(+rm.dataset.ix,1); else addons.splice(+rm.dataset.ix,1);
    renderCart(); return;
  }
  var bi = e.target.closest('.bi');
  if (bi && e.target.closest('.bi__a')) {
    var b = BUNDLES.filter(function(x){ return x.id === bi.dataset.b; })[0];
    addons.push(b);
    log('Bundle attached: <b>' + b.name + '</b> at bundle price', { value:b.bundle });
    toast('<b>' + b.name + '</b> added, you saved ' + plain(b.solo - b.bundle));
    renderCart(); bump('#cartCount');
  }
});
$('#cartFoot').addEventListener('click', function(e){
  if (e.target.closest('#promoChip')) {
    promoOn = !promoOn;
    log(promoOn ? 'Promo <b>' + RULES.promo.code + '</b> applied at checkout' : 'Promo removed');
    renderCart(); return;
  }
  if (e.target.closest('#checkoutBtn')) {
    closeAll();
    modal('<h3>' + t('cart.reserve') + '</h3><p>' + t('m.reserve') + '</p>' +
      '<form data-lead="Checkout"><input placeholder="Full name" value="' + (GIFT.lead ? GIFT.lead.name : '') + '" required>' +
      '<input type="tel" placeholder="Mobile number" value="' + (GIFT.lead ? GIFT.lead.phone : '') + '" required>' +
      '<input placeholder="Delivery area in Dubai" required><button class="btn btn--p" type="submit">' + t('cart.confirm') + '</button></form>');
  }
});
$('#sbar').addEventListener('click', function(){ openSheet('#cartDrawer'); });

/* ---------- PDP ---------- */
function openPDP(p) {
  var sel = { color:0, stor:0, cond:1 };
  $('#pdpTitle').textContent = p.name;
  $('#pdpBody').innerHTML = '<div class="pdp">' +
    '<div class="pdp__d">' + shots(p, 0, 'ph--pdp', true) + '</div>' +
    '<div class="pdp__meta"></div></div>';
  var box = $('.ph', $('#pdpBody'));
  function paint() {
    var price = Math.round(p.price * CONDS[sel.cond].m), wasU = Math.round(p.was * CONDS[sel.cond].m);
    $('.pdp__meta', $('#pdpBody')).innerHTML =
      '<div class="pdp__br"><img src="' + BRAND[p.brand] + '" alt="' + p.brand + '"><span>' + t('pdp.renewed') + '</span></div>' +
      '<h3>' + p.name + '</h3>' +
      '<div class="pdp__p"><b>' + money(price) + '</b><s>' + money(wasU) + '</s></div>' +
      '<span class="cd__sv">' + t('price.save') + ' ' + plain(wasU - price) + '</span>' +
      '<div class="pdp__tby">' +
        '<div class="pdp__tby-r"><span>' + t('price.fromShort') + '</span><b>' + money(inst(price)) + '</b><em>x4 ' + t('trust.pay4Sub') + '</em>' +
        '<img class="tby" src="' + TABBY + '" alt="Tabby"></div>' +
        '<button class="pdp__tby-q" id="tbyHow">' + t('pdp.how') + '</button>' +
        '<p class="pdp__tby-x">The full price is ' + money(price) + '. Tabby splits it into four equal ' +
        'payments of ' + money(inst(price)) + ' with no interest and no fees. The "from" price on the ' +
        'home page is the lowest grade and storage of this model.</p></div>' +
      '<div class="pdp__lb">' + t('pdp.colour') + ' <em>' + p.colors[sel.color][0] + '</em></div><div class="pdp__sw">' +
      p.colors.map(function(c,i){ return '<button data-k="color" data-i="' + i + '" class="' + (i===sel.color?'on':'') + '" style="--sc:' + c[1] + '" aria-label="' + c[0] + '"></button>'; }).join('') + '</div>' +
      '<div class="pdp__lb">' + t('pdp.storage') + ' <em>' + p.storage[sel.stor] + '</em></div><div class="pdp__o">' +
      p.storage.map(function(s,i){ return '<button data-k="stor" data-i="' + i + '" class="' + (i===sel.stor?'on':'') + '">' + s + '</button>'; }).join('') + '</div>' +
      '<div class="pdp__lb">' + t('pdp.condition') + ' <em>' + CONDS[sel.cond].n + '</em></div><div class="pdp__cn">' +
      CONDS.map(function(c,i){ return '<button data-k="cond" data-i="' + i + '" class="' + (i===sel.cond?'on':'') + '">' +
        '<div><b>' + t('pdp.grade') + ' ' + c.k + ' · ' + c.n + '</b><i>' + c.d + '</i></div><span>' + money(Math.round(p.price*c.m)) + '</span></button>'; }).join('') + '</div>' +
      '<div class="pdp__in"><span><b>' + t('pdp.box') + '</b> ' + t('pdp.boxV') + '</span>' +
      '<span><b>' + t('pdp.warr') + '</b> ' + t('pdp.warrV') + '</span>' +
      '<span><b>' + t('pdp.deliv') + '</b> ' + t('pdp.delivV') + '</span></div>' +
      '<div class="pdp__by"><button class="btn btn--p btn--l btn--full" id="pdpAdd">Add to cart · ' + money(price) + '</button>' +
      '<button class="pdp__al" id="pdpAlert"><svg viewBox="0 0 24 24"><path d="M6 8a6 6 0 1 1 12 0c0 6 2 7 2 7H4s2-1 2-7z"/><path d="M10 20h4"/></svg>' + t('pdp.drop') + '</button></div>';
  }
  paint();
  $('#pdpBody').onclick = function(e){
    var b = e.target.closest('[data-k]');
    if (b) {
      sel[b.dataset.k] = +b.dataset.i;
      if (b.dataset.k === 'color') swapShot(box, sel.color);
      paint();
      if (b.dataset.k === 'cond') log('Condition compared on <b>' + p.name + '</b>: grade ' + CONDS[sel.cond].k);
      if (b.dataset.k === 'color') log('Colour preference: <b>' + p.name + '</b> in ' + p.colors[sel.color][0]);
      return;
    }
    if (e.target.closest('#tbyHow')) { e.target.closest('.pdp__tby').classList.toggle('open'); log('Opened the pay in 4 explainer'); return; }
    if (e.target.closest('#pdpAdd')) { closeAll(); addCart(p, CONDS[sel.cond], p.storage[sel.stor], sel.color); return; }
    if (e.target.closest('#pdpAlert')) { closeAll(); askAlert(p); return; }
  };
  openSheet('#pdpDrawer');
  log('Product viewed: <b>' + p.name + '</b>', { strong:true });
}
function askAlert(p) {
  modal('<h3>' + t('pdp.watch') + '</h3><p>' + t('m.watch').replace('{p}', p.name) + '</p>' +
    '<form data-lead="Price alert: ' + p.name + '"><input type="tel" placeholder="' + t('f.wa') + '" required>' +
    '<button class="btn btn--p" type="submit">' + t('pdp.watch') + '</button></form>');
}

/* ---------- sheets ---------- */
function openSheet(sel) {
  var d = $(sel); d.hidden = false; void d.offsetWidth;
  d.classList.add('on'); $('#scrim').classList.add('on');
  document.body.style.overflow = 'hidden';
}
function closeAll() {
  $$('.sheet').forEach(function(d){
    if (d.hidden) return;
    d.classList.remove('on');
    setTimeout(function(){ d.hidden = true; }, 380);
  });
  var m = $('#modal');
  if (!m.hidden) { m.classList.remove('on'); setTimeout(function(){ m.hidden = true; }, 280); }
  $('#scrim').classList.remove('on');
  if (gf.hidden) document.body.style.overflow = '';
}
$('#scrim').addEventListener('click', closeAll);
document.addEventListener('click', function(e){ if (e.target.closest('[data-close]')) closeAll(); });
document.addEventListener('keydown', function(e){
  if (e.key !== 'Escape') return;
  if (!gf.hidden) { closeGift(true); return; }
  closeAll();
});
$('#cartBtn').addEventListener('click', function(){ openSheet('#cartDrawer'); });
$('#wishBtn').addEventListener('click', function(){
  if (!wish.length) { toast('Your wishlist is empty'); return; }
  var names = wish.map(function(id){ return byId(id).name; }).join(', ');
  modal('<h3>' + t('wish.title') + '</h3><p>' + names + '</p><p style="margin-top:10px">' + t('m.wish') + '</p>' +
    '<form data-lead="Wishlist bundle quote"><input type="tel" placeholder="WhatsApp number" required>' +
    '<button class="btn btn--p" type="submit">' + t('m.wishCta') + '</button></form>');
});
function modal(html) {
  var m = $('#modal');
  $('#modalBox').innerHTML = '<button class="mdl__x" data-close aria-label="Close">&times;</button>' + html;
  m.hidden = false; void m.offsetWidth; m.classList.add('on');
  $('#scrim').classList.add('on');
  document.body.style.overflow = 'hidden';
}
$('#modalBox').addEventListener('submit', function(e){
  var f = e.target.closest('form[data-lead]'); if (!f) return;
  e.preventDefault();
  log(f.dataset.lead + ' captured with contact number', { lead:true });
  $('#modalBox').innerHTML = '<div class="ok"><div class="ok__i"><svg viewBox="0 0 24 24"><path d="M5 12l5 5 9-9"/></svg></div>' +
    '<h3>You are on the list</h3><p>We will message you on WhatsApp. This is a draft, so nothing was actually sent.</p>' +
    '<button class="btn btn--p btn--full" data-close style="margin-top:16px">Done</button></div>';
});

/* ---------- trade in ----------
   The four step valuation flow that used to live here is gone. The shop agrees
   prices on WhatsApp, so the site no longer quotes one. What remains is the two
   tap starter further down, which captures brand and condition and hands the
   conversation over. */

/* ---------- finder ---------- */
var fin = { budget:1500, priority:null, brand:'any' };
var sl = $('#finBudget');
function slPaint(){ sl.style.setProperty('--p', (sl.value - sl.min)/(sl.max - sl.min)*100 + '%'); $('#finBudgetOut').textContent = (+sl.value).toLocaleString('en-US'); }
sl.addEventListener('input', function(){ fin.budget = +sl.value; slPaint(); finRun(); });
sl.addEventListener('change', function(){ log('Budget signal: up to <b>' + plain(fin.budget) + '</b>'); });
slPaint();
$('#finPriority').addEventListener('click', function(e){
  var b = e.target.closest('button'); if (!b) return;
  $$('#finPriority button').forEach(function(x){ x.classList.remove('on'); });
  b.classList.add('on'); fin.priority = b.dataset.v;
  log('Priority signal: <b>' + b.textContent + '</b>', { strong:true }); finRun();
});
$('#finBrand').addEventListener('click', function(e){
  var b = e.target.closest('button'); if (!b) return;
  $$('#finBrand button').forEach(function(x){ x.classList.remove('on'); });
  b.classList.add('on'); fin.brand = b.dataset.v; finRun();
});
function finRun() {
  var pro = { ip16p:1, ip15pm:1, ip15p:1, ip14pm:1, ip14p:1, ip13pm:1, ip12pm:1, s23u:1, s22u:1, s21u:1 };
  var list = P.filter(function(p){
    if (p.price > fin.budget) return false;
    if (fin.brand !== 'any' && p.brand !== fin.brand) return false;
    if (fin.priority === 'camera' || fin.priority === 'gaming') return !!pro[p.id];
    return true;
  }).sort(function(a,b){ return b.price - a.price; }).slice(0,3);
  if (!fin.priority) { $('#finOut').innerHTML = '<p class="fin__h">' + t('fin.h') + '</p>'; return; }
  if (!list.length) {
    $('#finOut').innerHTML = '<p class="fin__h">' + t('fin.none') + '</p>' +
      '<div class="fin__c"><p><b>We will hunt for it.</b> Give us your number and we message you when a match arrives.</p><button class="btn btn--p" id="finLead">Alert me</button></div>';
  } else {
    $('#finOut').innerHTML = '<div class="fin__r">' + list.map(function(p){
      return '<div class="fin__m" data-open="' + p.id + '"><div class="fin__im"><img src="' + imgSrc(p, p.colors[0]) + '" alt="" loading="lazy"></div>' +
        '<div><b>' + p.name + '</b><span>' + plain(p.price) + '</span><i>Grade B, in stock</i></div></div>';
    }).join('') + '</div>' +
    '<div class="fin__c"><p><b>Want these compared side by side?</b> We send a one page comparison to your WhatsApp with live prices.</p><button class="btn btn--p" id="finLead">Send my shortlist</button></div>';
  }
}
$('#finOut').addEventListener('click', function(e){
  var m = e.target.closest('[data-open]');
  if (m) { openPDP(byId(m.dataset.open)); return; }
  if (e.target.closest('#finLead')) {
    modal('<h3>' + t('m.shortT') + '</h3><p>' + t('m.shortB') + '</p>' +
      '<form data-lead="Finder shortlist (budget ' + fin.budget + ', wants ' + (fin.priority || 'any') + ')">' +
      '<input placeholder="Your name" required><input type="tel" placeholder="WhatsApp number" required>' +
      '<button class="btn btn--p" type="submit">Send my shortlist</button></form>');
  }
});
finRun();

/* ---------- search ---------- */
var si = $('#searchInput'), sd = $('#searchDrop');
si.addEventListener('input', function(){
  var q = si.value.trim().toLowerCase();
  if (!q) { sd.hidden = true; return; }
  var hits = P.filter(function(p){ return (p.name + ' ' + p.brand).toLowerCase().indexOf(q) > -1; }).slice(0,6);
  sd.innerHTML = hits.length
    ? hits.map(function(p){ return '<a href="#shop" data-open="' + p.id + '"><img src="' + imgSrc(p, p.colors[0]) + '" alt="" loading="lazy">' +
        '<span>' + p.name + '</span><b>' + plain(p.price) + '</b></a>'; }).join('')
    : '<div class="none">No match for "' + si.value + '". We can source it, ask us on WhatsApp.</div>';
  sd.hidden = false;
});
sd.addEventListener('click', function(e){
  var a = e.target.closest('[data-open]'); if (!a) return;
  e.preventDefault(); sd.hidden = true; si.value = ''; openPDP(byId(a.dataset.open));
});
$('#searchForm').addEventListener('submit', function(e){
  e.preventDefault();
  if (si.value.trim()) log('Search query: <b>' + si.value.trim() + '</b>', { strong:true });
});
document.addEventListener('click', function(e){ if (!e.target.closest('.srch') && !e.target.closest('#srchToggle')) sd.hidden = true; });
$('#srchToggle').addEventListener('click', function(){
  var s = $('#searchForm'); s.classList.toggle('on');
  if (s.classList.contains('on')) si.focus();
});
$('#capForm').addEventListener('submit', function(e){
  e.preventDefault();
  var m = $('#capModel').value || 'unspecified model';
  log('Stock alert: wants <b>' + m + '</b>, number captured', { lead:true });
  toast('You are on the list for <b>' + m + '</b>');
  e.target.reset();
});

var exited = false;
document.addEventListener('mouseout', function(e){
  if (exited || e.relatedTarget || e.clientY > 20) return;
  exited = true;
  if (!GIFT.shown && !GIFT.done) { openGift(); return; }
  if (GIFT.done && !GIFT.unlocked) {
    modal('<h3>' + t('m.exitT') + '</h3><p>' + t('m.exitB').replace('{n}', plain(RULES.promo.off)).replace('{m}', plain(RULES.promo.minSpend)) + '</p>' +
      '<form data-lead="Exit intent voucher"><input type="tel" placeholder="WhatsApp number" required>' +
      '<button class="btn btn--p" type="submit">Send me the code</button></form>');
    log('Exit intent triggered: recovery offer shown');
  }
});
/* FABs reveal only after the hero, so they never sit on its CTA */
(function () {
  var on = false;
  function check() {
    var want = scrollY > 380;
    if (want !== on) { on = want; document.body.classList.toggle('scrolled', on); }
  }
  addEventListener('scroll', check, { passive:true }); check();
})();
/* Desktop has exit intent. Touch devices do not, so engagement depth, dwell
   time and a fast upward flick all count toward the same threshold. */
var hit35 = false, hit65 = false, lastY = 0, upRun = 0, leftOnce = false;
window.addEventListener('scroll', function(){
  var y = scrollY, depth = (y + innerHeight) / document.body.scrollHeight;
  if (!hit35 && depth > .35) { hit35 = true; intent(1); }
  if (!hit65 && depth > .65) { hit65 = true; intent(2); }
  /* a hard flick back to the top is the closest thing mobile has to leaving */
  if (y < lastY - 90) upRun += 1; else if (y > lastY) upRun = 0;
  if (!leftOnce && upRun >= 3 && hit35 && y < 400) { leftOnce = true; intent(3); }
  lastY = y;
}, { passive:true });

/* dwell: 25 seconds of an open, visible tab */
var dwell = 0;
setInterval(function(){
  if (document.visibilityState !== 'visible') return;
  dwell += 1;
  if (dwell === 25) intent(2);
}, 1000);

/* ---------- content ---------- */
var ANNO_KEYS = ['anno.1','anno.2','anno.3','anno.4','anno.5'];
function annoList() { return ANNO_KEYS.map(function (k) { return t(k); }); }
function paintAnno() {
  $('#annoTrack').innerHTML = annoList().concat(annoList())
    .map(function (s) { return '<span>' + s + '</span><i></i>'; }).join('');
}
paintAnno();

function revList() {
  return [
    ['Mariam A.', t('d.deira'),   t('rev.1')],
    ['Joseph K.', t('d.quoz'),    t('rev.2')],
    ['Priya S.',  t('d.marina'),  t('rev.3')],
    ['Hassan R.', t('d.baraha'),  t('rev.4')]
  ];
}
function paintRevs() {
  $('#revs').innerHTML = revList().map(function(r){
  return '<article class="rv"><div class="st" role="img" aria-label="Rated 5 out of 5">★★★★★</div><p>' + r[2] + '</p>' +
    '<div class="rv__w"><div class="av">' + r[0][0] + '</div><div><b>' + r[0] + '</b><i>' + r[1] + '</i></div></div></article>';
}).join('');
}
paintRevs();

var PROOF = [['Ahmed','Deira','iPhone 13 Pro Max'],['Sara','JVC','iPhone 15'],
  ['Rahul','Bur Dubai','Galaxy S23 Ultra'],['Fatima','Mirdif','iPhone 14 Pro'],['Omar','JLT','iPhone 12']];
var pi = 0;
setTimeout(function tick(){
  var p = PROOF[pi++ % PROOF.length];
  toast('<b>' + p[0] + '</b> in ' + p[1] + ' just ordered a ' + p[2]);
  setTimeout(tick, 24000);
}, 11000);

/* ================= hero deal carousel ================= */
var DEALS = bestDeals(4);
var dIdx = 0, dTimer = null, DUR = 5200;

function dealSlide(d, i) {
  var p = d.p, pct = Math.round(d.save / p.was * 100);
  var low = p.stock <= 5;
  return '<article class="dsl" data-open="' + p.id + '">' +
    '<div class="dsl__hd">' +
      '<span class="dsl__bg">' + (i === 0 ? t('ui.top') : t('ui.deal') + ' ' + (i + 1)) + '</span>' +
      (low ? '<span class="dsl__st">' + t('card.only').replace('{n}', p.stock) + '</span>' : '') +
      '<img class="dsl__brand" src="' + BRAND[p.brand] + '" alt="' + p.brand + '">' +
    '</div>' +
    '<div class="dsl__im"><img src="' + imgSrc(p, p.colors[0]) + '" alt="' + p.name + '"' +
      (i === 0 ? ' fetchpriority="high"' : ' loading="lazy"') + '></div>' +
    '<div class="dsl__b">' +
      '<h3>' + p.name + '</h3>' +
      '<p class="dsl__m">' + t('deal.grade') + ' &middot; <bdi>' + p.storage[0] + '</bdi> &middot; <bdi>' + p.colors[0][0] + '</bdi></p>' +
      priceBlock(p, d.save, pct) +
      '<span class="btn btn--p btn--full">' + t('deal.cta') + '</span>' +
    '</div></article>';
}
function renderDeals() {
  $('#dealTrack').innerHTML = DEALS.map(dealSlide).join('');
  $('#dealPg').innerHTML = DEALS.map(function (_, i) {
    return '<button class="dpg" data-i="' + i + '" aria-label="Deal ' + (i + 1) + '"><i></i></button>';
  }).join('');
  goDeal(0);
}
function goDeal(i, manual) {
  dIdx = (i + DEALS.length) % DEALS.length;
  /* In RTL the track sits right to left, so advancing means moving it the other
     way. Without this the first slide appears to arrive from the wrong side and
     the sequence reads last to first. */
  var rtl = document.documentElement.dir === 'rtl';
  $('#dealTrack').style.transform = 'translateX(' + ((rtl ? 1 : -1) * dIdx * 100) + '%)';
  $$('#dealPg .dpg').forEach(function (b, n) {
    b.classList.toggle('on', n === dIdx);
    b.classList.toggle('done', n < dIdx);
    var bar = b.firstElementChild;
    bar.style.animation = 'none'; void bar.offsetWidth;
    if (n === dIdx) bar.style.animation = 'dfill ' + DUR + 'ms linear forwards';
  });
  clearTimeout(dTimer);
  dTimer = setTimeout(function () { goDeal(dIdx + 1); }, DUR);
  if (manual) intent(1);
  if (dIdx === 2) intent(1);
}
function pauseDeal() { clearTimeout(dTimer); $$('#dealPg .dpg i').forEach(function (b) { b.style.animationPlayState = 'paused'; }); }
$('#dealNext').addEventListener('click', function () { goDeal(dIdx + 1, true); });
$('#dealPrev').addEventListener('click', function () { goDeal(dIdx - 1, true); });
$('#dealPg').addEventListener('click', function (e) {
  var b = e.target.closest('.dpg'); if (b) goDeal(+b.dataset.i, true);
});
$('#dealTrack').addEventListener('click', function (e) {
  var s = e.target.closest('[data-open]'); if (!s) return;
  var p = byId(s.dataset.open);
  log('Opened a hero deal: <b>' + p.name + '</b>', { strong:true });
  openPDP(p);
});
/* swipe */
(function () {
  var x0 = null, d = $('#deal');
  d.addEventListener('touchstart', function (e) { x0 = e.touches[0].clientX; pauseDeal(); }, { passive:true });
  d.addEventListener('touchend', function (e) {
    if (x0 === null) return;
    var dx = e.changedTouches[0].clientX - x0;
    if (Math.abs(dx) > 40) {
      var fwd = document.documentElement.dir === 'rtl' ? dx > 0 : dx < 0;
      goDeal(dIdx + (fwd ? 1 : -1), true);
    } else goDeal(dIdx);
    x0 = null;
  });
  d.addEventListener('mouseenter', pauseDeal);
  d.addEventListener('mouseleave', function () { goDeal(dIdx); });
})();
renderDeals();

/* ================= trade in starter =================
   Brand, then model, then condition, then contact. No price is quoted anywhere:
   the shop negotiates on WhatsApp, and a figure on screen would either undercut
   that conversation or have to be walked back inside it.

   The model step is ranges rather than exact handsets. "iPhone 14 series" covers
   the Pro, the Pro Max and the Plus in one tap, which keeps a list that would
   otherwise run to forty entries down to six. The exact variant is a question
   the team can ask in the first WhatsApp message, and they have to message
   anyway.

   "Other brand" skips the model step. Asking which model, when we do not know
   the make, is a tap that earns nothing.

   Every step past the first has a back control. Misreading a logo and being
   trapped is the fastest way to lose someone who was already half committed. */
(function () {
  var BRANDS = [
    { k:'apple',   n:'Apple' },
    { k:'samsung', n:'Samsung' },
    { k:'xiaomi',  n:'Xiaomi' },
    { k:'huawei',  n:'Huawei' },
    { k:'other',   n:'Other brand', wide:true }
  ];
  /* model ranges per brand, widest first. Keys, so they translate. */
  var MODELS = {
    apple:   ['m.ip16','m.ip15','m.ip14','m.ip13','m.ip12','m.ipOld'],
    samsung: ['m.s25','m.s23','m.s21','m.sA','m.sFold','m.other'],
    xiaomi:  ['m.mi15','m.mi13','m.rNote','m.redmi','m.poco','m.other'],
    huawei:  ['m.hP','m.hMate','m.hNova','m.hY','m.other']
  };
  var CONDS2 = ['cond.0','cond.1','cond.2'];

  var brand = null, model = null, step = 1;
  var opts = $('#tin2Opts'), head = $('#tin2Head'), lbl = $('#tin2Lbl'),
      stepEl = $('#tin2Step'), hint = $('#tin2Hint');

  function steps() { return brand && brand.k === 'other' ? 2 : 3; }
  function backBtn() {
    return '<button type="button" class="sback" id="tinBack">' +
      '<svg viewBox="0 0 24 24"><path d="M15 6l-6 6 6 6"/></svg>' + t('ui.back') + '</button>';
  }
  function chosenChip() {
    if (!brand || brand.k === 'other') return '';
    return '<span class="tin2__chosen" data-b="' + brand.k + '"><i aria-hidden="true"></i>' + brand.n + '</span>';
  }

  function paint() {
    var hd = '';
    if (step > 1) hd += backBtn();
    if (step === 3) hd += chosenChip();
    head.innerHTML = hd;

    if (step === 1) {
      opts.className = 'tin2__opts tin2__opts--brand';
      opts.innerHTML = BRANDS.map(function (o, i) {
        var inner = o.k === 'other'
          ? '<span class="bt__t">' + t('brand.other') + '</span>'
          : '<i class="bt__m"></i>';
        return '<button class="bt' + (o.wide ? ' wide' : '') + '" data-i="' + i +
          '" data-b="' + o.k + '" aria-label="' + o.n + '">' + inner + '</button>';
      }).join('');
      lbl.innerHTML = t('tin.q1');
      stepEl.textContent = t('tin.stepN').replace('{a}', 1).replace('{b}', 3);
      hint.textContent = t('tin.hint1');
    } else if (step === 2) {
      var list = MODELS[brand.k] || [];
      opts.className = 'tin2__opts tin2__opts--model';
      opts.innerHTML = list.map(function (k, i) {
        var wide = (i === list.length - 1) && (list.length % 2 === 1);
        return '<button class="' + (wide ? 'wide' : '') + '" data-i="' + i + '">' + t(k) + '</button>';
      }).join('');
      lbl.innerHTML = t('tin.q2model');
      stepEl.textContent = t('tin.stepN').replace('{a}', 2).replace('{b}', steps());
      hint.textContent = t('tin.hint2model');
    } else {
      opts.className = 'tin2__opts';
      opts.innerHTML = CONDS2.map(function (k, i) {
        return '<button data-i="' + i + '">' + t(k) + '</button>';
      }).join('');
      lbl.innerHTML = t('tin.q2');
      stepEl.textContent = t('tin.stepN').replace('{a}', steps()).replace('{b}', steps());
      hint.textContent = t('tin.hint2');
    }
  }
  paint();

  /* A language switch mid flow would leave half the panel in the old language,
     so the starter resets rather than translating in place. */
  onLangChange(function () {
    if (!$('#tin2Opts')) { return; }
    brand = null; model = null; step = 1;
    paint();
  });

  head.addEventListener('click', onTap);
  opts.addEventListener('click', onTap);
  function onTap(e) {
    if (e.target.closest('#tinBack')) {
      step = (step === 3 && brand && brand.k === 'other') ? 1 : step - 1;
      if (step < 1) step = 1;
      if (step === 1) { brand = null; model = null; TIN_ACTIVE = false; }
      if (step === 2) model = null;
      paint();
      return;
    }
    var b = e.target.closest('button'); if (!b || !b.dataset.i) return;
    var i = +b.dataset.i;

    if (step === 1) {
      brand = BRANDS[i];
      TIN_ACTIVE = true;
      log(t('log.tinBrand').replace('{b}', '<b>' + brand.n + '</b>'), { strong:true });
      step = brand.k === 'other' ? 3 : 2;
      paint();
      return;
    }
    if (step === 2) {
      model = t((MODELS[brand.k] || [])[i] || 'm.other');
      log(t('log.tinModel').replace('{m}', '<b>' + model + '</b>'), { strong:true });
      step = 3;
      paint();
      return;
    }

    var cond = t(CONDS2[i]);
    var summary = '<bdi>' + brand.n + '</bdi>' + (model ? ' &middot; <bdi>' + model + '</bdi>' : '') +
      ' &middot; ' + cond.toLowerCase();
    log(t('log.tinDone').replace('{b}', brand.n).replace('{c}', cond.toLowerCase()), { strong:true });
    $('.tin2__q').innerHTML =
      '<div class="tin2__next">' +
        '<span class="tin2__nk">' + t('tin.nextTitle') + '</span>' +
        '<ol class="tin2__steps">' +
          '<li>' + t('tin.next1') + '</li>' +
          '<li>' + t('tin.next2') + '</li>' +
          '<li>' + t('tin.next3') + '</li>' +
        '</ol>' +
        '<p class="tin2__sum">' + summary + '</p>' +
      '</div>' +
      '<button class="btn btn--p btn--full" id="tin2Lock" style="margin-top:10px">' + t('tin.cta') + '</button>' +
      '<p class="tin2__step" style="justify-content:center"><span>' + t('tin.hours') + '</span></p>';
    TIN_ACTIVE = false;   /* request is ready, the gift prompt may fire again */
  }

  $('#tin2').addEventListener('click', function (e) {
    if (!e.target.closest('#tin2Lock')) return;
    modal('<h3>' + t('tin.mTitle') + '</h3><p>' + t('tin.mBody') + '</p>' +
      '<form data-lead="Trade in request from the hero starter"><input placeholder="' + t('f.name') + '" required>' +
      '<input type="tel" placeholder="' + t('f.wa') + '" required>' +
      '<button class="btn btn--p" type="submit">' + t('tin.mCta') + '</button></form>' +
      '<p class="fine">' + t('tin.mFine') + '</p>');
  });
})();

/* ================= auto scrolling offer rail ================= */
(function () {
  var list = bestDeals(8);
  function chip(d) {
    var p = d.p;
    return '<button class="ochip" data-open="' + p.id + '">' +
      '<div class="ochip__im"><img src="' + imgSrc(p, p.colors[0]) + '" alt="" loading="lazy"></div>' +
      '<div><b>' + p.name + '</b>' +
      '<span class="ochip__f">' + t('price.fromShort') + ' ' + money(inst(p.price)) + ' <em>x4</em></span>' +
      '<span class="ochip__s">' + t('ui.save') + ' ' + money(d.save) + '</span></div></button>';
  }
  /* duplicated once so the marquee loops seamlessly */
  function paintRail() { $('#offerTrack').innerHTML = list.concat(list).map(chip).join(''); }
  paintRail();
  onLangChange(paintRail);
  $('#offerTrack').addEventListener('click', function (e) {
    var b = e.target.closest('[data-open]'); if (!b) return;
    var p = byId(b.dataset.open);
    log('Opened an offer from the rail: <b>' + p.name + '</b>', { strong:true });
    openPDP(p);
  });
})();

/* hero + rail imagery */
$$('[data-dev]').forEach(function(el){
  var p = byId(el.dataset.dev);
  if (p) el.innerHTML = '<img src="' + imgSrc(p, p.colors[0]) + '" alt="' + p.name + '" loading="lazy">';
});

$('#burger').addEventListener('click', function(){
  $('#nav').classList.toggle('on'); this.classList.toggle('on');
});
$$('.nav__in a').forEach(function(a){
  a.addEventListener('click', function(){ $('#nav').classList.remove('on'); $('#burger').classList.remove('on'); });
});
$('#yr').textContent = new Date().getFullYear();

renderGrid(); renderCart();

/* ---------- language ----------
   Everything above is inside this module closure, so the redraw has to be
   registered from in here. Static markup is handled by applyI18n in i18n.js. */
onLangChange(function () {
  CONDS = conds();
  BUNDLES = bundles();
  renderGrid();
  renderDeals();
  renderCart();
  paintAnno();
  paintRevs();
  finRun();
  goDeal(dIdx);   /* direction may have flipped, recompute the track offset */
});

/* ================= standing gift reminder =================
   Once the code is claimed it is easy to forget it exists until checkout, which
   is exactly when it stops influencing the decision. A small glowing chip keeps
   it in view the whole way round. */
function showGiftFab() {
  var f = $('#gfab');
  if (!f) return;
  $('#gfabAmt').innerHTML = t('gfab.off').replace('{n}', plain(RULES.promo.off));
  $('#gfabSub').textContent = RULES.promo.code;
  f.hidden = false;
}
if ($('#gfab')) {
  $('#gfab').addEventListener('click', function () {
    if (navigator.clipboard) navigator.clipboard.writeText(RULES.promo.code).catch(function () {});
    toast(t('gfab.toast').replace('{c}', '<b>' + RULES.promo.code + '</b>')
      .replace('{m}', plain(RULES.promo.minSpend)));
    log('Tapped the standing gift reminder');
  });
}
onLangChange(function () { if (GIFT.unlocked) showGiftFab(); });

/* ================= welcome language chooser ================= */
(function () {
  var pop = $('#wpop');
  if (!pop) return;
  var CHOSEN = 'tdr-lang-chosen';
  var already = false;
  try { already = !!localStorage.getItem(CHOSEN); } catch (e) {}

  function paint() {
    $('#wpopT').textContent = t('wel.title');
    $('#wpopP').textContent = t('wel.sub');
    $('#wpopG').innerHTML = LANGS.map(function (l) {
      return '<button type="button" data-w="' + l.code + '">' +
        '<img class="lgf" src="assets/img/flag/' + l.code + '.png" alt="" width="26" height="18">' +
        '<b>' + l.name + '</b></button>';
    }).join('');
  }
  function close() {
    pop.hidden = true;
    document.body.style.overflow = '';
    try { localStorage.setItem(CHOSEN, '1'); } catch (e) {}
  }
  pop.addEventListener('click', function (e) {
    if (e.target.closest('#wpopX') || e.target.classList.contains('wpop__s')) { close(); return; }
    var b = e.target.closest('[data-w]');
    if (!b) return;
    var code = b.getAttribute('data-w');
    setLang(code);
    log('Chose ' + code.toUpperCase() + ' from the welcome prompt');
    close();
  });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape' && !pop.hidden) close(); });

  /* if the language is changed from the header while this is open, keep it in step */
  onLangChange(function () { if (!pop.hidden) paint(); });

  /* A beat, not instantly. Long enough to read the headline and see a phone,
     short enough that nobody has started tapping. */
  if (!already) setTimeout(function () {
    if (!pop.hidden) return;
    if (TIN_ACTIVE || (GIFT.shown && !GIFT.done)) return;  /* never stack prompts */
    paint();
    pop.hidden = false;
    document.body.style.overflow = 'hidden';
  }, 2800);
})();

})();
