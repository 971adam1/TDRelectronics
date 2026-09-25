/* ============================================================================
   Four languages, two writing directions.

   English and Hindi run left to right. Arabic and Urdu run right to left, which
   means the whole layout mirrors, not just the text.

   Two deliberate decisions worth knowing before you change anything here:

   1. NUMBERS STAY WESTERN. Prices render as 2,949 in every language, never as
      ٢٬٩٤٩. That is what UAE commerce actually does, and mixing Eastern Arabic
      digits into a price next to a Latin model name is where bidi reordering
      goes wrong.

   2. URDU IS SET IN NASTALIQ. Urdu written in plain Naskh reads as wrong to an
      Urdu speaker in the way English set in all caps reads as shouting. Nastaliq
      needs roughly double the line height and has deep descenders, so the layout
      loosens for `ur` on purpose. That cost is worth paying.

   Product names and colour names are not translated. "iPhone 15 Pro Max" and
   "Natural Titanium" stay in Latin in every language, which is how phones are
   actually sold here.
   ========================================================================== */

var LANGS = [
  { code: 'en', name: 'English',  dir: 'ltr' },
  { code: 'ar', name: 'العربية',  dir: 'rtl' },
  { code: 'hi', name: 'हिन्दी',     dir: 'ltr' },
  { code: 'ur', name: 'اردو',     dir: 'rtl' }
];

