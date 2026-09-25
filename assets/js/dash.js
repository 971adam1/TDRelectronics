/* TDR Electronic - website dashboard. Fictional demo data. */
(function () {
'use strict';
var $ = function (s, r) { return (r || document).querySelector(s); };
var $$ = function (s, r) { return [].slice.call((r || document).querySelectorAll(s)); };
var D = '<i class="dh" aria-hidden="true"></i>';
var n = function (v) { return v.toLocaleString('en-US'); };
var aed = function (v) { return D + n(v); };

var IC = {
  up:'<svg viewBox="0 0 24 24"><path d="M5 15l7-7 7 7"/></svg>',
  dn:'<svg viewBox="0 0 24 24"><path d="M19 9l-7 7-7-7"/></svg>',
  clock:'<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>',
  bell:'<svg viewBox="0 0 24 24"><path d="M6 8a6 6 0 1 1 12 0c0 6 2 7 2 7H4s2-1 2-7z"/><path d="M10 20h4"/></svg>',
  search:'<svg viewBox="0 0 24 24"><circle cx="11" cy="11" r="7"/><path d="M20 20l-3.5-3.5"/></svg>',
  wa:'<svg viewBox="0 0 24 24" style="fill:currentColor;stroke:none"><path d="M12 2a10 10 0 0 0-8.6 15l-1.4 5 5.2-1.4A10 10 0 1 0 12 2m0 18a8 8 0 0 1-4.1-1.1l-.3-.2-3 .8.8-2.9-.2-.3A8 8 0 1 1 12 20m4.5-6c-.2-.1-1.4-.7-1.7-.8s-.4-.1-.5.1-.6.8-.8 1-.3.2-.5.1a6.6 6.6 0 0 1-3.3-2.9c-.2-.4 0-.5.1-.7l.4-.4.2-.4v-.4l-.8-1.8c-.2-.5-.4-.4-.5-.4h-.5a.9.9 0 0 0-.7.3 2.8 2.8 0 0 0-.8 2 4.8 4.8 0 0 0 1 2.5 11 11 0 0 0 4.2 3.7c1.5.6 2.1.7 2.9.6a2.5 2.5 0 0 0 1.6-1.2 2 2 0 0 0 .2-1.1z"/></svg>',
  info:'<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><path d="M12 16v-4M12 8h.01"/></svg>',
  fire:'<svg viewBox="0 0 24 24"><path d="M12 3s5 4 5 9a5 5 0 0 1-10 0c0-2 1-3 1-3s1 1 1 2 3-4 3-8z"/></svg>',
  eye:'<svg viewBox="0 0 24 24"><path d="M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7-10-7-10-7z"/><circle cx="12" cy="12" r="3"/></svg>',
  people:'<svg viewBox="0 0 24 24"><path d="M17 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9.5" cy="7" r="4"/></svg>',
  bag:'<svg viewBox="0 0 24 24"><path d="M6 6h15l-1.5 9h-12z"/><path d="M6 6L5 2H2"/></svg>',
  cash:'<svg viewBox="0 0 24 24"><rect x="2" y="6" width="20" height="12" rx="2"/><circle cx="12" cy="12" r="2.5"/></svg>',
  swap:'<svg viewBox="0 0 24 24"><path d="M4 8h16l-4-4M20 16H4l4 4"/></svg>',
  check:'<svg viewBox="0 0 24 24"><path d="M5 12l5 5 9-9"/></svg>'
};

/* ---------- fictional data, scaled per range ---------- */
var BASE = {
  visitors:4182, viewed:1247, leads:186, orders:41, revenue:68400, pipeline:214300,
  dVisitors:18, dLeads:24, dOrders:12, dRevenue:31
};
var SPARK = {
  visitors:[38,44,41,52,49,58,55,63,60,71,68,76,74,82],
  leads:[12,15,13,19,17,22,20,26,24,29,27,33,31,37],
  orders:[3,4,3,5,4,6,5,7,6,7,7,8,8,9],
  revenue:[22,27,25,33,30,38,36,44,41,49,47,55,53,61]
};
var SCALE = { 7:0.23, 30:1, 90:2.75 };
var range = 30;
function sc(v){ return Math.round(v * SCALE[range]); }

var SOURCES = [
  { n:'Instagram', v:42, c:'var(--c1)' },
  { n:'Google',    v:28, c:'var(--c2)' },
  { n:'Direct',    v:19, c:'var(--c3)' },
  { n:'WhatsApp',  v:11, c:'var(--c4)' }
];
var CAPTURE = [
  { n:'Welcome gift popup', v:78 }, { n:'Trade in request', v:43 },
  { n:'Price watch', v:31 }, { n:'Stock alert', v:22 }, { n:'Wishlist bundle', v:12 }
];
var NOTFOUND = [
  { n:'iPhone 17 Pro Max', v:47 }, { n:'Galaxy S25 Ultra', v:31 },
  { n:'AirPods Pro 2', v:28 }, { n:'iPhone SE', v:19 }, { n:'iPad Air', v:14 }
];
var COLOURS = [
  { n:'Natural Titanium', v:34 }, { n:'Black / Space Black', v:27 },
  { n:'Blue', v:19 }, { n:'White / Silver', v:12 }, { n:'Everything else', v:8 }
];
var PRODUCTS = [
  { id:'ip13',   name:'iPhone 13',          brand:'Apple',   img:'ip13-midnight',            views:312, cart:44, sold:18, rev:17622 },
  { id:'ip15pm', name:'iPhone 15 Pro Max',  brand:'Apple',   img:'ip15pm-naturaltitanium',   views:289, cart:12, sold:3,  rev:6987 },
  { id:'ip12',   name:'iPhone 12',          brand:'Apple',   img:'ip12-black',               views:241, cart:31, sold:14, rev:9366 },
  { id:'s23u',   name:'Galaxy S23 Ultra',   brand:'Samsung', img:'s23u-green',               views:198, cart:18, sold:7,  rev:11403 },
  { id:'ip14p',  name:'iPhone 14 Pro',      brand:'Apple',   img:'ip14p-spaceblack',         views:176, cart:21, sold:9,  rev:14121 }
];
var LEADS = [
  { nm:'Ahmed K.',  want:'iPhone 15 Pro, Blue Titanium', bud:2000, via:'Welcome gift, viewed 4 times', when:'2 hours ago',  t:'hot' },
  { nm:'Fatima R.', want:'Trade in, Apple, a few scratches', bud:0, via:'Waiting on a reply',      when:'5 hours ago',  t:'hot' },
  { nm:'Omar H.',   want:'iPhone 16 Pro',                bud:2600, via:'Wishlisted twice',             when:'8 hours ago',  t:'hot' },
  { nm:'Rahul S.',  want:'Galaxy S23 Ultra',             bud:1600, via:'Watching the price',           when:'1 day ago',    t:'warm' },
  { nm:'Mariam A.', want:'iPhone 12, any colour',        bud:700,  via:'Stock alert',                  when:'1 day ago',    t:'warm' },
  { nm:'Layla B.',  want:'iPhone 14 Pro, Deep Purple',   bud:1600, via:'Welcome gift',                 when:'2 days ago',   t:'warm' },
  { nm:'Priya N.',  want:'iPhone 11',                    bud:520,  via:'Welcome gift',                 when:'3 days ago',   t:'cold' },
  { nm:'Yusuf M.',  want:'Galaxy S24',                   bud:1450, via:'Phone finder shortlist',       when:'4 days ago',   t:'cold' }
];
/* A trade in request is brand + condition + a contact. The price is agreed in
   the WhatsApp conversation, so what the dashboard tracks is how far along that
   conversation is, not a number the site invented. */
var REQS = [
  { nm:'Fatima R.', br:'Apple',   cond:'A few scratches',   st:'new',      d:'Came in 14 minutes ago' },
  { nm:'Sami T.',   br:'Apple',   cond:'Looks new',         st:'new',      d:'Came in 40 minutes ago' },
  { nm:'Noor A.',   br:'Samsung', cond:'Cracked or faulty', st:'new',      d:'Came in an hour ago' },
  { nm:'Khalid J.', br:'Apple',   cond:'Looks new',         st:'talking',  d:'Replied on WhatsApp' },
  { nm:'Aisha D.',  br:'Xiaomi',  cond:'A few scratches',   st:'talking',  d:'Sent photos of the phone' },
  { nm:'Bilal Q.',  br:'Huawei',  cond:'Cracked or faulty', st:'agreed',   d:'Price agreed, collecting Thursday' },
  { nm:'Hana W.',   br:'Samsung', cond:'Looks new',         st:'done',     d:'Bought, applied to a new phone' }
];

/* ---------- pieces ---------- */
function spark(data, colour) {
  var w = 200, h = 34, mx = Math.max.apply(null, data), mn = Math.min.apply(null, data);
  var pts = data.map(function (v, i) {
    var x = i / (data.length - 1) * w;
    var y = h - ((v - mn) / (mx - mn || 1)) * (h - 4) - 2;
    return x.toFixed(1) + ',' + y.toFixed(1);
  });
  var last = pts[pts.length - 1].split(',');
  return '<svg class="spark" viewBox="0 0 ' + w + ' ' + h + '" preserveAspectRatio="none" aria-hidden="true">' +
    '<polyline points="' + pts.join(' ') + '" fill="none" stroke="' + colour + '" stroke-width="2" ' +
    'stroke-linecap="round" stroke-linejoin="round" vector-effect="non-scaling-stroke"/>' +
    '<circle cx="' + last[0] + '" cy="' + last[1] + '" r="3" fill="' + colour + '" stroke="#fff" stroke-width="2"/></svg>';
}
function stat(o) {
  return '<div class="card"><div class="st__l">' + o.ic + o.label + '</div>' +
    '<div class="st__v">' + o.value + '</div>' +
    '<div class="st__d ' + (o.delta >= 0 ? 'up' : 'dn') + '">' + (o.delta >= 0 ? IC.up : IC.dn) +
    Math.abs(o.delta) + '%<span>vs previous ' + range + ' days</span></div>' +
    spark(o.spark, o.colour || 'var(--c1)') + '</div>';
}
/* Bar row carries its own value, so the chart is also its table view. */
function bars(rows, opt) {
  opt = opt || {};
  var max = Math.max.apply(null, rows.map(function (r) { return r.v; }));
  return '<div class="bars">' + rows.map(function (r) {
    return '<div class="bar__r" data-tip="' + (r.tip || (r.n + ': ' + n(r.v) + (opt.unit || ''))) + '">' +
      '<span class="bar__n">' + r.n + '</span>' +
      '<span class="bar__v num">' + n(r.v) + (opt.unit || '') + (r.sub ? ' <em>' + r.sub + '</em>' : '') + '</span>' +
      '<i class="bar__t"><b class="bar__f' + (opt.warn ? ' bar__f--warn' : '') + '" style="width:' +
      (r.v / max * 100).toFixed(1) + '%"></b></i></div>';
  }).join('') + '</div>';
}

/* ---------- pages ---------- */
function overview() {
  var d = { visitors:sc(BASE.visitors), viewed:sc(BASE.viewed), leads:sc(BASE.leads),
            orders:sc(BASE.orders), revenue:sc(BASE.revenue), pipeline:sc(BASE.pipeline) };
  var fn = [
    { n:'Visited the website',   v:d.visitors, c:'var(--o1)' },
    { n:'Looked at a phone',     v:d.viewed,   c:'var(--o2)' },
    { n:'Gave you their number', v:d.leads,    c:'var(--o3)' },
    { n:'Placed an order',       v:d.orders,   c:'var(--o4)' }
  ];
  var maxF = fn[0].v;

  var html =
  '<div class="grid4">' +
    stat({ ic:IC.people, label:'New leads', value:n(d.leads), delta:BASE.dLeads, spark:SPARK.leads }) +
    stat({ ic:IC.cash,  label:'Pipeline value', value:aed(d.pipeline), delta:BASE.dLeads, spark:SPARK.leads, colour:'var(--c3)' }) +
    stat({ ic:IC.bag,   label:'Orders from the website', value:n(d.orders), delta:BASE.dOrders, spark:SPARK.orders, colour:'var(--c2)' }) +
    stat({ ic:IC.cash,  label:'Revenue from the website', value:aed(d.revenue), delta:BASE.dRevenue, spark:SPARK.revenue, colour:'var(--c2)' }) +
  '</div>' +

  '<div class="sec__h"><h2>Needs you today</h2><p>Three things worth ten minutes</p></div>' +
  '<div class="acts">' +
    '<div class="act act--crit"><div class="act__t">' + IC.clock + 'Needs a reply</div>' +
      '<h3>3 trade in requests are waiting on a reply</h3>' +
      '<p>They told you what they have and left a number. Nobody has messaged them back yet.</p>' +
      '<button class="btn btn--wa" data-go="tradein">' + IC.wa + 'Message all three</button></div>' +
    '<div class="act act--good"><div class="act__t">' + IC.bell + 'Back in stock</div>' +
      '<h3>14 people are waiting on an iPhone 13</h3>' +
      '<p>You have 15 in stock right now. Nobody has told them yet.</p>' +
      '<button class="btn btn--wa">' + IC.wa + 'Tell them it landed</button></div>' +
    '<div class="act act--warn"><div class="act__t">' + IC.search + 'Missed demand</div>' +
      '<h3>139 searches for phones you do not list</h3>' +
      '<p>People came looking and left with nothing. The top one was searched 47 times.</p>' +
      '<button class="btn btn--o" data-go="demand">See what they wanted</button></div>' +
  '</div>' +

  '<div class="sec__h"><h2>How visitors turn into customers</h2>' +
    '<p>Every step, out of ' + n(d.visitors) + ' people</p></div>' +
  '<div class="card"><div class="fn">' +
    fn.map(function (s, i) {
      var prev = i ? fn[i-1] : null;
      var drop = prev ? '<div class="fn__drop">' + IC.dn +
        (100 - s.v / prev.v * 100).toFixed(0) + '% of the previous step dropped off here</div>' : '';
      var pct = s.v / maxF * 100;
      return drop + '<div class="fnr" data-tip="' + s.n + ': ' + n(s.v) + ' people, ' + pct.toFixed(1) + '% of visitors">' +
        '<span class="fnr__n">' + s.n + '</span>' +
        '<span class="fnr__v"><b class="num">' + n(s.v) + '</b> <em class="num">' + pct.toFixed(1) + '%</em></span>' +
        '<i class="fnr__t"><b style="width:' + Math.max(0.6, pct).toFixed(2) + '%;background:' + s.c + '"></b></i></div>';
    }).join('') +
  '</div>' +
  '<div class="note">' + IC.info + '<p><b>Read it like this:</b> for every 100 people who land on the site, about ' +
    (d.viewed / d.visitors * 100).toFixed(0) + ' look at a phone, ' +
    (d.leads / d.visitors * 100).toFixed(0) + ' hand over their number, and ' +
    (d.orders / d.visitors * 100).toFixed(1) + ' buy. The gap between step 2 and step 3 is where the welcome gift popup does its work.</p></div></div>' +

  '<div class="g23" style="margin-top:14px">' +
    '<div class="card"><div class="sec__h" style="margin:0 0 14px"><h2>Where visitors came from</h2></div>' +
      '<div class="shr">' + SOURCES.map(function (s) {
        return '<div class="shr__s" style="background:' + s.c + ';flex:' + s.v +
          '" data-tip="' + s.n + ': ' + s.v + '% of visitors"><span>' + s.v + '%</span></div>';
      }).join('') + '</div>' +
      '<div class="lgd">' + SOURCES.map(function (s) {
        return '<div><i style="background:' + s.c + '"></i><b>' + s.n + '</b><span>' + s.v + '%</span></div>';
      }).join('') + '</div>' +
      '<div class="note">' + IC.info + '<p>Instagram brings the most people. Google brings fewer, but they arrive already searching for a specific phone.</p></div>' +
    '</div>' +
    '<div class="card"><div class="sec__h" style="margin:0 0 14px"><h2>What made people hand over a number</h2></div>' +
      bars(CAPTURE.map(function (c) { return { n:c.n, v:sc(c.v), tip:c.n + ': ' + sc(c.v) + ' leads' }; }), { unit:' leads' }) +
    '</div>' +
  '</div>';
  return html;
}

function leads() {
  var chip = { hot:'chip--hot', warm:'chip--warm', cold:'chip--cold' };
  var lbl = { hot:'Hot', warm:'Warm', cold:'Cold' };
  return '<div class="grid4">' +
    stat({ ic:IC.people, label:'Leads captured', value:n(sc(BASE.leads)), delta:BASE.dLeads, spark:SPARK.leads }) +
    stat({ ic:IC.fire, label:'Hot right now', value:'23', delta:19, spark:SPARK.leads, colour:'var(--c3)' }) +
    stat({ ic:IC.cash, label:'Pipeline value', value:aed(sc(BASE.pipeline)), delta:BASE.dLeads, spark:SPARK.revenue, colour:'var(--c3)' }) +
    stat({ ic:IC.check, label:'Turned into orders', value:'22%', delta:6, spark:SPARK.orders, colour:'var(--c2)' }) +
  '</div>' +
  '<div class="sec__h"><h2>Everyone who left their number</h2>' +
    '<p>Newest first. Hot means they looked more than once or asked for a price.</p></div>' +
  '<div class="tw"><table><thead><tr><th>Person</th><th>What they want</th><th class="r">Worth</th>' +
    '<th>How we got them</th><th>When</th><th></th></tr></thead><tbody>' +
    LEADS.map(function (l) {
      return '<tr><td><div class="who"><div class="av">' + l.nm[0] + '</div><div><b>' + l.nm + '</b>' +
        '<i><span class="chip ' + chip[l.t] + '">' + (l.t === 'hot' ? IC.fire : l.t === 'warm' ? IC.clock : IC.eye) +
        lbl[l.t] + '</span></i></div></div></td>' +
        '<td>' + l.want + '</td><td class="r num">' + aed(l.bud) + '</td>' +
        '<td style="color:var(--ink2)">' + l.via + '</td>' +
        '<td style="color:var(--ink3);white-space:nowrap">' + l.when + '</td>' +
        '<td class="r"><button class="btn btn--wa btn--sm">' + IC.wa + 'WhatsApp</button></td></tr>';
    }).join('') + '</tbody></table></div>' +
  '<div class="note">' + IC.info + '<p><b>Why this matters:</b> every row is a person who told you what they want and how to reach them, without anyone on your team asking. That did not exist before the website.</p></div>';
}

function demand() {
  return '<div class="sec__h"><h2>Searched for, but you do not sell it</h2>' +
    '<p>People came looking for these and left empty handed. This is your shopping list.</p></div>' +
  '<div class="g23"><div class="card">' + bars(NOTFOUND.map(function (r) {
      return { n:r.n, v:sc(r.v), tip:r.n + ': searched ' + sc(r.v) + ' times, 0 results' };
    }), { unit:' searches', warn:true }) +
    '<div class="note">' + IC.info + '<p><b>What to do:</b> the top two alone were searched ' +
      sc(78) + ' times this month. If even one in ten of those had bought, that is roughly ' +
      aed(sc(19000)) + ' you did not take.</p></div></div>' +
    '<div class="card"><div class="sec__h" style="margin:0 0 14px"><h2>Colours people picked</h2>' +
      '<p>Share of colour swatches tapped</p></div>' +
      bars(COLOURS, { unit:'%' }) +
      '<div class="note">' + IC.info + '<p>Buy Natural Titanium and Black first. They are more than half of everything people look at.</p></div>' +
    '</div></div>' +

  '<div class="sec__h"><h2>Looked at, versus actually bought</h2>' +
    '<p>A big gap means people liked it but something stopped them, usually the price</p></div>' +
  '<div class="tw"><table><thead><tr><th>Phone</th><th class="r">Looked at</th><th class="r">Added to cart</th>' +
    '<th class="r">Sold</th><th class="r">Buys per 100 views</th><th class="r">Revenue</th><th></th></tr></thead><tbody>' +
    PRODUCTS.map(function (p) {
      var cr = p.sold / p.views * 100, weak = cr < 2;
      return '<tr><td><div class="prod"><div class="pth"><img src="assets/img/p/' + p.img + '.jpg" alt="" loading="lazy"></div>' +
        '<div><b>' + p.name + '</b><br><img class="bl" src="assets/img/logo/' +
        (p.brand === 'Apple' ? 'apple.svg' : 'samsung.png') + '" alt="' + p.brand + '"></div></div></td>' +
        '<td class="r num">' + n(sc(p.views)) + '</td><td class="r num">' + n(sc(p.cart)) + '</td>' +
        '<td class="r num">' + n(sc(p.sold)) + '</td>' +
        '<td class="r num" style="font-weight:800;' + (weak ? 'color:var(--crit)' : '') + '">' + cr.toFixed(1) + '</td>' +
        '<td class="r num">' + aed(sc(p.rev)) + '</td>' +
        '<td class="r">' + (weak ? '<span class="chip chip--hot">' + IC.clock + 'Check price</span>'
                                 : '<span class="chip chip--good">' + IC.check + 'Healthy</span>') + '</td></tr>';
    }).join('') + '</tbody></table></div>' +
  '<div class="note">' + IC.info + '<p><b>The one to act on:</b> the iPhone 15 Pro Max was looked at ' +
    n(sc(289)) + ' times and sold ' + sc(3) + '. Everything else sells about five per hundred views. ' +
    'Either the price is above what this audience will pay, or the grade on offer is not the one they want.</p></div>';
}

function tradein() {
  var chip = { new:'chip--hot', talking:'chip--warm', agreed:'chip--warm', done:'chip--good' };
  var lbl  = { new:'Needs a reply', talking:'In conversation', agreed:'Price agreed', done:'Bought' };
  var ico  = { new:IC.clock, talking:IC.wa, agreed:IC.check, done:IC.check };
  var waiting = REQS.filter(function (r) { return r.st === 'new'; }).length;

  return '<div class="grid4">' +
    stat({ ic:IC.swap,  label:'Trade in requests', value:n(sc(61)), delta:34, spark:SPARK.leads }) +
    stat({ ic:IC.clock, label:'Waiting on a reply', value:String(waiting), delta:-12, spark:SPARK.orders, colour:'var(--c3)' }) +
    stat({ ic:IC.wa,    label:'In conversation',   value:n(sc(12)), delta:19, spark:SPARK.leads, colour:'var(--c1)' }) +
    stat({ ic:IC.check, label:'Phones bought',     value:n(sc(18)), delta:22, spark:SPARK.orders, colour:'var(--c2)' }) +
  '</div>' +
  '<div class="note" style="margin-top:14px">' + IC.info +
    '<p><b>Worth understanding:</b> every request here is you <b>buying</b> stock, not selling it. ' +
    'The website does not put a price on anything. It gets you the phone, the condition and a number, ' +
    'then you agree the price on WhatsApp the way you always have. ' +
    'The value is that the conversation now starts with someone who has already told you what they have.</p></div>' +
  '<div class="sec__h"><h2>Every request from the website</h2><p>The ones nobody has replied to are first</p></div>' +
  '<div class="tw"><table><thead><tr><th>Person</th><th>Brand</th><th>Their condition</th>' +
    '<th>Where it got to</th><th></th></tr></thead><tbody>' +
    REQS.map(function (r) {
      return '<tr><td><div class="who"><div class="av">' + r.nm[0] + '</div><div><b>' + r.nm + '</b>' +
        '<i>' + r.d + '</i></div></div></td><td style="font-weight:700">' + r.br + '</td><td>' + r.cond + '</td>' +
        '<td><span class="chip ' + chip[r.st] + '">' + ico[r.st] + lbl[r.st] + '</span></td>' +
        '<td class="r">' + (r.st === 'done' || r.st === 'agreed' ? '' :
          '<button class="btn btn--wa btn--sm">' + IC.wa + 'Message</button>') + '</td></tr>';
    }).join('') + '</tbody></table></div>' +
  '<div class="sec__h"><h2>What brands people are bringing you</h2>' +
    '<p>Tells you what is about to come into your stock</p></div>' +
  '<div class="card">' + bars([
    { n:'Apple', v:sc(27) }, { n:'Samsung', v:sc(16) }, { n:'Xiaomi', v:sc(9) },
    { n:'Huawei', v:sc(6) }, { n:'Other brand', v:sc(3) }
  ], { unit:' requests' }) + '</div>' +
  '<div class="sec__h"><h2>What condition they say it is in</h2>' +
    '<p>Rough, but enough to know what is worth chasing first</p></div>' +
  '<div class="card">' + bars([
    { n:'Looks new', v:sc(24) }, { n:'A few scratches', v:sc(26) }, { n:'Cracked or faulty', v:sc(11) }
  ], { unit:' requests' }) + '</div>';
}

/* ---------- shell ---------- */
var PAGES = {
  overview:{ fn:overview, t:'Overview', s:'What the website did for you in the last __ days' },
  leads:{ fn:leads, t:'Leads', s:'People who left their number on the website' },
  demand:{ fn:demand, t:'What people want', s:'Demand signals you can buy stock against' },
  tradein:{ fn:tradein, t:'Trade ins', s:'Phones the website is lining up for you to buy' }
};
var cur = 'overview';
function render() {
  var p = PAGES[cur];
  $('#p-' + cur).innerHTML = p.fn();
  $('#pgTitle').textContent = p.t;
  $('#pgSub').textContent = p.s.replace('__', range);
  requestAnimationFrame(function () {
    $$('#p-' + cur + ' .bar__f').forEach(function (b) { b.style.width = b.style.width; });
  });
}
function go(id) {
  cur = id;
  $$('.pg').forEach(function (x) { x.classList.toggle('on', x.id === 'p-' + id); });
  $$('#nav button').forEach(function (b) { b.classList.toggle('on', b.dataset.p === id); });
  render();
  window.scrollTo({ top:0, behavior:'smooth' });
  $('#sb').classList.remove('on');
}
$('#nav').addEventListener('click', function (e) {
  var b = e.target.closest('button[data-p]'); if (b) go(b.dataset.p);
});
$('#range').addEventListener('click', function (e) {
  var b = e.target.closest('button'); if (!b) return;
  $$('#range button').forEach(function (x) { x.classList.remove('on'); });
  b.classList.add('on'); range = +b.dataset.r; render();
});
document.addEventListener('click', function (e) {
  var g = e.target.closest('[data-go]'); if (g) { go(g.dataset.go); return; }
  var w = e.target.closest('.btn--wa');
  if (w) { w.innerHTML = IC.check + 'Opened in WhatsApp'; w.style.background = 'var(--good)'; }
});
$('#mnav').addEventListener('click', function () { $('#sb').classList.toggle('on'); });

/* hover tooltips - enhance only, every value is already on screen */
var tip = $('#tip');
document.addEventListener('mouseover', function (e) {
  var t = e.target.closest('[data-tip]'); if (!t) return;
  tip.textContent = t.dataset.tip; tip.hidden = false;
});
document.addEventListener('mousemove', function (e) {
  if (tip.hidden) return;
  var x = Math.min(e.clientX + 14, innerWidth - tip.offsetWidth - 10);
  tip.style.left = x + 'px';
  tip.style.top = (e.clientY - tip.offsetHeight - 10) + 'px';
});
document.addEventListener('mouseout', function (e) {
  if (e.target.closest('[data-tip]')) tip.hidden = true;
});

render();
})();