var I18N = {

/* ------------------------------------------------------------------ ENGLISH */
en: {
  'lang.label':'Language',

  'nav.iphone':'iPhone', 'nav.samsung':'Samsung', 'nav.all':'All phones',
  'nav.grades':'Condition guide', 'nav.tradein':'Trade in', 'nav.finder':'Phone finder',
  'nav.visit':'Visit us', 'nav.menu':'Menu', 'nav.search':'Search',
  'nav.searchPh':'Search iPhone 15, Galaxy S23', 'nav.wish':'Wishlist', 'nav.cart':'Cart',

  'hero.eyb':'Al Baraha, Deira · Since 2019',
  'hero.h1a':'Premium phones,', 'hero.h1b':'half the price.',
  'hero.sub':'Every phone tested and graded before it reaches you.',
  'hero.cta':'Shop all phones',
  'hero.rating':'4.8 out of 5', 'hero.ratingFrom':'from 2,140 Dubai customers',

  'trust.warranty':'12 month warranty', 'trust.warrantySub':'Every graded phone',
  'trust.delivery':'Free delivery',     'trust.deliverySub':'Same day in Dubai',
  'trust.returns':'10 day returns',     'trust.returnsSub':'No questions asked',
  'trust.pay4':'Pay in 4',              'trust.pay4Sub':'interest free',

  'tin.title':'Trade in your old phone', 'tin.sub':'Pay less, or take the cash',
  'tin.old':'Your old phone', 'tin.new':'A newer one',
  'tin.q1':'Which phone do you have?', 'tin.q2':'What condition is it in?',
  'tin.step1':'Step 1 of 2', 'tin.step2':'Step 2 of 2',
  'tin.hint1':'Tap your brand, takes ten seconds', 'tin.hint2':'Last one, then we take it from there',
  'tin.nextTitle':'What happens next',
  'tin.next1':'We message you on WhatsApp',
  'tin.next2':'A couple of quick questions, then we agree a price',
  'tin.next3':'Cash on the spot, or credit against a newer phone',
  'tin.cta':'Get my offer on WhatsApp',
  'tin.hours':'Open every day 10:00 to midnight. Fridays from 16:00.',
  'tin.mTitle':'Where should we message you?',
  'tin.mBody':'One of the team will reach out on WhatsApp and agree a price with you directly. No account, no obligation.',
  'tin.mCta':'Ask the team to contact me',
  'tin.mFine':'We only use this to talk about your phone. You can opt out any time.',

  'tin2.eyb':'Sell or trade in',
  'tin2.h2':'Turn your old phone into cash',
  'tin2.p':'Tell us the brand and the condition. One of the team messages you on WhatsApp and agrees a price with you directly.',
  'tin2.l1':'No account and no obligation',
  'tin2.l2':'We collect from your door across Dubai',
  'tin2.l3':'Cash on the spot or credit against a newer phone',
  'tin2.how':'How it works',
  'tin2.s1':'Pick your brand and condition', 'tin2.s1s':'Two taps, no account, no forms to read',
  'tin2.s2':'We message you on WhatsApp',    'tin2.s2s':'A couple of quick questions about the phone',
  'tin2.s3':'We agree a price together',     'tin2.s3s':'Talk to a real person, not a calculator',
  'tin2.s4':'Cash or credit, your choice',   'tin2.s4s':'Bring it in, or we collect from your door',
  'tin2.cta':'Start now, takes ten seconds',

  'brand.other':'Other brand',
  'cond.0':'Looks new', 'cond.1':'A few scratches', 'cond.2':'Cracked or faulty',

  'rail.tradein':'Trade in', 'rail.tradeinSub':'Cash today',
  'rail.new':'Brand new', 'rail.newSub':'Sealed',
  'rail.acc':'Accessories',

  'grid.h2':'In stock right now',
  'grid.sub':'Hover a colour to see the finish. Prices include VAT and warranty.',
  'grid.all':'All', 'grid.under':'Under 1500', 'grid.more':'Show more phones',

  'card.add':'Add to cart', 'card.view':'Quick view', 'card.save':'Save to wishlist',
  'card.only':'Only {n} left', 'card.new':'Brand new',
  'price.from':'Starting from', 'price.fromShort':'From',
  'price.tabby':'interest free with', 'price.save':'You save',
  'price.vsNew':'vs new', 'price.vsNewLong':'vs buying new',
  'price.once':'Or pay once', 'price.newSuffix':'new',

  'chk.eyb':'Before it reaches you',
  'chk.h2a':'Twelve points.', 'chk.h2b':'Every single phone.',
  'chk.p':'New or preowned, nothing leaves the bench until it passes. If one point fails, the phone does not go on sale.',
  'chk.cta':'See the condition guide',
  'chk.1':'Screen and touch', 'chk.2':'Battery health', 'chk.3':'Rear cameras',
  'chk.4':'Front camera', 'chk.5':'Speakers', 'chk.6':'Microphones',
  'chk.7':'Charging port', 'chk.8':'All buttons', 'chk.9':'Face ID or fingerprint',
  'chk.10':'Network and SIM', 'chk.11':'Wi Fi', 'chk.12':'Bluetooth',

  'gr.h2':'Pick your condition, pick your price',
  'gr.sub':'The same iPhone 13 Pro Max at three grades. You decide how much cosmetic wear is worth saving on.',
  'gr.a':'Excellent', 'gr.aSub':'Like new',
  'gr.aTxt':'No visible marks on the frame or screen. Presents as new in the hand.',
  'gr.b':'Very good', 'gr.bSub':'Light wear',
  'gr.bTxt':'Faint marks you would need to look for. Screen stays clean and clear.',
  'gr.c':'Good', 'gr.cSub':'Honest wear',
  'gr.cTxt':'Scratches or small dents you can see. Works exactly as it should.',
  'gr.chosen':'Most chosen',
  'gr.cosmetic':'Cosmetic', 'gr.battery':'Battery', 'gr.function':'Function', 'gr.full':'Full',

  'fin.h2':'Not sure which phone?', 'fin.sub':'Three questions and we shortlist from live stock.',
  'fin.budget':'What is your budget?', 'fin.upto':'Up to',
  'fin.matters':'What matters most?',
  'fin.camera':'Camera', 'fin.batt':'Battery life', 'fin.speed':'Speed and gaming', 'fin.basics':'Just the basics',
  'fin.brand':'Brand preference?', 'fin.any':'No preference',

  'vis.h2':'Come in, or we come to you',
  'vis.p':'The counter is in Al Baraha, Deira. If you would rather not travel, we bring the stock to your door.',
  'vis.shop':'The shop', 'vis.addr':'Al Baraha, Deira, Dubai',
  'vis.hours':'Opening hours', 'vis.hoursV':'Every day 10:00 to midnight', 'vis.hoursF':'Fridays from 16:00',
  'vis.door':'Doorstep visits', 'vis.doorV':'Book any slot', 'vis.doorS':'Non technical services across Dubai',
  'vis.wa':'WhatsApp us', 'vis.call':'Call',
  'vis.phold':'Placeholder · your photo here', 'vis.pholdShort':'Placeholder',

  'rev.h2':'2,140 customers in Dubai',
  'rev.sub':'Rated 4.8 out of 5 for condition accuracy and delivery timing.',

  'cap.h2':'Get first look at new stock',
  'cap.p':'We list graded phones the day they pass testing. Tell us what you are hunting for and we message you first.',
  'cap.q':'What are you looking for?', 'cap.other':'Something else', 'cap.cta':'Notify me',

  'ft.blurb':'Certified preowned phones, new stock and accessories. Al Baraha, Deira, Dubai.',
  'ft.shop':'Shop', 'ft.services':'Services', 'ft.help':'Help',
  'ft.sell':'Sell your phone', 'ft.door':'Doorstep visit',
  'ft.track':'Track my order', 'ft.warranty':'Warranty claim', 'ft.returns':'Returns', 'ft.contact':'Contact',
  'ft.pay':'Pay securely with',
  'ft.rights':'TDR Electronic. Draft concept for presentation.',
  'ft.addr':'Al Baraha, Deira, Dubai, UAE',

  'cart.title':'Your cart', 'cart.view':'View cart', 'cart.empty':'Your cart is empty',
  'cart.checkout':'Checkout', 'cart.free':'Free delivery', 'cart.away':'away from free delivery',
  'cart.saving':'Saving', 'cart.total':'Total', 'cart.promo':'Tap to apply', 'cart.applied':'Applied',

  'gift.q':'Quick one before you go on',
  'gift.qSub':'Is this your first time shopping with TDR Electronic?',
  'gift.yes':'Yes, first time', 'gift.no':'No, I have bought before',
  'gift.label':'FIRST ORDER', 'gift.head':'{n} off your first phone',
  'gift.sub':'Takes ten seconds. We send the code to your WhatsApp.',
  'gift.cta':'Claim my gift',

  'f.name':'Your name', 'f.wa':'WhatsApp number', 'f.close':'Close',
  'f.ok':'You are on the list',
  'f.okSub':'We will message you on WhatsApp. This is a draft, so nothing was actually sent.',

  'ui.insight':'Insight', 'ui.captured':'Captured this session',
  'ui.leads':'Leads', 'ui.signals':'Signals', 'ui.pipeline':'Pipeline',
  'ui.insightP':'Click around to see what the site records.',
  'ui.insightS':'Each dashed marker earns data, not just a sale.',
  'ui.product':'Product', 'ui.prev':'Previous deal', 'ui.next':'Next deal',
  'ui.top':'Top deal today', 'ui.deal':'Deal',
  'ui.moreDeals':'More deals ending soon', 'ui.tapOpen':'Tap any to open',
  'ui.brands':'Brands we carry',

  'log.tinBrand':'Trade in started: owns a {b}',
  'log.tinDone':'Trade in request ready: {b}, {c}'
},

/* ------------------------------------------------------------------- ARABIC */
ar: {
  'lang.label':'اللغة',

  'nav.iphone':'آيفون', 'nav.samsung':'سامسونج', 'nav.all':'كل الهواتف',
  'nav.grades':'دليل الحالة', 'nav.tradein':'الاستبدال', 'nav.finder':'ابحث عن هاتفك',
  'nav.visit':'زورونا', 'nav.menu':'القائمة', 'nav.search':'بحث',
  'nav.searchPh':'ابحث عن آيفون 15 أو جالاكسي S23', 'nav.wish':'المفضلة', 'nav.cart':'السلة',

  'hero.eyb':'البراحة، ديرة · منذ 2019',
  'hero.h1a':'هواتف ممتازة،', 'hero.h1b':'بنصف السعر.',
  'hero.sub':'كل هاتف يُفحص ويُصنّف قبل أن يصل إليك.',
  'hero.cta':'تصفّح كل الهواتف',
  'hero.rating':'4.8 من 5', 'hero.ratingFrom':'من 2,140 عميل في دبي',

  'trust.warranty':'ضمان 12 شهرًا', 'trust.warrantySub':'على كل هاتف مصنّف',
  'trust.delivery':'توصيل مجاني',   'trust.deliverySub':'في نفس اليوم داخل دبي',
  'trust.returns':'إرجاع خلال 10 أيام', 'trust.returnsSub':'دون أي أسئلة',
  'trust.pay4':'ادفع على 4 دفعات',  'trust.pay4Sub':'بدون فوائد',

  'tin.title':'استبدل هاتفك القديم', 'tin.sub':'ادفع أقل، أو خذ المبلغ نقدًا',
  'tin.old':'هاتفك القديم', 'tin.new':'هاتف أحدث',
  'tin.q1':'ما هو هاتفك الحالي؟', 'tin.q2':'ما حالته؟',
  'tin.step1':'الخطوة 1 من 2', 'tin.step2':'الخطوة 2 من 2',
  'tin.hint1':'اختر العلامة، يستغرق عشر ثوانٍ', 'tin.hint2':'الأخيرة، ثم نتولى الباقي',
  'tin.nextTitle':'ما الذي سيحدث بعد ذلك',
  'tin.next1':'نراسلك على واتساب',
  'tin.next2':'سؤالان سريعان، ثم نتفق على السعر',
  'tin.next3':'نقدًا في الحال، أو رصيد لشراء هاتف أحدث',
  'tin.cta':'أرسلوا لي العرض على واتساب',
  'tin.hours':'نفتح يوميًا من 10:00 حتى منتصف الليل. الجمعة من 16:00.',
  'tin.mTitle':'أين نراسلك؟',
  'tin.mBody':'سيتواصل معك أحد أفراد الفريق على واتساب ويتفق معك على السعر مباشرة. بدون حساب وبدون أي التزام.',
  'tin.mCta':'اطلب من الفريق التواصل معي',
  'tin.mFine':'نستخدم رقمك للحديث عن هاتفك فقط. يمكنك إلغاء الاشتراك في أي وقت.',

  'tin2.eyb':'بيع أو استبدال',
  'tin2.h2':'حوّل هاتفك القديم إلى نقود',
  'tin2.p':'أخبرنا بالعلامة والحالة. سيراسلك أحد أفراد الفريق على واتساب ويتفق معك على السعر مباشرة.',
  'tin2.l1':'بدون حساب وبدون أي التزام',
  'tin2.l2':'نستلم من باب منزلك في كل أنحاء دبي',
  'tin2.l3':'نقدًا في الحال أو رصيد لشراء هاتف أحدث',
  'tin2.how':'كيف تتم العملية',
  'tin2.s1':'اختر العلامة والحالة', 'tin2.s1s':'نقرتان، بدون حساب وبدون استمارات',
  'tin2.s2':'نراسلك على واتساب',    'tin2.s2s':'سؤالان سريعان عن الهاتف',
  'tin2.s3':'نتفق على السعر معًا',   'tin2.s3s':'تتحدث مع شخص حقيقي، لا مع آلة حاسبة',
  'tin2.s4':'نقدًا أو رصيد، الخيار لك', 'tin2.s4s':'أحضره إلينا، أو نستلمه من عندك',
  'tin2.cta':'ابدأ الآن، عشر ثوانٍ فقط',

  'brand.other':'علامة أخرى',
  'cond.0':'يبدو كالجديد', 'cond.1':'بعض الخدوش', 'cond.2':'مكسور أو به عطل',

  'rail.tradein':'الاستبدال', 'rail.tradeinSub':'نقدًا اليوم',
  'rail.new':'جديد تمامًا', 'rail.newSub':'مغلّف',
  'rail.acc':'الإكسسوارات',

  'grid.h2':'متوفر الآن',
  'grid.sub':'مرّر فوق اللون لرؤية الشكل. الأسعار تشمل الضريبة والضمان.',
  'grid.all':'الكل', 'grid.under':'أقل من 1500', 'grid.more':'اعرض المزيد',

  'card.add':'أضف إلى السلة', 'card.view':'عرض سريع', 'card.save':'أضف إلى المفضلة',
  'card.only':'بقي {n} فقط', 'card.new':'جديد تمامًا',
  'price.from':'يبدأ من', 'price.fromShort':'من',
  'price.tabby':'بدون فوائد مع', 'price.save':'توفّر',
  'price.vsNew':'مقارنة بالجديد', 'price.vsNewLong':'مقارنة بشراء جديد',
  'price.once':'أو ادفع دفعة واحدة', 'price.newSuffix':'جديد',

  'chk.eyb':'قبل أن يصل إليك',
  'chk.h2a':'اثنتا عشرة نقطة.', 'chk.h2b':'لكل هاتف.',
  'chk.p':'جديد أو مستعمل، لا يغادر الورشة حتى يجتاز الفحص. إذا سقطت نقطة واحدة، لا يُعرض الهاتف للبيع.',
  'chk.cta':'اطّلع على دليل الحالة',
  'chk.1':'الشاشة واللمس', 'chk.2':'صحة البطارية', 'chk.3':'الكاميرات الخلفية',
  'chk.4':'الكاميرا الأمامية', 'chk.5':'السماعات', 'chk.6':'الميكروفونات',
  'chk.7':'منفذ الشحن', 'chk.8':'جميع الأزرار', 'chk.9':'بصمة الوجه أو الإصبع',
  'chk.10':'الشبكة وشريحة SIM', 'chk.11':'واي فاي', 'chk.12':'بلوتوث',

  'gr.h2':'اختر الحالة، واختر السعر',
  'gr.sub':'نفس هاتف iPhone 13 Pro Max بثلاث درجات. أنت تقرر كم يستحق أثر الاستعمال من التوفير.',
  'gr.a':'ممتاز', 'gr.aSub':'كالجديد',
  'gr.aTxt':'لا توجد علامات ظاهرة على الإطار أو الشاشة. يبدو جديدًا في اليد.',
  'gr.b':'جيد جدًا', 'gr.bSub':'استعمال خفيف',
  'gr.bTxt':'علامات باهتة تحتاج إلى تدقيق لرؤيتها. الشاشة تبقى نظيفة وواضحة.',
  'gr.c':'جيد', 'gr.cSub':'استعمال واضح',
  'gr.cTxt':'خدوش أو انبعاجات صغيرة مرئية. يعمل تمامًا كما ينبغي.',
  'gr.chosen':'الأكثر اختيارًا',
  'gr.cosmetic':'المظهر', 'gr.battery':'البطارية', 'gr.function':'الأداء', 'gr.full':'كامل',

  'fin.h2':'غير متأكد أي هاتف تختار؟', 'fin.sub':'ثلاثة أسئلة ونرشّح لك من المتوفر فعليًا.',
  'fin.budget':'ما هي ميزانيتك؟', 'fin.upto':'حتى',
  'fin.matters':'ما الأهم بالنسبة لك؟',
  'fin.camera':'الكاميرا', 'fin.batt':'عمر البطارية', 'fin.speed':'السرعة والألعاب', 'fin.basics':'الأساسيات فقط',
  'fin.brand':'هل تفضل علامة معينة؟', 'fin.any':'لا يهم',

  'vis.h2':'زُرنا، أو نأتي إليك',
  'vis.p':'المحل في البراحة، ديرة. وإن كنت تفضل عدم التنقل، نوصل لك البضاعة إلى باب منزلك.',
  'vis.shop':'المحل', 'vis.addr':'البراحة، ديرة، دبي',
  'vis.hours':'ساعات العمل', 'vis.hoursV':'يوميًا من 10:00 حتى منتصف الليل', 'vis.hoursF':'الجمعة من 16:00',
  'vis.door':'زيارات منزلية', 'vis.doorV':'احجز أي موعد', 'vis.doorS':'خدمات غير فنية في كل أنحاء دبي',
  'vis.wa':'راسلنا على واتساب', 'vis.call':'اتصل',
  'vis.phold':'صورة مؤقتة · ضع صورتك هنا', 'vis.pholdShort':'صورة مؤقتة',

  'rev.h2':'2,140 عميل في دبي',
  'rev.sub':'تقييم 4.8 من 5 على دقة وصف الحالة ومواعيد التوصيل.',

  'cap.h2':'كن أول من يرى البضاعة الجديدة',
  'cap.p':'ننشر الهواتف المصنّفة يوم اجتيازها الفحص. أخبرنا عما تبحث عنه ونراسلك أولًا.',
  'cap.q':'عن ماذا تبحث؟', 'cap.other':'شيء آخر', 'cap.cta':'أبلغوني',

  'ft.blurb':'هواتف مستعملة معتمدة، بضاعة جديدة وإكسسوارات. البراحة، ديرة، دبي.',
  'ft.shop':'تسوّق', 'ft.services':'الخدمات', 'ft.help':'المساعدة',
  'ft.sell':'بِع هاتفك', 'ft.door':'زيارة منزلية',
  'ft.track':'تتبع طلبي', 'ft.warranty':'مطالبة بالضمان', 'ft.returns':'الإرجاع', 'ft.contact':'تواصل معنا',
  'ft.pay':'ادفع بأمان عبر',
  'ft.rights':'TDR Electronic. نموذج أولي للعرض.',
  'ft.addr':'البراحة، ديرة، دبي، الإمارات',

  'cart.title':'سلتك', 'cart.view':'عرض السلة', 'cart.empty':'سلتك فارغة',
  'cart.checkout':'إتمام الشراء', 'cart.free':'توصيل مجاني', 'cart.away':'تفصلك عن التوصيل المجاني',
  'cart.saving':'وفّرت', 'cart.total':'الإجمالي', 'cart.promo':'اضغط للتطبيق', 'cart.applied':'تم التطبيق',

  'gift.q':'سؤال سريع قبل أن تكمل',
  'gift.qSub':'هل هذه أول مرة تتسوق فيها من TDR Electronic؟',
  'gift.yes':'نعم، أول مرة', 'gift.no':'لا، اشتريت من قبل',
  'gift.label':'الطلب الأول', 'gift.head':'{n} خصم على أول هاتف',
  'gift.sub':'عشر ثوانٍ فقط. نرسل لك الكود على واتساب.',
  'gift.cta':'احصل على هديتي',

  'f.name':'اسمك', 'f.wa':'رقم واتساب', 'f.close':'إغلاق',
  'f.ok':'تم تسجيلك',
  'f.okSub':'سنراسلك على واتساب. هذا نموذج أولي، لذا لم يُرسل شيء فعليًا.',

  'ui.insight':'التحليلات', 'ui.captured':'ما سُجّل في هذه الجلسة',
  'ui.leads':'عملاء محتملون', 'ui.signals':'إشارات', 'ui.pipeline':'القيمة المتوقعة',
  'ui.insightP':'تنقّل في الموقع لترى ما يسجّله.',
  'ui.insightS':'كل علامة متقطعة تكسب بيانات، لا مبيعات فقط.',
  'ui.product':'المنتج', 'ui.prev':'العرض السابق', 'ui.next':'العرض التالي',
  'ui.top':'أفضل عرض اليوم', 'ui.deal':'عرض',
  'ui.moreDeals':'عروض أخرى تنتهي قريبًا', 'ui.tapOpen':'اضغط على أي منها',
  'ui.brands':'العلامات التي نوفّرها',

  'log.tinBrand':'بدأ طلب استبدال: يملك {b}',
  'log.tinDone':'طلب استبدال جاهز: {b}، {c}'
},

/* -------------------------------------------------------------------- HINDI */
hi: {
  'lang.label':'भाषा',

  'nav.iphone':'आईफ़ोन', 'nav.samsung':'सैमसंग', 'nav.all':'सभी फ़ोन',
  'nav.grades':'कंडीशन गाइड', 'nav.tradein':'एक्सचेंज', 'nav.finder':'फ़ोन ढूँढें',
  'nav.visit':'हमारे यहाँ आएँ', 'nav.menu':'मेन्यू', 'nav.search':'खोजें',
  'nav.searchPh':'आईफ़ोन 15, गैलेक्सी S23 खोजें', 'nav.wish':'पसंदीदा', 'nav.cart':'कार्ट',

  'hero.eyb':'अल बराहा, देइरा · 2019 से',
  'hero.h1a':'बेहतरीन फ़ोन,', 'hero.h1b':'आधी कीमत में.',
  'hero.sub':'हर फ़ोन आप तक पहुँचने से पहले जाँचा और ग्रेड किया जाता है.',
  'hero.cta':'सभी फ़ोन देखें',
  'hero.rating':'4.8 में से 5', 'hero.ratingFrom':'दुबई के 2,140 ग्राहकों से',

  'trust.warranty':'12 महीने की वारंटी', 'trust.warrantySub':'हर ग्रेडेड फ़ोन पर',
  'trust.delivery':'मुफ़्त डिलीवरी',   'trust.deliverySub':'दुबई में उसी दिन',
  'trust.returns':'10 दिन में वापसी',  'trust.returnsSub':'कोई सवाल नहीं',
  'trust.pay4':'4 किस्तों में भुगतान', 'trust.pay4Sub':'बिना ब्याज',

  'tin.title':'अपना पुराना फ़ोन एक्सचेंज करें', 'tin.sub':'कम भुगतान करें, या नकद लें',
  'tin.old':'आपका पुराना फ़ोन', 'tin.new':'एक नया फ़ोन',
  'tin.q1':'अभी आपके पास कौन सा फ़ोन है?', 'tin.q2':'उसकी हालत कैसी है?',
  'tin.step1':'चरण 1 / 2', 'tin.step2':'चरण 2 / 2',
  'tin.hint1':'अपना ब्रांड चुनें, दस सेकंड लगेंगे', 'tin.hint2':'आख़िरी सवाल, फिर आगे हम देखेंगे',
  'tin.nextTitle':'आगे क्या होगा',
  'tin.next1':'हम आपको व्हाट्सऐप पर मैसेज करेंगे',
  'tin.next2':'दो छोटे सवाल, फिर हम कीमत तय करेंगे',
  'tin.next3':'तुरंत नकद, या नए फ़ोन पर छूट',
  'tin.cta':'व्हाट्सऐप पर ऑफ़र भेजें',
  'tin.hours':'रोज़ सुबह 10:00 से आधी रात तक. शुक्रवार शाम 16:00 से.',
  'tin.mTitle':'हम आपको कहाँ मैसेज करें?',
  'tin.mBody':'टीम का कोई सदस्य व्हाट्सऐप पर संपर्क करेगा और आपसे सीधे कीमत तय करेगा. कोई अकाउंट नहीं, कोई बाध्यता नहीं.',
  'tin.mCta':'टीम से संपर्क करवाएँ',
  'tin.mFine':'हम इसका उपयोग सिर्फ़ आपके फ़ोन की बात करने के लिए करेंगे. आप कभी भी मना कर सकते हैं.',

  'tin2.eyb':'बेचें या एक्सचेंज करें',
  'tin2.h2':'अपने पुराने फ़ोन को नकद में बदलें',
  'tin2.p':'हमें ब्रांड और हालत बताएँ. टीम का कोई सदस्य व्हाट्सऐप पर मैसेज करके आपसे सीधे कीमत तय करेगा.',
  'tin2.l1':'कोई अकाउंट नहीं, कोई बाध्यता नहीं',
  'tin2.l2':'पूरे दुबई में आपके घर से पिकअप',
  'tin2.l3':'तुरंत नकद या नए फ़ोन पर छूट',
  'tin2.how':'यह कैसे काम करता है',
  'tin2.s1':'ब्रांड और हालत चुनें', 'tin2.s1s':'दो टैप, कोई अकाउंट नहीं, कोई फ़ॉर्म नहीं',
  'tin2.s2':'हम व्हाट्सऐप पर मैसेज करेंगे', 'tin2.s2s':'फ़ोन के बारे में दो छोटे सवाल',
  'tin2.s3':'हम साथ मिलकर कीमत तय करेंगे', 'tin2.s3s':'कैलकुलेटर नहीं, असली इंसान से बात',
  'tin2.s4':'नकद या छूट, आपकी मर्ज़ी', 'tin2.s4s':'दुकान पर लाएँ, या हम घर से लेंगे',
  'tin2.cta':'अभी शुरू करें, दस सेकंड',

  'brand.other':'कोई और ब्रांड',
  'cond.0':'नए जैसा', 'cond.1':'थोड़े स्क्रैच', 'cond.2':'टूटा या ख़राब',

  'rail.tradein':'एक्सचेंज', 'rail.tradeinSub':'आज ही नकद',
  'rail.new':'बिल्कुल नया', 'rail.newSub':'सीलबंद',
  'rail.acc':'एक्सेसरीज़',

  'grid.h2':'अभी स्टॉक में',
  'grid.sub':'फ़िनिश देखने के लिए रंग पर जाएँ. कीमतों में VAT और वारंटी शामिल है.',
  'grid.all':'सभी', 'grid.under':'1500 से कम', 'grid.more':'और फ़ोन दिखाएँ',

  'card.add':'कार्ट में डालें', 'card.view':'झलक देखें', 'card.save':'पसंदीदा में जोड़ें',
  'card.only':'सिर्फ़ {n} बचे', 'card.new':'बिल्कुल नया',
  'price.from':'शुरू',  'price.fromShort':'से',
  'price.tabby':'बिना ब्याज, साथ', 'price.save':'आपकी बचत',
  'price.vsNew':'नए की तुलना में', 'price.vsNewLong':'नया खरीदने की तुलना में',
  'price.once':'या एक बार में चुकाएँ', 'price.newSuffix':'नया',

  'chk.eyb':'आप तक पहुँचने से पहले',
  'chk.h2a':'बारह जाँच.', 'chk.h2b':'हर एक फ़ोन पर.',
  'chk.p':'नया हो या पुराना, जाँच पास किए बिना कुछ भी बाहर नहीं जाता. एक भी जाँच फेल हुई तो फ़ोन बिक्री पर नहीं जाता.',
  'chk.cta':'कंडीशन गाइड देखें',
  'chk.1':'स्क्रीन और टच', 'chk.2':'बैटरी हेल्थ', 'chk.3':'पिछले कैमरे',
  'chk.4':'फ्रंट कैमरा', 'chk.5':'स्पीकर', 'chk.6':'माइक्रोफ़ोन',
  'chk.7':'चार्जिंग पोर्ट', 'chk.8':'सभी बटन', 'chk.9':'फेस आईडी या फ़िंगरप्रिंट',
  'chk.10':'नेटवर्क और सिम', 'chk.11':'वाई फ़ाई', 'chk.12':'ब्लूटूथ',

  'gr.h2':'हालत चुनें, कीमत चुनें',
  'gr.sub':'वही iPhone 13 Pro Max, तीन ग्रेड में. आप तय करें कि थोड़े निशान कितनी बचत के लायक हैं.',
  'gr.a':'बेहतरीन', 'gr.aSub':'नए जैसा',
  'gr.aTxt':'फ्रेम या स्क्रीन पर कोई निशान नहीं. हाथ में नया ही लगता है.',
  'gr.b':'बहुत अच्छा', 'gr.bSub':'हल्का इस्तेमाल',
  'gr.bTxt':'हल्के निशान जो ढूँढने पर ही दिखें. स्क्रीन साफ़ और चमकदार रहती है.',
  'gr.c':'अच्छा', 'gr.cSub':'साफ़ दिखता इस्तेमाल',
  'gr.cTxt':'दिखने वाले स्क्रैच या छोटे डेंट. काम बिल्कुल सही करता है.',
  'gr.chosen':'सबसे ज़्यादा चुना गया',
  'gr.cosmetic':'बाहरी हालत', 'gr.battery':'बैटरी', 'gr.function':'कामकाज', 'gr.full':'पूरा',

  'fin.h2':'तय नहीं कर पा रहे कौन सा फ़ोन?', 'fin.sub':'तीन सवाल और हम उपलब्ध स्टॉक में से चुन देंगे.',
  'fin.budget':'आपका बजट क्या है?', 'fin.upto':'तक',
  'fin.matters':'सबसे ज़्यादा क्या मायने रखता है?',
  'fin.camera':'कैमरा', 'fin.batt':'बैटरी लाइफ़', 'fin.speed':'स्पीड और गेमिंग', 'fin.basics':'बस बुनियादी काम',
  'fin.brand':'कोई ब्रांड पसंद है?', 'fin.any':'कोई भी चलेगा',

  'vis.h2':'आप आएँ, या हम आएँ',
  'vis.p':'दुकान अल बराहा, देइरा में है. अगर आप आना नहीं चाहते, तो हम सामान आपके घर तक लाते हैं.',
  'vis.shop':'दुकान', 'vis.addr':'अल बराहा, देइरा, दुबई',
  'vis.hours':'खुलने का समय', 'vis.hoursV':'रोज़ 10:00 से आधी रात तक', 'vis.hoursF':'शुक्रवार 16:00 से',
  'vis.door':'घर पर विज़िट', 'vis.doorV':'कोई भी समय बुक करें', 'vis.doorS':'पूरे दुबई में गैर तकनीकी सेवाएँ',
  'vis.wa':'व्हाट्सऐप करें', 'vis.call':'कॉल करें',
  'vis.phold':'अस्थायी तस्वीर · यहाँ आपकी फ़ोटो आएगी', 'vis.pholdShort':'अस्थायी तस्वीर',

  'rev.h2':'दुबई में 2,140 ग्राहक',
  'rev.sub':'हालत की सटीकता और डिलीवरी समय पर 4.8 में से 5 रेटिंग.',

  'cap.h2':'नए स्टॉक की पहली झलक पाएँ',
  'cap.p':'जाँच पास करते ही हम ग्रेडेड फ़ोन लिस्ट करते हैं. बताएँ आप क्या ढूँढ रहे हैं, हम सबसे पहले आपको बताएँगे.',
  'cap.q':'आप क्या ढूँढ रहे हैं?', 'cap.other':'कुछ और', 'cap.cta':'मुझे बताएँ',

  'ft.blurb':'प्रमाणित पुराने फ़ोन, नया स्टॉक और एक्सेसरीज़. अल बराहा, देइरा, दुबई.',
  'ft.shop':'शॉप', 'ft.services':'सेवाएँ', 'ft.help':'मदद',
  'ft.sell':'अपना फ़ोन बेचें', 'ft.door':'घर पर विज़िट',
  'ft.track':'मेरा ऑर्डर ट्रैक करें', 'ft.warranty':'वारंटी क्लेम', 'ft.returns':'वापसी', 'ft.contact':'संपर्क',
  'ft.pay':'सुरक्षित भुगतान',
  'ft.rights':'TDR Electronic. प्रस्तुति के लिए नमूना.',
  'ft.addr':'अल बराहा, देइरा, दुबई, यूएई',

  'cart.title':'आपका कार्ट', 'cart.view':'कार्ट देखें', 'cart.empty':'आपका कार्ट खाली है',
  'cart.checkout':'चेकआउट', 'cart.free':'मुफ़्त डिलीवरी', 'cart.away':'और, फिर डिलीवरी मुफ़्त',
  'cart.saving':'बचत', 'cart.total':'कुल', 'cart.promo':'लगाने के लिए टैप करें', 'cart.applied':'लागू',

  'gift.q':'आगे बढ़ने से पहले एक सवाल',
  'gift.qSub':'क्या आप पहली बार TDR Electronic से खरीद रहे हैं?',
  'gift.yes':'हाँ, पहली बार', 'gift.no':'नहीं, पहले खरीदा है',
  'gift.label':'पहला ऑर्डर', 'gift.head':'पहले फ़ोन पर {n} की छूट',
  'gift.sub':'दस सेकंड लगेंगे. कोड व्हाट्सऐप पर भेजेंगे.',
  'gift.cta':'मेरा तोहफ़ा लें',

  'f.name':'आपका नाम', 'f.wa':'व्हाट्सऐप नंबर', 'f.close':'बंद करें',
  'f.ok':'आप लिस्ट में हैं',
  'f.okSub':'हम व्हाट्सऐप पर मैसेज करेंगे. यह एक नमूना है, इसलिए कुछ भी असल में नहीं भेजा गया.',

  'ui.insight':'इनसाइट', 'ui.captured':'इस सेशन में दर्ज',
  'ui.leads':'लीड', 'ui.signals':'संकेत', 'ui.pipeline':'संभावित मूल्य',
  'ui.insightP':'घूमकर देखें कि साइट क्या दर्ज करती है.',
  'ui.insightS':'हर डैश वाला निशान डेटा कमाता है, सिर्फ़ बिक्री नहीं.',
  'ui.product':'प्रोडक्ट', 'ui.prev':'पिछला ऑफ़र', 'ui.next':'अगला ऑफ़र',
  'ui.top':'आज का सबसे बढ़िया ऑफ़र', 'ui.deal':'ऑफ़र',
  'ui.moreDeals':'और ऑफ़र, जल्द ख़त्म', 'ui.tapOpen':'खोलने के लिए टैप करें',
  'ui.brands':'हमारे पास ये ब्रांड',

  'log.tinBrand':'एक्सचेंज शुरू: {b} है',
  'log.tinDone':'एक्सचेंज अनुरोध तैयार: {b}, {c}'
},

/* --------------------------------------------------------------------- URDU */
ur: {
  'lang.label':'زبان',

  'nav.iphone':'آئی فون', 'nav.samsung':'سام سنگ', 'nav.all':'تمام فون',
  'nav.grades':'حالت کی گائیڈ', 'nav.tradein':'تبادلہ', 'nav.finder':'فون تلاش کریں',
  'nav.visit':'ہمارے پاس آئیں', 'nav.menu':'مینو', 'nav.search':'تلاش',
  'nav.searchPh':'آئی فون 15، گیلکسی S23 تلاش کریں', 'nav.wish':'پسندیدہ', 'nav.cart':'ٹوکری',

  'hero.eyb':'البراحہ، دیرہ · 2019 سے',
  'hero.h1a':'بہترین فون،', 'hero.h1b':'آدھی قیمت میں۔',
  'hero.sub':'ہر فون آپ تک پہنچنے سے پہلے جانچا اور درجہ بند کیا جاتا ہے۔',
  'hero.cta':'تمام فون دیکھیں',
  'hero.rating':'4.8 از 5', 'hero.ratingFrom':'دبئی کے 2,140 گاہکوں کی جانب سے',

  'trust.warranty':'12 ماہ کی وارنٹی', 'trust.warrantySub':'ہر درجہ بند فون پر',
  'trust.delivery':'مفت ڈیلیوری',   'trust.deliverySub':'دبئی میں اسی دن',
  'trust.returns':'10 دن میں واپسی', 'trust.returnsSub':'بغیر کسی سوال کے',
  'trust.pay4':'4 قسطوں میں ادائیگی', 'trust.pay4Sub':'بغیر سود',

  'tin.title':'اپنا پرانا فون تبدیل کریں', 'tin.sub':'کم ادائیگی کریں، یا نقد لیں',
  'tin.old':'آپ کا پرانا فون', 'tin.new':'ایک نیا فون',
  'tin.q1':'اس وقت آپ کے پاس کون سا فون ہے؟', 'tin.q2':'اس کی حالت کیسی ہے؟',
  'tin.step1':'مرحلہ 1 از 2', 'tin.step2':'مرحلہ 2 از 2',
  'tin.hint1':'اپنا برانڈ چنیں، دس سیکنڈ لگیں گے', 'tin.hint2':'آخری سوال، پھر آگے ہم دیکھیں گے',
  'tin.nextTitle':'آگے کیا ہوگا',
  'tin.next1':'ہم آپ کو واٹس ایپ پر پیغام بھیجیں گے',
  'tin.next2':'دو مختصر سوال، پھر ہم قیمت طے کریں گے',
  'tin.next3':'فوری نقد، یا نئے فون پر رعایت',
  'tin.cta':'واٹس ایپ پر پیشکش بھیجیں',
  'tin.hours':'روزانہ 10:00 سے آدھی رات تک۔ جمعہ کو 16:00 سے۔',
  'tin.mTitle':'ہم آپ کو کہاں پیغام بھیجیں؟',
  'tin.mBody':'ٹیم کا ایک رکن واٹس ایپ پر رابطہ کرے گا اور آپ سے براہِ راست قیمت طے کرے گا۔ نہ اکاؤنٹ، نہ کوئی پابندی۔',
  'tin.mCta':'ٹیم سے رابطہ کروائیں',
  'tin.mFine':'ہم یہ نمبر صرف آپ کے فون کے بارے میں بات کرنے کے لیے استعمال کریں گے۔ آپ کسی بھی وقت انکار کر سکتے ہیں۔',

  'tin2.eyb':'بیچیں یا تبدیل کریں',
  'tin2.h2':'اپنے پرانے فون کو نقد میں بدلیں',
  'tin2.p':'ہمیں برانڈ اور حالت بتائیں۔ ٹیم کا ایک رکن واٹس ایپ پر پیغام بھیج کر آپ سے براہِ راست قیمت طے کرے گا۔',
  'tin2.l1':'نہ اکاؤنٹ، نہ کوئی پابندی',
  'tin2.l2':'پورے دبئی میں آپ کے گھر سے وصولی',
  'tin2.l3':'فوری نقد یا نئے فون پر رعایت',
  'tin2.how':'یہ کیسے کام کرتا ہے',
  'tin2.s1':'برانڈ اور حالت چنیں', 'tin2.s1s':'دو ٹیپ، نہ اکاؤنٹ، نہ کوئی فارم',
  'tin2.s2':'ہم واٹس ایپ پر پیغام بھیجیں گے', 'tin2.s2s':'فون کے بارے میں دو مختصر سوال',
  'tin2.s3':'ہم مل کر قیمت طے کریں گے', 'tin2.s3s':'کیلکولیٹر نہیں، اصل انسان سے بات',
  'tin2.s4':'نقد یا رعایت، آپ کی مرضی', 'tin2.s4s':'دکان پر لائیں، یا ہم گھر سے لے لیں',
  'tin2.cta':'ابھی شروع کریں، دس سیکنڈ',

  'brand.other':'کوئی اور برانڈ',
  'cond.0':'نئے جیسا', 'cond.1':'کچھ خراشیں', 'cond.2':'ٹوٹا یا خراب',

  'rail.tradein':'تبادلہ', 'rail.tradeinSub':'آج ہی نقد',
  'rail.new':'بالکل نیا', 'rail.newSub':'سیل بند',
  'rail.acc':'لوازمات',

  'grid.h2':'ابھی دستیاب',
  'grid.sub':'رنگ دیکھنے کے لیے اس پر جائیں۔ قیمتوں میں VAT اور وارنٹی شامل ہے۔',
  'grid.all':'سب', 'grid.under':'1500 سے کم', 'grid.more':'مزید فون دکھائیں',

  'card.add':'ٹوکری میں ڈالیں', 'card.view':'فوری جھلک', 'card.save':'پسندیدہ میں شامل کریں',
  'card.only':'صرف {n} باقی', 'card.new':'بالکل نیا',
  'price.from':'شروع', 'price.fromShort':'سے',
  'price.tabby':'بغیر سود، ساتھ', 'price.save':'آپ کی بچت',
  'price.vsNew':'نئے کے مقابلے', 'price.vsNewLong':'نیا خریدنے کے مقابلے',
  'price.once':'یا ایک ہی بار ادا کریں', 'price.newSuffix':'نیا',

  'chk.eyb':'آپ تک پہنچنے سے پہلے',
  'chk.h2a':'بارہ جانچ۔', 'chk.h2b':'ہر ایک فون پر۔',
  'chk.p':'نیا ہو یا پرانا، جانچ پاس کیے بغیر کچھ باہر نہیں جاتا۔ ایک بھی جانچ ناکام ہو تو فون فروخت پر نہیں جاتا۔',
  'chk.cta':'حالت کی گائیڈ دیکھیں',
  'chk.1':'اسکرین اور ٹچ', 'chk.2':'بیٹری کی صحت', 'chk.3':'پچھلے کیمرے',
  'chk.4':'سامنے کا کیمرہ', 'chk.5':'اسپیکر', 'chk.6':'مائیکروفون',
  'chk.7':'چارجنگ پورٹ', 'chk.8':'تمام بٹن', 'chk.9':'فیس آئی ڈی یا فنگر پرنٹ',
  'chk.10':'نیٹ ورک اور سم', 'chk.11':'وائی فائی', 'chk.12':'بلوٹوتھ',

  'gr.h2':'حالت چنیں، قیمت چنیں',
  'gr.sub':'وہی iPhone 13 Pro Max، تین درجوں میں۔ آپ طے کریں کہ ہلکے نشان کتنی بچت کے قابل ہیں۔',
  'gr.a':'بہترین', 'gr.aSub':'نئے جیسا',
  'gr.aTxt':'فریم یا اسکرین پر کوئی نشان نہیں۔ ہاتھ میں نیا ہی لگتا ہے۔',
  'gr.b':'بہت اچھا', 'gr.bSub':'ہلکا استعمال',
  'gr.bTxt':'ہلکے نشان جو ڈھونڈنے پر ہی نظر آئیں۔ اسکرین صاف اور شفاف رہتی ہے۔',
  'gr.c':'اچھا', 'gr.cSub':'واضح استعمال',
  'gr.cTxt':'نظر آنے والی خراشیں یا چھوٹے ڈینٹ۔ کام بالکل ٹھیک کرتا ہے۔',
  'gr.chosen':'سب سے زیادہ چنا گیا',
  'gr.cosmetic':'ظاہری حالت', 'gr.battery':'بیٹری', 'gr.function':'کارکردگی', 'gr.full':'مکمل',

  'fin.h2':'طے نہیں کر پا رہے کون سا فون؟', 'fin.sub':'تین سوال اور ہم دستیاب اسٹاک میں سے چن دیں گے۔',
  'fin.budget':'آپ کا بجٹ کیا ہے؟', 'fin.upto':'تک',
  'fin.matters':'سب سے اہم کیا ہے؟',
  'fin.camera':'کیمرہ', 'fin.batt':'بیٹری کا دورانیہ', 'fin.speed':'رفتار اور گیمنگ', 'fin.basics':'صرف بنیادی کام',
  'fin.brand':'کوئی برانڈ پسند ہے؟', 'fin.any':'کوئی بھی چلے گا',

  'vis.h2':'آپ آئیں، یا ہم آئیں',
  'vis.p':'دکان البراحہ، دیرہ میں ہے۔ اگر آپ آنا نہ چاہیں تو ہم سامان آپ کے گھر لے آتے ہیں۔',
  'vis.shop':'دکان', 'vis.addr':'البراحہ، دیرہ، دبئی',
  'vis.hours':'کھلنے کا وقت', 'vis.hoursV':'روزانہ 10:00 سے آدھی رات تک', 'vis.hoursF':'جمعہ 16:00 سے',
  'vis.door':'گھر پر وزٹ', 'vis.doorV':'کوئی بھی وقت بک کریں', 'vis.doorS':'پورے دبئی میں غیر تکنیکی خدمات',
  'vis.wa':'واٹس ایپ کریں', 'vis.call':'کال کریں',
  'vis.phold':'عارضی تصویر · یہاں آپ کی تصویر آئے گی', 'vis.pholdShort':'عارضی تصویر',

  'rev.h2':'دبئی میں 2,140 گاہک',
  'rev.sub':'حالت کی درستی اور ڈیلیوری کے وقت پر 4.8 از 5 درجہ بندی۔',

  'cap.h2':'نئے اسٹاک کی پہلی جھلک پائیں',
  'cap.p':'جانچ پاس کرتے ہی ہم درجہ بند فون درج کرتے ہیں۔ بتائیں آپ کیا ڈھونڈ رہے ہیں، ہم سب سے پہلے آپ کو بتائیں گے۔',
  'cap.q':'آپ کیا ڈھونڈ رہے ہیں؟', 'cap.other':'کچھ اور', 'cap.cta':'مجھے اطلاع دیں',

  'ft.blurb':'تصدیق شدہ پرانے فون، نیا اسٹاک اور لوازمات۔ البراحہ، دیرہ، دبئی۔',
  'ft.shop':'شاپ', 'ft.services':'خدمات', 'ft.help':'مدد',
  'ft.sell':'اپنا فون بیچیں', 'ft.door':'گھر پر وزٹ',
  'ft.track':'میرا آرڈر ٹریک کریں', 'ft.warranty':'وارنٹی کا دعویٰ', 'ft.returns':'واپسی', 'ft.contact':'رابطہ',
  'ft.pay':'محفوظ ادائیگی',
  'ft.rights':'TDR Electronic۔ پیشکش کے لیے نمونہ۔',
  'ft.addr':'البراحہ، دیرہ، دبئی، متحدہ عرب امارات',

  'cart.title':'آپ کی ٹوکری', 'cart.view':'ٹوکری دیکھیں', 'cart.empty':'آپ کی ٹوکری خالی ہے',
  'cart.checkout':'ادائیگی', 'cart.free':'مفت ڈیلیوری', 'cart.away':'اور، پھر ڈیلیوری مفت',
  'cart.saving':'بچت', 'cart.total':'کل', 'cart.promo':'لگانے کے لیے ٹیپ کریں', 'cart.applied':'لاگو',

  'gift.q':'آگے بڑھنے سے پہلے ایک سوال',
  'gift.qSub':'کیا آپ پہلی بار TDR Electronic سے خرید رہے ہیں؟',
  'gift.yes':'جی ہاں، پہلی بار', 'gift.no':'نہیں، پہلے خرید چکا ہوں',
  'gift.label':'پہلا آرڈر', 'gift.head':'پہلے فون پر {n} کی رعایت',
  'gift.sub':'دس سیکنڈ لگیں گے۔ کوڈ واٹس ایپ پر بھیجیں گے۔',
  'gift.cta':'میرا تحفہ حاصل کریں',

  'f.name':'آپ کا نام', 'f.wa':'واٹس ایپ نمبر', 'f.close':'بند کریں',
  'f.ok':'آپ فہرست میں شامل ہیں',
  'f.okSub':'ہم واٹس ایپ پر پیغام بھیجیں گے۔ یہ ایک نمونہ ہے، اس لیے حقیقت میں کچھ نہیں بھیجا گیا۔',

  'ui.insight':'بصیرت', 'ui.captured':'اس سیشن میں درج',
  'ui.leads':'ممکنہ گاہک', 'ui.signals':'اشارے', 'ui.pipeline':'متوقع مالیت',
  'ui.insightP':'گھوم کر دیکھیں کہ سائٹ کیا درج کرتی ہے۔',
  'ui.insightS':'ہر نقطہ دار نشان ڈیٹا کماتا ہے، صرف فروخت نہیں۔',
  'ui.product':'پروڈکٹ', 'ui.prev':'پچھلی پیشکش', 'ui.next':'اگلی پیشکش',
  'ui.top':'آج کی بہترین پیشکش', 'ui.deal':'پیشکش',
  'ui.moreDeals':'مزید پیشکشیں، جلد ختم', 'ui.tapOpen':'کھولنے کے لیے ٹیپ کریں',
  'ui.brands':'ہمارے پاس یہ برانڈ',

  'log.tinBrand':'تبادلہ شروع: {b} ہے',
  'log.tinDone':'تبادلے کی درخواست تیار: {b}، {c}'
}

};


/* Second pass: strings that main.js renders. Kept as a merge so the four
   language blocks above stay readable rather than growing without end. */
var I18N_MORE = {
en:{
 'gift.have':'You have a welcome gift','gift.send':'Send me my gift',
 'gift.ready':'Your welcome gift is ready to use','gift.copy':'Copy','gift.shop':'Start shopping',
 'gift.back':'Good to have you back','gift.alert':'Yes, alert me','gift.later':'Not right now',
 'gift.first':'First order',
 'cart.emptyA':'Your cart is empty.','cart.emptyB':'Browse phones to get started.',
 'cart.keep':'Keep shopping','cart.remove':'Remove','cart.bundle':'Bundle price',
 'cart.vsNew':'Against buying these new','cart.fbt':'Frequently bought together',
 'cart.codes':'Your codes','cart.discount':'Discount','cart.payWith':'Pay with',
 'cart.reserve':'Reserve your order','cart.confirm':'Confirm reservation',
 'pdp.renewed':'Certified renewed','pdp.how':'How does this work?',
 'pdp.drop':'Tell me if this price drops','pdp.watch':'Watch this price',
 'wish.title':'Your wishlist','lead.tag':'LEAD'
},
ar:{
 'gift.have':'لديك هدية ترحيبية','gift.send':'أرسلوا لي هديتي',
 'gift.ready':'هديتك الترحيبية جاهزة للاستخدام','gift.copy':'نسخ','gift.shop':'ابدأ التسوق',
 'gift.back':'سعداء بعودتك','gift.alert':'نعم، أبلغوني','gift.later':'ليس الآن',
 'gift.first':'الطلب الأول',
 'cart.emptyA':'سلتك فارغة.','cart.emptyB':'تصفّح الهواتف للبدء.',
 'cart.keep':'تابع التسوق','cart.remove':'إزالة','cart.bundle':'سعر الباقة',
 'cart.vsNew':'مقارنة بشرائها جديدة','cart.fbt':'يُشترى معه عادةً',
 'cart.codes':'أكوادك','cart.discount':'الخصم','cart.payWith':'ادفع عبر',
 'cart.reserve':'احجز طلبك','cart.confirm':'تأكيد الحجز',
 'pdp.renewed':'مجدد ومعتمد','pdp.how':'كيف يعمل هذا؟',
 'pdp.drop':'أبلغوني إذا انخفض السعر','pdp.watch':'تابع هذا السعر',
 'wish.title':'مفضلتك','lead.tag':'عميل'
},
hi:{
 'gift.have':'आपके पास एक स्वागत तोहफ़ा है','gift.send':'मेरा तोहफ़ा भेजें',
 'gift.ready':'आपका स्वागत तोहफ़ा तैयार है','gift.copy':'कॉपी','gift.shop':'खरीदारी शुरू करें',
 'gift.back':'आपका फिर से स्वागत है','gift.alert':'हाँ, मुझे बताएँ','gift.later':'अभी नहीं',
 'gift.first':'पहला ऑर्डर',
 'cart.emptyA':'आपका कार्ट खाली है.','cart.emptyB':'शुरू करने के लिए फ़ोन देखें.',
 'cart.keep':'खरीदारी जारी रखें','cart.remove':'हटाएँ','cart.bundle':'बंडल कीमत',
 'cart.vsNew':'इन्हें नया खरीदने की तुलना में','cart.fbt':'अक्सर साथ खरीदे जाते हैं',
 'cart.codes':'आपके कोड','cart.discount':'छूट','cart.payWith':'इससे भुगतान करें',
 'cart.reserve':'अपना ऑर्डर रिज़र्व करें','cart.confirm':'रिज़र्वेशन पक्का करें',
 'pdp.renewed':'प्रमाणित रिन्यूड','pdp.how':'यह कैसे काम करता है?',
 'pdp.drop':'कीमत घटे तो मुझे बताएँ','pdp.watch':'इस कीमत पर नज़र रखें',
 'wish.title':'आपकी पसंद','lead.tag':'लीड'
},
ur:{
 'gift.have':'آپ کے پاس ایک خیرمقدمی تحفہ ہے','gift.send':'میرا تحفہ بھیجیں',
 'gift.ready':'آپ کا خیرمقدمی تحفہ تیار ہے','gift.copy':'کاپی','gift.shop':'خریداری شروع کریں',
 'gift.back':'آپ کا دوبارہ خیرمقدم','gift.alert':'جی ہاں، مجھے بتائیں','gift.later':'ابھی نہیں',
 'gift.first':'پہلا آرڈر',
 'cart.emptyA':'آپ کی ٹوکری خالی ہے۔','cart.emptyB':'شروع کرنے کے لیے فون دیکھیں۔',
 'cart.keep':'خریداری جاری رکھیں','cart.remove':'ہٹائیں','cart.bundle':'بنڈل قیمت',
 'cart.vsNew':'انہیں نیا خریدنے کے مقابلے','cart.fbt':'اکثر ساتھ خریدے جاتے ہیں',
 'cart.codes':'آپ کے کوڈ','cart.discount':'رعایت','cart.payWith':'اس سے ادائیگی کریں',
 'cart.reserve':'اپنا آرڈر محفوظ کریں','cart.confirm':'بکنگ کی تصدیق کریں',
 'pdp.renewed':'تصدیق شدہ تجدید شدہ','pdp.how':'یہ کیسے کام کرتا ہے؟',
 'pdp.drop':'قیمت گرے تو مجھے بتائیں','pdp.watch':'اس قیمت پر نظر رکھیں',
 'wish.title':'آپ کی پسند','lead.tag':'لیڈ'
}
};
for (var _l in I18N_MORE) for (var _k in I18N_MORE[_l]) I18N[_l][_k] = I18N_MORE[_l][_k];


var I18N_DEAL = {
 "en": {
  "deal.cta": "See this deal",
  "deal.grade": "Grade A tested"
 },
 "ar": {
  "deal.cta": "شاهد هذا العرض",
  "deal.grade": "مفحوص درجة A"
 },
 "hi": {
  "deal.cta": "यह ऑफ़र देखें",
  "deal.grade": "ग्रेड A जाँचा हुआ"
 },
 "ur": {
  "deal.cta": "یہ پیشکش دیکھیں",
  "deal.grade": "گریڈ A جانچا ہوا"
 }
};
for (var _dl in I18N_DEAL) for (var _dk in I18N_DEAL[_dl]) I18N[_dl][_dk] = I18N_DEAL[_dl][_dk];


var I18N_X = {
 "en": {
  "anno.1": "Free same day delivery across Dubai",
  "anno.2": "12 month warranty on every graded phone",
  "anno.3": "AED 100 off your first order with <b>TDR100</b>",
  "anno.4": "Trade in and pay less",
  "anno.5": "Pay in 4, interest free with Tabby",
  "rev.1": "Grade B iPhone 13 looked better than described. Delivered in three hours.",
  "rev.2": "Traded my old 12 Pro. Agreed a price on WhatsApp and they honoured it exactly.",
  "rev.3": "They came to my building so I could check the phone first. No pressure at all.",
  "rev.4": "Battery health was exactly what the listing said. That is rare here.",
  "fin.h": "Pick what matters most and we shortlist instantly."
 },
 "ar": {
  "anno.1": "توصيل مجاني في نفس اليوم داخل دبي",
  "anno.2": "ضمان 12 شهرًا على كل هاتف مصنّف",
  "anno.3": "خصم 100 درهم على أول طلب مع <b>TDR100</b>",
  "anno.4": "استبدل هاتفك وادفع أقل",
  "anno.5": "ادفع على 4 دفعات بدون فوائد مع Tabby",
  "rev.1": "هاتف iPhone 13 بدرجة B كان أفضل مما وُصف. وصلني خلال ثلاث ساعات.",
  "rev.2": "استبدلت هاتفي 12 Pro. اتفقنا على السعر على واتساب والتزموا به تمامًا.",
  "rev.3": "جاؤوا إلى مبناي لأفحص الهاتف أولًا. بدون أي ضغط إطلاقًا.",
  "rev.4": "صحة البطارية كانت مطابقة تمامًا لما هو مكتوب. وهذا نادر هنا.",
  "fin.h": "اختر ما يهمك أكثر ونرشّح لك فورًا."
 },
 "hi": {
  "anno.1": "पूरे दुबई में उसी दिन मुफ़्त डिलीवरी",
  "anno.2": "हर ग्रेडेड फ़ोन पर 12 महीने की वारंटी",
  "anno.3": "<b>TDR100</b> से पहले ऑर्डर पर AED 100 की छूट",
  "anno.4": "एक्सचेंज करें और कम चुकाएँ",
  "anno.5": "Tabby के साथ 4 किस्तों में, बिना ब्याज",
  "rev.1": "ग्रेड B का iPhone 13 बताए गए से बेहतर निकला. तीन घंटे में डिलीवर हुआ.",
  "rev.2": "अपना पुराना 12 Pro एक्सचेंज किया. व्हाट्सऐप पर कीमत तय हुई और उन्होंने पूरी निभाई.",
  "rev.3": "वे मेरी बिल्डिंग तक आए ताकि मैं फ़ोन पहले जाँच सकूँ. कोई दबाव नहीं.",
  "rev.4": "बैटरी हेल्थ बिल्कुल वैसी ही थी जैसी लिस्टिंग में लिखी थी. यहाँ यह दुर्लभ है.",
  "fin.h": "जो सबसे ज़रूरी है वह चुनें, हम तुरंत शॉर्टलिस्ट कर देंगे."
 },
 "ur": {
  "anno.1": "پورے دبئی میں اسی دن مفت ڈیلیوری",
  "anno.2": "ہر درجہ بند فون پر 12 ماہ کی وارنٹی",
  "anno.3": "<b>TDR100</b> سے پہلے آرڈر پر AED 100 کی رعایت",
  "anno.4": "تبادلہ کریں اور کم ادا کریں",
  "anno.5": "Tabby کے ساتھ 4 قسطوں میں، بغیر سود",
  "rev.1": "گریڈ B کا iPhone 13 بتائے گئے سے بہتر نکلا۔ تین گھنٹے میں پہنچ گیا۔",
  "rev.2": "اپنا پرانا 12 Pro تبدیل کیا۔ واٹس ایپ پر قیمت طے ہوئی اور انہوں نے پوری نبھائی۔",
  "rev.3": "وہ میری بلڈنگ تک آئے تاکہ میں فون پہلے جانچ سکوں۔ کوئی دباؤ نہیں۔",
  "rev.4": "بیٹری کی صحت بالکل ویسی ہی تھی جیسی درج تھی۔ یہاں یہ کم ہی ہوتا ہے۔",
  "fin.h": "جو سب سے اہم ہے وہ چنیں، ہم فوراً شارٹ لسٹ کر دیں گے۔"
 }
};
for (var _xl in I18N_X) for (var _xk in I18N_X[_xl]) I18N[_xl][_xk] = I18N_X[_xl][_xk];


var I18N_Y = {
 "en": {
  "fin.none": "Nothing in stock at that budget yet. Raise the budget, or let us message you when something lands.",
  "d.deira": "Deira",
  "d.quoz": "Al Quoz",
  "d.marina": "Marina",
  "d.baraha": "Al Baraha"
 },
 "ar": {
  "fin.none": "لا يوجد شيء متاح ضمن هذه الميزانية حاليًا. ارفع الميزانية، أو دعنا نراسلك عند توفر شيء.",
  "d.deira": "ديرة",
  "d.quoz": "القوز",
  "d.marina": "المارينا",
  "d.baraha": "البراحة"
 },
 "hi": {
  "fin.none": "इस बजट में अभी कुछ उपलब्ध नहीं है. बजट बढ़ाएँ, या कुछ आने पर हमें मैसेज करने दें.",
  "d.deira": "देइरा",
  "d.quoz": "अल क़ूज़",
  "d.marina": "मरीना",
  "d.baraha": "अल बराहा"
 },
 "ur": {
  "fin.none": "اس بجٹ میں ابھی کچھ دستیاب نہیں۔ بجٹ بڑھائیں، یا کچھ آنے پر ہمیں پیغام بھیجنے دیں۔",
  "d.deira": "دیرہ",
  "d.quoz": "القوز",
  "d.marina": "مرینا",
  "d.baraha": "البراحہ"
 }
};
for (var _yl in I18N_Y) for (var _yk in I18N_Y[_yl]) I18N[_yl][_yk] = I18N_Y[_yl][_yk];


var I18N_Z = {"en":{"rail.quick":"30 seconds"},"ar":{"rail.quick":"30 ثانية"},"hi":{"rail.quick":"30 सेकंड"},"ur":{"rail.quick":"30 سیکنڈ"}};
for (var _zl in I18N_Z) for (var _zk in I18N_Z[_zl]) I18N[_zl][_zk] = I18N_Z[_zl][_zk];


var I18N_W = {"en":{"ui.save":"Save"},"ar":{"ui.save":"وفّر"},"hi":{"ui.save":"बचत"},"ur":{"ui.save":"بچت"}};
for (var _wl in I18N_W) for (var _wk in I18N_W[_wl]) I18N[_wl][_wk] = I18N_W[_wl][_wk];


var I18N_V9 = {
 "en": {
  "ui.back": "Back",
  "tin.stepN": "Step {a} of {b}",
  "tin.q2model": "Which one is it?",
  "tin.hint2model": "Rough is fine, we confirm on WhatsApp",
  "m.ip16": "iPhone 16 series",
  "m.ip15": "iPhone 15 series",
  "m.ip14": "iPhone 14 series",
  "m.ip13": "iPhone 13 series",
  "m.ip12": "iPhone 12 series",
  "m.ipOld": "iPhone 11 or older",
  "m.s25": "Galaxy S24 or S25",
  "m.s23": "Galaxy S22 or S23",
  "m.s21": "Galaxy S21 or older",
  "m.sA": "Galaxy A series",
  "m.sFold": "Fold or Flip",
  "m.mi15": "Xiaomi 14 or 15",
  "m.mi13": "Xiaomi 12 or 13",
  "m.rNote": "Redmi Note",
  "m.redmi": "Redmi",
  "m.poco": "POCO",
  "m.hP": "P series",
  "m.hMate": "Mate series",
  "m.hNova": "Nova series",
  "m.hY": "Y series",
  "m.other": "Another model",
  "log.tinModel": "Trade in model: {m}"
 },
 "ar": {
  "ui.back": "رجوع",
  "tin.stepN": "الخطوة {a} من {b}",
  "tin.q2model": "أي طراز منها؟",
  "tin.hint2model": "تقريبي يكفي، نؤكده على واتساب",
  "m.ip16": "سلسلة iPhone 16",
  "m.ip15": "سلسلة iPhone 15",
  "m.ip14": "سلسلة iPhone 14",
  "m.ip13": "سلسلة iPhone 13",
  "m.ip12": "سلسلة iPhone 12",
  "m.ipOld": "iPhone 11 أو أقدم",
  "m.s25": "Galaxy S24 أو S25",
  "m.s23": "Galaxy S22 أو S23",
  "m.s21": "Galaxy S21 أو أقدم",
  "m.sA": "سلسلة Galaxy A",
  "m.sFold": "Fold أو Flip",
  "m.mi15": "Xiaomi 14 أو 15",
  "m.mi13": "Xiaomi 12 أو 13",
  "m.rNote": "Redmi Note",
  "m.redmi": "Redmi",
  "m.poco": "POCO",
  "m.hP": "سلسلة P",
  "m.hMate": "سلسلة Mate",
  "m.hNova": "سلسلة Nova",
  "m.hY": "سلسلة Y",
  "m.other": "طراز آخر",
  "log.tinModel": "طراز الاستبدال: {m}"
 },
 "hi": {
  "ui.back": "वापस",
  "tin.stepN": "चरण {a} / {b}",
  "tin.q2model": "कौन सा वाला है?",
  "tin.hint2model": "अंदाज़ा काफ़ी है, व्हाट्सऐप पर पक्का कर लेंगे",
  "m.ip16": "iPhone 16 सीरीज़",
  "m.ip15": "iPhone 15 सीरीज़",
  "m.ip14": "iPhone 14 सीरीज़",
  "m.ip13": "iPhone 13 सीरीज़",
  "m.ip12": "iPhone 12 सीरीज़",
  "m.ipOld": "iPhone 11 या पुराना",
  "m.s25": "Galaxy S24 या S25",
  "m.s23": "Galaxy S22 या S23",
  "m.s21": "Galaxy S21 या पुराना",
  "m.sA": "Galaxy A सीरीज़",
  "m.sFold": "Fold या Flip",
  "m.mi15": "Xiaomi 14 या 15",
  "m.mi13": "Xiaomi 12 या 13",
  "m.rNote": "Redmi Note",
  "m.redmi": "Redmi",
  "m.poco": "POCO",
  "m.hP": "P सीरीज़",
  "m.hMate": "Mate सीरीज़",
  "m.hNova": "Nova सीरीज़",
  "m.hY": "Y सीरीज़",
  "m.other": "कोई और मॉडल",
  "log.tinModel": "एक्सचेंज मॉडल: {m}"
 },
 "ur": {
  "ui.back": "واپس",
  "tin.stepN": "مرحلہ {a} از {b}",
  "tin.q2model": "کون سا والا ہے؟",
  "tin.hint2model": "اندازہ کافی ہے، واٹس ایپ پر پکا کر لیں گے",
  "m.ip16": "iPhone 16 سیریز",
  "m.ip15": "iPhone 15 سیریز",
  "m.ip14": "iPhone 14 سیریز",
  "m.ip13": "iPhone 13 سیریز",
  "m.ip12": "iPhone 12 سیریز",
  "m.ipOld": "iPhone 11 یا پرانا",
  "m.s25": "Galaxy S24 یا S25",
  "m.s23": "Galaxy S22 یا S23",
  "m.s21": "Galaxy S21 یا پرانا",
  "m.sA": "Galaxy A سیریز",
  "m.sFold": "Fold یا Flip",
  "m.mi15": "Xiaomi 14 یا 15",
  "m.mi13": "Xiaomi 12 یا 13",
  "m.rNote": "Redmi Note",
  "m.redmi": "Redmi",
  "m.poco": "POCO",
  "m.hP": "P سیریز",
  "m.hMate": "Mate سیریز",
  "m.hNova": "Nova سیریز",
  "m.hY": "Y سیریز",
  "m.other": "کوئی اور ماڈل",
  "log.tinModel": "تبادلے کا ماڈل: {m}"
 }
};
for (var _9l in I18N_V9) for (var _9k in I18N_V9[_9l]) I18N[_9l][_9k] = I18N_V9[_9l][_9k];


var I18N_G9 = {
 "en": {
  "gift.have2": "First time customers get something off their first order. Tell us where to send it.",
  "gift.note": "We message you the code on WhatsApp and send occasional stock alerts. Opt out any time by replying STOP.",
  "f.firstName": "First name"
 },
 "ar": {
  "gift.have2": "العملاء الجدد يحصلون على خصم على أول طلب. أخبرنا أين نرسله.",
  "gift.note": "نرسل لك الكود على واتساب مع تنبيهات بضاعة من حين لآخر. يمكنك إلغاء الاشتراك في أي وقت بالرد بكلمة STOP.",
  "f.firstName": "الاسم الأول"
 },
 "hi": {
  "gift.have2": "पहली बार खरीदने वालों को पहले ऑर्डर पर छूट मिलती है. बताएँ कहाँ भेजें.",
  "gift.note": "हम कोड व्हाट्सऐप पर भेजेंगे और कभी कभी स्टॉक अलर्ट भी. STOP लिखकर कभी भी बंद कर सकते हैं.",
  "f.firstName": "पहला नाम"
 },
 "ur": {
  "gift.have2": "پہلی بار خریدنے والوں کو پہلے آرڈر پر رعایت ملتی ہے۔ بتائیں کہاں بھیجیں۔",
  "gift.note": "ہم کوڈ واٹس ایپ پر بھیجیں گے اور کبھی کبھار اسٹاک الرٹ بھی۔ STOP لکھ کر کسی بھی وقت بند کر سکتے ہیں۔",
  "f.firstName": "پہلا نام"
 }
};
for (var _gl in I18N_G9) for (var _gk in I18N_G9[_gl]) I18N[_gl][_gk] = I18N_G9[_gl][_gk];


var I18N_C9 = {"en":{"gift.copied":"Copied"},"ar":{"gift.copied":"تم النسخ"},"hi":{"gift.copied":"कॉपी हो गया"},"ur":{"gift.copied":"کاپی ہو گیا"}};
for (var _cl in I18N_C9) for (var _ck in I18N_C9[_cl]) I18N[_cl][_ck] = I18N_C9[_cl][_ck];

/* ------------------------------------------------------------------ runtime */

var LANG = 'en';
try { LANG = localStorage.getItem('tdr-lang') || 'en'; } catch (e) {}
if (!I18N[LANG]) LANG = 'en';

function t(k) {
  var d = I18N[LANG];
  return (d && d[k] !== undefined) ? d[k] : (I18N.en[k] !== undefined ? I18N.en[k] : k);
}
function langDir(code) {
  for (var i = 0; i < LANGS.length; i++) if (LANGS[i].code === code) return LANGS[i].dir;
  return 'ltr';
}

/* Walks the document and fills anything carrying a key. `data-i18n` sets text,
   `data-i18n-ph` sets a placeholder, `data-i18n-al` sets an aria-label. */
function applyI18n(root) {
  root = root || document;
  root.querySelectorAll('[data-i18n]').forEach(function (el) {
    el.textContent = t(el.getAttribute('data-i18n'));
  });
  root.querySelectorAll('[data-i18n-ph]').forEach(function (el) {
    el.setAttribute('placeholder', t(el.getAttribute('data-i18n-ph')));
  });
  root.querySelectorAll('[data-i18n-al]').forEach(function (el) {
    el.setAttribute('aria-label', t(el.getAttribute('data-i18n-al')));
  });
}

/* Everything JS renders has to be rebuilt on a language change. Modules register
   here rather than i18n reaching into them. */
var I18N_HOOKS = [];
function onLangChange(fn) { I18N_HOOKS.push(fn); }

function setLang(code) {
  if (!I18N[code]) return;
  LANG = code;
  try { localStorage.setItem('tdr-lang', code); } catch (e) {}
  var d = document.documentElement;
  d.setAttribute('lang', code);
  d.setAttribute('dir', langDir(code));
  d.setAttribute('data-lang', code);
  applyI18n();
  I18N_HOOKS.forEach(function (fn) { try { fn(); } catch (e) {} });
  document.querySelectorAll('[data-lang-opt]').forEach(function (b) {
    b.classList.toggle('on', b.getAttribute('data-lang-opt') === code);
  });
}

/* Set direction before first paint so an RTL language never flashes as LTR. */
(function () {
  var d = document.documentElement;
  d.setAttribute('lang', LANG);
  d.setAttribute('dir', langDir(LANG));
  d.setAttribute('data-lang', LANG);
})();

/* ---------------------------------------------------------------- switcher */
(function () {
  var btn = document.getElementById('langBtn'),
      menu = document.getElementById('langMenu'),
      now = document.getElementById('langNow');
  if (!btn || !menu) return;

  var SHORT = { en: 'EN', ar: 'AR', hi: 'HI', ur: 'UR' };

  function flag(code, cls) {
    return '<img class="fl ' + (cls || '') + '" src="assets/img/flag/' + code +
      '.png" alt="" width="26" height="18" loading="lazy">';
  }
  menu.innerHTML = LANGS.map(function (l) {
    return '<button type="button" data-lang-opt="' + l.code + '">' +
      flag(l.code) + '<b>' + l.name + '</b><span>' + SHORT[l.code] + '</span></button>';
  }).join('');
  /* the trigger shows the flag of whatever is active */
  function paintTrigger() {
    var g = btn.querySelector('svg');
    var old = btn.querySelector('.fl');
    if (old) old.remove();
    if (g) g.insertAdjacentHTML('afterend', flag(LANG));
    else btn.insertAdjacentHTML('afterbegin', flag(LANG));
  }

  function close() { menu.hidden = true; btn.setAttribute('aria-expanded', 'false'); }
  function open() { menu.hidden = false; btn.setAttribute('aria-expanded', 'true'); }

  btn.addEventListener('click', function (e) {
    e.stopPropagation();
    menu.hidden ? open() : close();
  });
  menu.addEventListener('click', function (e) {
    var b = e.target.closest('[data-lang-opt]');
    if (!b) return;
    setLang(b.getAttribute('data-lang-opt'));
    now.textContent = SHORT[LANG];
    paintTrigger();
    close();
  });
  document.addEventListener('click', function () { close(); });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') close(); });

  now.textContent = SHORT[LANG];
  paintTrigger();
  close();
})();

/* First paint. Anything rendered by main.js registers its own hook and is
   redrawn by setLang, so this only has to cover the static markup. */
document.addEventListener('DOMContentLoaded', function () { applyI18n(); });
applyI18n();
